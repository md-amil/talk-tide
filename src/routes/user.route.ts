import {Router} from 'express'
import { userControllers } from '../controllers';
import auth from '../middleware/auth';
const  router = Router();

const { get, store, show, update, remove,verifyToken } = userControllers;

router.route("/").get(get).post(store);
router.post('/verify-token',auth,verifyToken)
router.route("/:id").get(show).put(update).delete(remove);

export default router