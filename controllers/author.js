const { response } = require('express')
const express=require('express')
const authorRouter=express.Router();
const authData=("../data/authors.json")
const authenticate=require('../helper/author')


// route to get list of all authors
authorRouter.get('/', (request, response) => {
   console.log(request)
   response.send(authData)
})

authorRouter.post('/',authenticate.authenticateToken,(request,response) => {
    const newAuthor=request.body.author
    authData.push(newAuthor)
    response.status(201).send(newAuthor)
})


// route to get a specific author with an id
authorRouter.get('/:authorId',(request,response) =>{
    const authorId=request.params.id
    const author=authData.find(author=>author.authorId === authorId)
    response.status(200).send({author})

})

authorRouter.get('/:authorId/books',(request,response) =>{
    const authorId=request.params.authorId
    let books=authData.find(author => author.authorId ===authorId)
    const aBooks=books[0].books
    if(books){
        response.status(200).send(aBooks)
    }else{
        response.status(200).send('Author id not found')
    }
})

authorRouter.delete('/:authorId',authenticate.authenticateToken,(request,response) =>{
 response.send({message:"delted successfully"})
})




module.exports=authorRouter;
