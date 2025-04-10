# Management System

## 📋 Descrição do Projeto

O **Management System** é uma aplicação robusta e escalável desenvolvida para gerenciar o Back_End de Sistema que possua Produtos e serviços. O projeto utiliza a **Arquitetura Hexagonal** para garantir flexibilidade e independência entre os componentes, além de seguir uma abordagem modular para facilitar a manutenção e a expansão.

---

## 🚀 Funcionalidades Principais

- **Gerenciamento de Produtos**:
  - Cadastro, consulta e atualização de produtos.
  - Armazenamento de imagem no **Azure Blobs**
  - Relacinamento Many To Many com Grupos
  - Integração com fornecedores.

- **Gerenciamento de Fornecedores**:
  - Cadastro, consulta e atualização de fornecedores.
  - Buscando dados com a Api da **Receita Federal**
  - Mapeamento de informações detalhadas, como CNPJ, endereço, e-mail e telefone.
  - Associação de produtos aos fornecedores.
 
- **Novas Fetures em desenvolvimento**
  -{...}

- **Arquitetura Hexagonal**:
  - Separação clara entre camadas de domínio, aplicação e infraestrutura.
  - Facilidade para adicionar novas interfaces de entrada (APIs, CLI, etc.) ou saída (bancos de dados, serviços externos).

- **Rotas RESTful**:
  - Endpoints organizados para gerenciar fornecedores e produtos.

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem**: TypeScript
- **Framework**: Node.js
- **Arquitetura**: Hexagonal
- **Gerenciamento de Dependências**: npm
- **Banco de Dados**: PostgreSQL (ou outro banco configurável)

---


## 🌐 Rotas RESTful

### Fornecedores

- **GET** `api/suppliers`: Lista todos os fornecedores.
- **POST** `/api/suppliers`: Cria um novo fornecedor.
- **POST** `/api/suppliers/cnpj/`: Cria um novo fornecedor com o ${CNPJ}, buscando dados na Receita Federal.
- **GET** `/api/suppliers/:id`: Retorna os detalhes de um fornecedor específico.
- **PUT** `/api/suppliers/:id`: Atualiza os dados de um fornecedor.
- **DELETE** `/api/suppliers/:id`: Remove um fornecedor.

### Produtos

- **GET** `/api/products`: Lista todos os produtos.
- **POST** `/api/products/:groupID/:SupplierID`: Cria um novo produto.
- **GET** `/api/products/:id`: Retorna os detalhes de um produto específico.
- **PUT** `/api/products/:id`: Atualiza os dados de um produto.
- **DELETE** `/api/products/:id`: Remove um produto.

### Grupo

- **GET** `/api/groupProduct`: Lista todos os grupos.
- **POST** `/api/groupProduct`: Cria um novo grupo.
- **GET** `/api/groupProduct/:id`: Retorna os detalhes de um grupo específico.
- **PUT** `/api/groupProduct/:id`: Atualiza os dados de um grupo.
- **DELETE** `/api/groupProduct/:id`: Remove um grupo.
---

## 🧑‍💻 Como Executar o Projeto

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/JeanFabioGruber/Management-system.git
   ```
2. **Instale as Dependências**:
   ```bash
   npm install
   ```
3. **Configure o Banco de Dados**:
   - Atualize o arquivo `DatabaseConfig.ts` com as credenciais do banco.
4. **Execute a Aplicação**:
   ```bash
   npm start
   ```

---

## 🔽 Entitys:

![image](https://github.com/user-attachments/assets/3c6cb7d4-2b02-4b21-bdc5-3ac75efb6d81)

---

## 📞 Contato

Caso tenha dúvidas ou sugestões, entre em contato:

- **Autor**: Jean Fabio Gruber
- **E-mail**: jeanfabiogruber2109@gmail.com
- **LinkedIn**: [Jean Fabio Gruber](https://www.linkedin.com/in/jean-fabio-gruber-7a8bba27b/)

---

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
