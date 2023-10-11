import { Router } from "express";
const router = Router();
import { messageController } from "../controllers";
import auth from "../middleware/auth";

const { get, store, show, update, remove } = messageController;

router.route("/").get(get).post(auth,store);
router.route("/:id").get(show).put(auth,update).delete(auth,remove);

export default router;
