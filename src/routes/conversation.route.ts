import {Router} from 'express'
const  router = Router();
import { conversationController } from '../controllers';
const { get, store, show, update, remove } = conversationController;

router.route("/").get(get).post(store);
router.route("/:id").get(show).put(update).delete(remove);

// router.route('/:id').get(credController.show).put(credController.update).delete(credController.deleteCred)

// router.param("id",(req:Request,res:Response,next:NextFunction,id:string)=>{
//     next()
// })
export default router