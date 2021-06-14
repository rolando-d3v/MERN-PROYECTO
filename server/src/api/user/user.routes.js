import { Router } from "express";
import * as userCtrl from "./user.controller";

const router = Router();

router.post("/", userCtrl.createUser);
router.get("/", userCtrl.getUsers);
router.get("/:userId", userCtrl.getUserId);
router.delete("/:userId", userCtrl.deleteUser);

export default router;
