const express=require('express')
const bookRouter=express.Router()
const bookData=require("../data/books.json")


// route to get list of all books
bookRouter.get('/',(request,response) =>{
    console.log(request);
    response.send(bookData)
})


bookRouter.get('/:bookId',(request,response) =>{
    const newBook=request.body.bookId
    bookData.push=request.body.book
    response.status(201).send(bookData[bookId - 1])
})


module.exports=bookRouter;