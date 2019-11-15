import express from 'express'

const app: express.Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router: express.Router = express.Router()

router.get('/api/get', (req:express.Request, res:express.Response) => {
  res.send(req.query) // curl localhost:3000/api/get?name=hoge
})
router.post('/api/post', (req:express.Request, res:express.Response) => {
  res.send(req.body) // curl -X POST localhost:3000/api/post -d "name=hoge"
})
app.use(router)

app.listen(3000,()=>{ console.log('Example app listening on port 3000!') })