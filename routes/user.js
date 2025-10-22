// routes/user.js
import { Router } from "express";
import { usersGet } from "../controllers/user.js"; // ✅ nombre plural, coincide con la carpeta
import { usersPost } from "../controllers/user.js";
import { usersPut } from "../controllers/user.js";
import { usersDelete } from "../controllers/user.js";
import { usersPatch } from "../controllers/user.js";

const router = Router();

// ✅ GET - usando controlador externo
router.get("/", usersGet);

// ✅ PUT
router.put("/:id", usersPut);

// ✅ POST
router.post("/", usersPost);

// ✅ DELETE
router.delete("/", usersDelete);

// ✅ PATCH
router.patch("/", usersPatch);

export default router;
