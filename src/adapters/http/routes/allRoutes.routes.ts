import { Router } from "express";
import productRoutes from "../../../modules/ProductBarber/adapters/http/routes/product.routes"


const routes = Router({ mergeParams: true });

routes.use('/products', productRoutes);


export default routes;