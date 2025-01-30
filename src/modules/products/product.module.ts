import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";


export class ProductModule {
  public readonly productController: ProductController;

  constructor() {
    const productService = new ProductService();
    this.productController = new ProductController(productService);

    // this.app.use("/api/product", ProductRoutes(this.productController));

  }
}