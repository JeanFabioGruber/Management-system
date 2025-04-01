// src/services/blobService.ts
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';
import { error } from 'console';
import e = require('express');

const connectionString = "DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;";
if (!connectionString) {
  throw new Error("AZURE_STORAGE_CONNECTION_STRING não está definida.");
}

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
const containerName = 'imageproducts'; 

export async function getOrCreateContainer(): Promise<ContainerClient> {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  await containerClient.createIfNotExists();
  console.log(`Container '${containerName}' verificado/criado.`);
  return containerClient;
}

export async function getContainer(): Promise<ContainerClient> {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const exists = await containerClient.exists();
  if (!exists) {
    throw new Error(`Container '${containerName}' não existe.`);
  }
  return containerClient;
}

export async function uploadBlob(blobName: string, content: Buffer | string): Promise<string> {
  const containerClient = await getOrCreateContainer();
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  await blockBlobClient.upload(content, typeof content === 'string' ? content.length : content.byteLength);
  console.log(`Upload do blob '${blobName}' concluído.`);
  return blockBlobClient.name;
}

export async function downloadBlob(blobName: string): Promise<Buffer> {
  const containerClient = await getOrCreateContainer();
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const downloadResponse = await blockBlobClient.download(0);
  const downloaded = await streamToBuffer(downloadResponse.readableStreamBody ?? null);
  return downloaded;
}

export async function deleteBlob(blobName: string): Promise<void> {
  const containerClient = await getContainer();
  const exists = await containerClient.getBlockBlobClient(blobName).exists();
  if (!exists) {
    console.log(`Blob '${blobName}' não existe.`);
    throw new Error(`Blob '${blobName}' não existe.`);
  }  
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  await blockBlobClient.deleteIfExists();
  console.log(`Blob '${blobName}' excluído.`); 
}

async function streamToBuffer(readableStream: NodeJS.ReadableStream | null): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    if (!readableStream) return resolve(Buffer.alloc(0));
    readableStream.on('data', (data: Buffer) => {
      chunks.push(data);
    });
    readableStream.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
    readableStream.on('error', reject);
  });
}
