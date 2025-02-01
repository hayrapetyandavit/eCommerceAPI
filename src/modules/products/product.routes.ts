import { BaseRouter } from "../../lib/base.router";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";

const productService = new ProductService();
const productController = new ProductController(productService);

class ProductRouter extends BaseRouter {

  protected initializeRoutes(): void {
    this.router.get("/", productController.findAll.bind(productController));
    this.router.post("/", productController.create.bind(productController));
    this.router.put("/:id", productController.update.bind(productController));
    this.router.delete(
      "/:id",
      productController.delete.bind(productController)
    );
  }
}

export default new ProductRouter().router;
