import { Router } from "express";
import productRoutes from "../../../modules/ProductBarber/adapters/http/routes/product.routes"
import groupProductRoutes from "../../../modules/GroupProdut/adapters/http/routes/groupProduct.routes"

const routes = Router({ mergeParams: true });

routes.use('/products', productRoutes);
routes.use('/groupProducts', groupProductRoutes);


export default routes;