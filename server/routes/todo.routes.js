import express from 'express'
import todoCtrl from '../controllers/todo.controller'
import authCtrl from '../controllers/auth.controller'
const router = express.Router()

router.route('/api/todos') //todo
  .get(todoCtrl.redisMiddleware, todoCtrl.list)
  .post(todoCtrl.create)


router.route('/api/todos/:todoId')
  .get(todoCtrl.read)
  .put(todoCtrl.update)
  .delete(todoCtrl.remove)

router.param('todoId', todoCtrl.todoByID)

export default router
