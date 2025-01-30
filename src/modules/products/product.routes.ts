import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

export default (productController: ProductController) => {
    router.get("/", productController.findAll.bind(productController));
    router.post("/", productController.create.bind(productController));
    router.put("/:id", productController.update.bind(productController));
    router.delete("/:id", productController.delete.bind(productController));

    return router;
};