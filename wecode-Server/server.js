const express = require('express')
const app = express()
const port = 3000

const USERS =[];
const QUESTIONS= [{
  title:"Two Sum",
  description:"Given an array, return maximum in the array",
  testCases:[{
    input:"[1,2,3,4,5]",
    output:"5"
  }]
}]

const SUBMISSION= [{
  userId:"1",
  questionId:"1",
  code:"function max(arr){return Math.max(...arr)}",
  status:"rejected"

},
{
  userId:"1",
  questionId:"2",
  code:"function max(arr){return Math.max(...arr)}",
  status:"accepted"
}]

app.post('/signup', (req, res) => {

//i have to add logic to decode body
// body should have email and password
//Store email and password (as it for now) in the USERS array above (only if the user with the given email doesn't exist 
// return 200 status code to client 


  res.send('Hello World!')
})


app.post('/login', (req, res) => {

//Add logic to decode body
// body should have email and password
// Check if the user with the given email exists in the USERS array
// Also ensure that the password is the same

// If the password is the same, return back 200 status code to the client
// Also send back a token (any random string will do for now)
// If the password is not the same, return back 401 status code to the client

    res.send('Hello World!')
  })

app.get('/questions', (req, res) => {
  //return the user all the questions in question array
    res.send('Hello World!')
  })

app.get('/submissions', (req, res) => {
  //return the users submissions for this problem
  
    res.send('Hello World!')
  })
  
app.get('/submissions', (req, res) => {
   // let the user submit a problem, randomly accept or reject the solution
   // store the submission in SUBMISSION ARRAY ABOVE
    
      res.send('Hello World!')
    })
    
    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})