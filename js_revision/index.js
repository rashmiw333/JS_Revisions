// ## Question

// 1. Define a variable named `totalAllottedTime` and assign it a value of `100` hours. 
// This represents the total time allotted for a project.

let totalAllottedTime = 100;

// 2. Define variables for the time spent on different tasks each week:
//     - `task1Week1` with a value of `8`
//     - `task1Week2` with a value of `10`
//     - `task1Week3` with a value of `12`
//     - `task1Week4` with a value of `14`
//     - `task2Week1` with a value of `10`
//     - `task2Week2` with a value of `12`
//     - `task2Week3` with a value of `9`
//     - `task2Week4` with a value of `14`

let task1Week1 = 8;
let task1Week2 = 10;
let task1Week3 = 12;
let task1Week4 = 14;
let task2Week1 = 10;
let task2Week2 = 12;
let task2Week3 = 9;
let task2Week4 = 14;


// 3. Calculate the total time spent on Task 1 for the month by adding up the time for each week and assign it to a variable named `totalTimeTask1`.

let totalTimeTask1 = task1Week1+ task1Week2 + task1Week3 + task1Week4;


// 4. Calculate the total time spent on Task 2 for the month by adding up the time for each week and assign it to a variable named `totalTimeTask2`.
let totalTimeTask2 = task2Week1 + task2Week2 + task2Week3 + task2Week4;

// 5. Calculate the total time spent on the project by adding `totalTimeTask1` and `totalTimeTask2` and assign it to a variable named `totalTimeSpent`.
let totalTimeSpent = totalTimeTask1 + totalTimeTask2;

// 6. Calculate the remaining time by subtracting `totalTimeSpent` from the `totalAllottedTime` and assign it to a variable named `remainingTime`.
let remainingTime = totalAllottedTime - totalTimeSpent;

// 7. Determine the status of the project based on the `remainingTime` using an if-else statement:
//     - If `remainingTime` is less than **`0`,** assign the message "You have exceeded the planned time for this project.”
//     - If `remainingTime` is less than `10`, assign the message "You are about to reach the planned time for this project. 
// Consider reviewing your time management.”  to a variable named `projectStatus`.
//     - If `remainingTime` is less than `30`, assign the message "You are doing okay, but you may need to manage your time more efficiently.” to `projectStatus`.
//     - For any other case, assign the message "You are on track with your project schedule.” to `projectStatus`.
let projectStatus;

if(remainingTime<0){
    projectStatus ="You have exceeded the planned time for this project";
}else if(remainingTime<10){
    projectStatus ="You are about to reach the planned time for this project. Consider reviewing your time management."
}else if(remainingTime<30){
    projectStatus = "You are doing okay, but you may need to manage your time more efficiently."
}else{
    projectStatus ="You are on track with your project schedule."
}

// 8. Generate the project time report by concatenating all the necessary information into a formatted string:
//     - Start with the header "Project Time Report".
//     - Add a line of dashes for separation.
//     - Include the total allotted time, total time spent, total time spent on Task 1, total time spent on Task 2 and remaining time.
//     - Add a blank line for spacing.
//     - Include the project status.
// 9. Print the project time report.

let projectTimeReport = "Project Time Report\n"+
"-----------------------\n"+ 
"Total Allotted Time: "+totalAllottedTime + " hours\n" +
"Total Time Spent: "+ totalTimeSpent + " hours\n" +
"Total Time Spent on Task 1: " + totalTimeTask1 + " hours\n" +
"Total Time Spent on Task 2: " + totalTimeTask2 + " hours\n" +
"Remaining Time: " + remainingTime+ " hours\n\n" +

"Project Status: " + projectStatus;

console.log(projectTimeReport);


// Your output should look like this with the actual data in the console: