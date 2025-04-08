import { Router } from "express";
import { SupplierService } from "../../../core/services/supplierService";
import { typeormSupplierRepo } from "../../secondaryAdpter/typeOrmSupplier";
import { SupplierController } from "../constroller/supplierController";




const supplierRepository = new typeormSupplierRepo();
const supplierService = new SupplierService(supplierRepository);

const router = Router({ mergeParams: true });
const supplierController = new SupplierController(supplierService);

router.get('/', supplierController.findAll.bind(supplierController));
router.get('/:id', supplierController.findById.bind(supplierController));
router.post('/', supplierController.create.bind(supplierController));
router.put('/:id', supplierController.update.bind(supplierController));
router.delete('/:id', supplierController.delete.bind(supplierController));
router.post('/cnpj', supplierController.createWithcnpj.bind(supplierController));


export default router;