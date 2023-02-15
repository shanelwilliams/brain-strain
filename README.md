# brain-strain
This was my final project while attending Kenzie Academy.
This is a trivia game that adds 1 point for correct answers and clears the score and restarts the game for an incorrect answer.

When I began this project I pseudo coded everything that I needed step by step. 
As I finished each step I moved the pseudo code to the top.
I had a bit of a struggle trying to get the random clues but received assistance from my teacher. 

Before I had begun my CSS I wanted it to be flashier but ended up having a bit of a time restraint.
So I researched different gradients when I found one that was similar to the one I ended up using. 
I played around with the colors and the degrees to find more of a softer look.
I researched different fonts on Google Fonts and found the two fonts that felt would be easy to read but also gave it more of the video game feel.

I wanted to add the category, questions, title, and the placeholder to HTML. I felt that it wasn't something that we used very often during class.
I added the 'Mind Blown' emoji to the title for an added effect and was similar to how I had felt after completing this project.

I really enjoyed having to use my brain and thinking outside the box.

Psuedo Code:

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