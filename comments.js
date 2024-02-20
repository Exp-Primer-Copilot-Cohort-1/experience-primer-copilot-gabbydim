// Create web server 
// 1. Import the express module
// 2. Create an instance of the express module
// 3. Define a route for the home page
// 4. Start the server
// 5. Use the request object to get the URL and the response object to send a response

// 1. Import the express module
var express = require('express');

// 2. Create an instance of the express module
var app = express();

// 3. Define a route for the home page
app.get('/', function(request, response){
	response.send('This is the home page');
});

app.get('/comments', function(request, response){
	response.send('This is the comments page');
});

// 4. Start the server
app.listen(3000, function(){
	console.log('Server is running on port 3000');
});

// 5. Use the request object to get the URL and the response object to send a response

// localhost:3000/comments
// localhost:3000/comments?name=John
// localhost:3000/comments?name=John&age=30
// localhost:3000/comments?name=John&age=30&city=NewYork
// localhost:3000/comments?name=John&age=30&city=NewYork&country=USA
// localhost:3000/comments?name=John&age=30&city=NewYork&country=USA&hobbies=reading
// localhost:3000/comments?name=John&age=30&city=NewYork&country=USA&hobbies=reading&hobbies=sports
// localhost:3000/comments?name=John&age=30&city=NewYork&country=USA&hobbies=reading&hobbies=sports&hobbies=cooking

// http://localhost:3000/comments?name=John&age=30&city=NewYork&country=USA&hobbies=reading&hobbies=sports&hobbies=cooking
// http://localhost:3000/comments?name=John&age=30&city=NewYork&country=USA&hobbies=reading&hobbies=sports