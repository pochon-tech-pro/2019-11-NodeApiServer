import express from 'express'

const app: express.Express = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router: express.Router = express.Router()

router.get('/api/getTest', (req:express.Request, res:express.Response) => {
  res.send(req.query) // curl localhost:3000/api/get?name=hoge
})
router.post('/api/postTest', (req:express.Request, res:express.Response) => {
  res.send(req.body) // curl -X POST localhost:3000/api/post -d "name=hoge"
})
app.use(router)

app.listen(3000,()=>{ console.log('Example app listening on port 3000!') })

