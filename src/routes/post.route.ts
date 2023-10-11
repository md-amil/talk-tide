import { Router } from "express";
const router = Router();
import { postControllers } from "../controllers";
import auth from "../middleware/auth";

const { get, store, show, update, remove } = postControllers;

router.route("/").get(get).post(auth,store);
router.route("/:id").get(show).put(update).delete(remove);

export default router;
