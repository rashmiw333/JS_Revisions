// 1. Weekly water goal
const weeklyWaterGoal = 14;

// 2. Water consumed each day
const mondayWater = 1.5;
const tuesdayWater = 2;
const wednesdayWater = 1.8;
const thursdayWater = 1.2;
const fridayWater = 2.5;
const saturdayWater = 2;
const sundayWater = 1.7;

// 3. Calculate total water consumed
const totalWaterConsumed =
  mondayWater +
  tuesdayWater +
  wednesdayWater +
  thursdayWater +
  fridayWater +
  saturdayWater +
  sundayWater;

// 4. Calculate remaining water goal
const remainingWaterGoal =
  weeklyWaterGoal - totalWaterConsumed;

// 5. Determine water consumption status
let waterStatus;

if (remainingWaterGoal < 0) {
  waterStatus =
    "You have exceeded your water consumption goal for the week!";
} else if (remainingWaterGoal < 1) {
  waterStatus =
    "You are close to reaching your water goal. Keep hydrating!";
} else if (remainingWaterGoal < 2) {
  waterStatus =
    "You are doing well, but aim to reach your water goal by the end of the week.";
} else {
  waterStatus =
    "You are on track with your water consumption goal.";
}

// 6. Generate the report
const waterReport =
  "Weekly Water Consumption Report\n" +
  "--------------------------------\n\n" +
  "Weekly Water Goal: " + weeklyWaterGoal + " litres\n" +
  "Total Water Consumed: " + totalWaterConsumed + " litres\n" +
  "Remaining Water Consumption: " + remainingWaterGoal + " litres\n\n" +
  "Water Status: " + waterStatus;

// Print the report
console.log(waterReport);