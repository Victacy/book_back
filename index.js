const express=require('express')
const app=express()
const port=3050

const adminRouter=require('./controllers/admin')
const authorRouter=require('./controllers/author')
const bookRouter=require('./controllers/book')




app.use(express.json());


app.use('/authors',authorRouter)
app.use('/books',bookRouter)
app.use('/admin',adminRouter)




app.listen(port,() =>{
    console.log(`the app is running on port ${port}`)
})