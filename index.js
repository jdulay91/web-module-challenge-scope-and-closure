// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *  
 * 1. What is the difference between counter1 and counter2?
 * 1st one the count variable only exists w/in the function, therefore if the function has stopped or is not in use, count variable does not exist.therefore if we call this variable it will throw an error (since it is declared using let)
 * 2nd one count exists in a global scope. therefore each invocation of count2 variable would permanently change the value of the count variable
 * we would also have access to count variable always throughout the program
 * 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  counter2 uses a closure, since count has not been initialized within the function. it is initialized on global scope and counter2 function gets the count variable outside of its function scope. closure is basically accessing variables outside of its scope. 
 * lets say function count2(), does not have variable count inside the function but rather it is in global scope.
 * 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  counter1 would be able to store count in memory longer, this would also result in cleaner code and would lessen global variables in the program
 *  counter 2 if we would be permanently changing the count throughout the program and if we would like to access count variable on global scope
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

//counter2 code
let count = 0;

function counter2() {
  return count++;
}



/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    return Math.floor(Math.random()*3);

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(numberOfInnings){
  
     let score = {Home:0,Away:0}
     for(let i = 0; i<numberOfInnings;i++){
       score.Home += inning();
       score.Away = score.Away+inning()
      //  console.log(score);
     }   
    return score;
}
// console.log(finalScore(9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(func,number) {
  
  let team1 = 0;
  let team2 = 0;
  for(let i = 1; i<=number;i++){
    team1 += func();
    team2+=func();
   console.log(`Inning # ${i} : ${team1} - ${team2}`);
  }   
 return `Final Score: ${team1} - ${team2}`;
}
console.log(scoreboard(inning,9));


