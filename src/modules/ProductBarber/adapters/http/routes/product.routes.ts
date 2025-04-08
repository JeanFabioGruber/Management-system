import { Router } from "express";
import { ProductController } from "../controller/productController";
import { ProductService } from "../../../core/services/productService";
import { typeormProductRepo } from "../../secondaryAdpter/typeOrmProductRepo";
import multer = require("multer");
// import { handleUpload } from "../../../../../adapters/azure/services/blobService";


const upload = multer();
const productRepository = new typeormProductRepo();
const productService = new ProductService(productRepository);

const router = Router({ mergeParams: true });
const productController = new ProductController(productService);

router.get('/', productController.findAll.bind(productController));
router.get('/:id', productController.findById.bind(productController));
router.post('/:idGroupProduct/:idSupplier', upload.single('file'), productController.create.bind(productController));
router.get('/image/:barcode', productController.findImage.bind(productController));
router.put('/barcode/:barcode', productController.update.bind(productController));
router.delete('/barcode/:barcode', productController.delete.bind(productController));
router.get('/barcode/:barcode', productController.findByBarcode.bind(productController));
router.get('/group/:group', productController.findByGroup.bind(productController));
router.put('/group/:barcode', productController.updateGroupProduct.bind(productController));


export default router;  
