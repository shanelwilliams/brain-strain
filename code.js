// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE! 

    const userInput = document.querySelector('input')
    const scoreBox = document.querySelector('#score')
    const form = document.getElementById('trivia-guess-form')
    const answer = document.getElementById('answer')
    let score = 0
    let clueList = []
    let currentClue
    let index
    
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
    

        

    