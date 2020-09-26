var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



//var routes = require("./controllers/quizController.js");

//app.use(routes);

var questions = [
    {
      id:1,
      title: "Commonly used data types DO NOT include:",
      choice1: "strings",
      choice2: "booleans",
      choice3: "alerts",
      choice4: "numbers",
      answer: "alerts"
    },
    {
      id:2,
      title: "The condition in an if / else statement is enclosed within ____.",
      choice1: "quotes", 
      choice2: "curly brackets",
      choice3: "parentheses",
      choice4: "square brackets",
      answer: "parentheses"
    },
    {
      id:3,
      title: "What is the HTML tag under which one can write the JavaScript code?",
      choice1: "javascript",
      choice2: "scripted",
      choice3: "script",
      choice4: "js",
      answer: "script"
    },
    {
      id:4,
      title: "Which of the following is the correct syntax to display an alert box using JavaScript?",
      choice1: "alertbox(“message”);",
      choice2: "msg(“message”);",
      choice3: "msgbox(“message”);",
      choice4: "alert(“message”);",
      answer: "alert(“message”);"
    },
    {
      id:5,
      title: "What is the correct syntax for referring to an external script?",
      choice1: "script src=filename",
      choice2: "script href=filename",
      choice3: "script ref=filename",
      choice4: "script name=filename",
      answer: "script src=filename"
    }
  ];


//app.get("/questions/:id", function(req, res) {
  //  for (var i = 0; i < questions.length; i++) {
    //    if (questions[i].id === req.params.id) {
      //      return res.render("index", questions[i])
      //  }
  //  }
   // res.render('index', questions[0])
    //})

    
app.get("/questionall", function(req, res) { 
    var data = {
        questions: []
    };

    for (var i = 0; i < questions.length; i += 1) {
        var currentQuestion = questions[i];

        data.questions.push(currentQuestion)
    }
    res.render('index', data)
})


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });