import { Router } from "express";
const router = Router();
import { messageController } from "../controllers";

const { get, store, show, update, remove } = messageController;

// user either one
// 1
// router.get('/',messageController.get)
// router.post('/',messageController.store)
// router.get('/:id',messageController.show)
// router.put('/:id',messageController.update)
// router.delete('/:id',messageController.remove)

// 2
router.route("/").get(get).post(store);
router.route("/:id").get(show).put(update).delete(remove);

export default router;
