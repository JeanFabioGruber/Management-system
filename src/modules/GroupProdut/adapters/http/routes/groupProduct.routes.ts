import { Router } from "express";
import { TypeOrmGroupProductRepo } from "../../secondaryAdpter/typeOrmGroupProductRepo";
import { GroupProductService } from "../../../core/services/groupProductService";
import { GroupProductController } from "../controller/groupProductController";
import e = require("express");


const groupProductRepository = new TypeOrmGroupProductRepo();
const groupProductService = new GroupProductService(groupProductRepository);

const router = Router({ mergeParams: true });
const groupProductController = new GroupProductController(groupProductService);

router.get('/', groupProductController.findAll.bind(groupProductController));
router.get('/:id', groupProductController.findById.bind(groupProductController));
router.post('/', groupProductController.create.bind(groupProductController));
router.put('/:id', groupProductController.update.bind(groupProductController));
router.delete('/:id', groupProductController.delete.bind(groupProductController));


export default router;