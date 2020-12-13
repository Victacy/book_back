const { response } = require('express')
const express=require('express')
const authorRouter=express.Router();
const authData=("../data/authors.json")
const authenticate=require('../helper/author')


// route to get list of all authors
authorRouter.get('/', (request, response) => {
    const authors = new Array()
    for(let i = 0; i < authData.length; i++){
        authors.push(authData[i].name)
    }
    response.status(200).send(authors)
})

authorRouter.post('/',authenticate.authenticateToken,(request,response) => {
    const newAuthor=request.body.author
    authData.push(newAuthor)
    response.status(201).send(newAuthor)
})

authorRouter.get('/:authorId',(request,response) =>{
    let author=authData.find(author=>author["authorId"] === request.params.authorId)
    if(author){
        response.status(200).send(author)
    }else{
        response.status(400).send("Author id not found")
    }

})

authorRouter.get('/:authorId/books',(request,response) =>{
    let books=authData.find(author => author["authorId"] ===request.params.authorId)
    if(books){
        response.status(200).send(books.books)
    }else{
        response.status(200).send('Author id not found')
    }
})

authorRouter.delete('/:authorId',authenticate.authenticateToken,(request,response) =>{
  let deleteId=request.params.authorId  
})




module.exports=authorRouter;
