import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import ProductRoutes from "./modules/products/product.routes";

import { errorHandler } from "./middlewares/error.middlewares";
import { ProductController } from "./modules/products/product.controller";
import { ProductService } from "./modules/products/product.service";

class App {
  private readonly app: Application;
  private readonly port: number;
  private readonly productController: ProductController;

  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || "3000");

    // Initialize ProductService and ProductController can be in product.module
    const productService = new ProductService();
    this.productController = new ProductController(productService);

    this.init();
  }

  private init() {
    this.initRoutes();
    this.initMiddlewares();
  }

  private initMiddlewares() {
    dotenv.config();

    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(errorHandler);
  }

  private initRoutes() {
    this.app.use("/api/product", ProductRoutes(this.productController));
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

export default App;
