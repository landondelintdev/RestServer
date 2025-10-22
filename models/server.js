// models/server.js
import express from "express";
import cors from "cors";
import userRoutes from "../routes/user.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT ?? 8080; // fallback seguro
    this.usersPath = "/api/users";

    // Middlewares
    this.middlewares();

    // Rutas
    this.routes();
  }

  middlewares() {
    // CORS primero
    this.app.use(cors());

    // Body parsers
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Directorio público (sirve index.html en '/')
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

export default Server;
