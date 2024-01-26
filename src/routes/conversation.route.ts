import {Router} from 'express'
const  router = Router();
import { conversationController } from '../controllers';
import auth from '../middleware/auth';
const { get, store, show, update, remove } = conversationController;

// router.get('/', auth, get)
// router.post('/', store )
// router.get('/:id', show )
// router.put('/:id', update )
// router.delete('/:id', remove )

router.route("/").get(get).post(store);
router.route("/:id").get(show).put(update).delete(remove);
// router.route('/:id').get(credController.show).put(credController.update).delete(credController.deleteCred)
// router.param("id",(req:Request,res:Response,next:NextFunction,id:string)=>{
//     next()
// })
export default router