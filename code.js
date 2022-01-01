// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE! 
/*
    1. Use fetch to pull questions from the API.
    -fetch API
    -either use GET /api/random-clue?valid=true or Math.random()*/
    
    /* 2. Present a single question to the user.
    -render fuction to show a new question for the user
    -maybe have it as a list for 1 question at a time
    -have a button that starts the trivia questions*/

    /*3. Allow the user to respond to the question.
    -have a box to put answer and a box to submit answer
    -set it so answers with Capital letters or lowercase letters*/
   
    /* 4. Determine if the user's answer was correct.
    -need if and else statement

        1. A correct answer awards 1 point and contiues the game.
    -increase the count by 1 for every correct answer
    -messagestating correct that appears for a few seconds
    -display new question after answer disapears

        2. An incorrect answer resets the game and resets the score back to 0.
    -figure out how to reset the game for a wrong answer
    -message for answer incorrect that appears for a few seconds*/
   
    /*5. Keep track of and display a user's score.
    -have a display counter increased by 1 for every correct answer and reset in the case the answer is incorrect
    */

    let userInput = document.querySelector('input')
    let scoreBox = document.querySelector('#score')
    let score = 0
    let clueList = []
    let currentClue
    let index
    let form = document.getElementById('trivia-guess-form')
    let answer = document.getElementById('answer')
    
    function fetchAPI(){
        fetch('https://jservice.kenzie.academy/api/random-clue?valid=true')
        .then(response => response.json())
        .then(data => data.categoryId)
        .then(categoryId => {

            fetch(`https://jservice.kenzie.academy/api/clues?category=${categoryId}`)
            .then(response => response.json())
            .then(data => {
                clueList = data.clues
                index = Math.floor((Math.random() * clueList.length - 1) + 1) 
                currentClue = clueList.splice(index, 1)[0]
                renderQuestion(currentClue)
                return currentClue
            })
        })
    }
    fetchAPI()
    
    function renderQuestion(trivia) {
        console.log("Correct Answer:", trivia.answer)
        document.getElementById('question').innerHTML = trivia.question
        document.getElementById('category').innerHTML = trivia.category.title
        scoreBox.innerHTML = `${score}`
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const userAnswer = userInput.value.toLowerCase()
        const correctAnswer = currentClue.answer.toLowerCase()
        addScore(userAnswer, correctAnswer)
    })

    function addScore(userResponse, correctAnswer){
        console.log({ userResponse, correctAnswer })
        if(userResponse === correctAnswer){
            score += 1
            scoreBox.innerHTML = `${score}`
            answer.innerHTML = 'Correct!!'
            index = Math.floor((Math.random() * clueList.length - 1) + 1) 
            currentClue = clueList.splice(index, 1)[0]
            renderQuestion(currentClue)
        } else {
            score = 0
            answer.innerHTML = 'Wrong Answer! Game has restarted.'
            fetchAPI()
        }

        form.reset()
    }
    

        

    