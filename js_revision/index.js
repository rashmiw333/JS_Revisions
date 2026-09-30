// ## Question

// 1. Define a variable named `totalExerciseGoal` and assign it a value of 150 minutes. 
// This represents the **total exercise time goal** for the week.

let totalExerciseGoal = 150;

// 2. Define variables for the time spent exercising each day:
//     - `mondayExercise` with a value of 30
//     - `tuesdayExercise` with a value of 25
//     - `wednesdayExercise` with a value of 20
//     - `thursdayExercise` with a value of 15
//     - `fridayExercise` with a value of 35
//     - `saturdayExercise` with a value of 40
//     - `sundayExercise` with a value of 25

let mondayExercise = 30;
let tuesdayExercise = 25;
let wednesdayExercise = 20;
let thursdayExercise = 15;
let fridayExercise = 35;
let saturdayExercise = 40;
let sundayExercise = 25;

// 3. Calculate the **total exercise time** for the week by adding the exercise time for each day 
// and assigning it to a variable named `totalExerciseTime`.

let totalExerciseTime = mondayExercise + tuesdayExercise + wednesdayExercise + thursdayExercise + fridayExercise
                         + saturdayExercise + sundayExercise;


    //console.log(totalExerciseTime,"totalExerciseGoalTme");                    
// 4. Calculate the **remaining exercise time** by subtracting `totalExerciseTime` from `totalExerciseGoal` 
// and assign it to a variable named `remainingExerciseTime`.

let remainingExerciseTime = totalExerciseGoal - totalExerciseTime;
//console.log("remainingExerCiseTime: ",remainingExerciseTime);

// 5. Determine the **exercise status** based on the `remainingExerciseTime` using an if-else statement:
//     - If `remainingExerciseTime` is less than 0, 
//       assign the message "You have exceeded your exercise goal for the week." to a variable named `exerciseStatus`.
//     - If `remainingExerciseTime` is less than 20, assign the message "You are close to reaching your exercise goal.
//       Keep it up!" to `exerciseStatus`.
//     - If `remainingExerciseTime` is less than 50, assign the message "You are doing well,
//       but aim to reach your goal by the end of the week." to `exerciseStatus`.
//     - For any other case, assign the message "You are on track with your exercise goal." to `exerciseStatus`.
        let exerciseStatus = "";
        if(remainingExerciseTime <0){
            exerciseStatus = "You have exceeded your exercise goal for the week.";
        }
        else if(remainingExerciseTime < 20){
            exerciseStatus = "You are close to reaching your exercise goal.Keep it up!";
        }
        else if (remainingExerciseTime <50){
            exerciseStatus = "You are doing well,but aim to reach your goal by the end of the week.";
        }else{
            exerciseStatus ="You are on track with your exercise goal.";
        }
        //console.log(exerciseStatus);

// 6.  Generate the exercise report by concatenating all the necessary information into a formatted string:
//     - Start with the header "Weekly Exercise Report".
//     - Add a line of dashes for separation.
//     - Add a blank line for spacing.
//     - Include the total exercise goal *(from task 1)*, total exercise time *(from task 3)*, and remaining exercise time *(from task 4).*
//     - Add a blank line for spacing.
//     - Include the exercise status *(from task 5).*
//     - Print the exercise report.

const excerciseReport = 
"Weekly Exercise Report \n"+
"----------------------\n\n" +
"Total Exercise Goal: "+ totalExerciseGoal + " minutes\n" +
"Total Exercise Time: "+ totalExerciseTime + " minutes\n" +
"Remaining Exercise Time: " + remainingExerciseTime + " minutes\n\n"+

"Exercise Status: " + exerciseStatus;

console.log(excerciseReport);