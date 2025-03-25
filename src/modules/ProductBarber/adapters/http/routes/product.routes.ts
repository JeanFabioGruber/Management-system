import { Router } from "express";
import { ProductController } from "../controller/productController";
import { ProductService } from "../../../core/services/productService";
import { typeormProductRepo } from "../../secondaryAdpter/typeOrmProductRepo";

const productRepository = new typeormProductRepo();
const productService = new ProductService(productRepository);

const router = Router({ mergeParams: true });
const productController = new ProductController(productService);

router.get('/', productController.findAll.bind(productController));
router.get('/:id', productController.findById.bind(productController));
router.post('/', productController.create.bind(productController));
router.put('/', productController.update.bind(productController));
router.delete('/:id', productController.delete.bind(productController));


export default router;  
