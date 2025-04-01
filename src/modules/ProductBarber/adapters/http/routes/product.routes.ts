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
router.post('/', upload.single('file'), productController.create.bind(productController));
router.get('/image/:id', productController.findImage.bind(productController));
router.put('/', productController.update.bind(productController));
router.delete('/:id', productController.delete.bind(productController));


export default router;  
