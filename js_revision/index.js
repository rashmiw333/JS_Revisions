// **Solve the following 2 questions in 20 mins:**

// 1. Create a function that takes three arguments: **`customerAge`**, **`isMember`**, and **`totalPurchase`**. 
// Inside the function, determine eligibility for a discount based on the following criteria:
    
//     To be eligible for the discount, the customer must meet either **one** of the following conditions:
    
//     - The **`customerAge`** must be less than 18 or greater than 60, and the **`totalPurchase`** must be greater than or equal to 100.
        
//         OR
        
//     - The customer must be a member (**`isMember`** is `true`) and their **`totalPurchase`** must be greater than or equal to 50.
    
//     Return "Eligible for Discount" if the customer meets the criteria, otherwise return "Not Eligible for Discount".
    
//     Call the function with the following test cases and display the output to the console:
    
//     - **`customerAge`** as 16, **`isMember`** as `false`, and **`totalPurchase`** as 120.
//     - **`customerAge`** as 45, **`isMember`** as `false`, and **`totalPurchase`** as 40.

function determineEligibilty(customerAge,isMember,totalPurchase){

    if(((customerAge<18 || customerAge>60) && totalPurchase >=100)|| isMember){
        return "Eligible for Discount"
    }else{
        return "Not Eligible for Discount"
    }
}

console.log("Eligibility: ",determineEligibilty(16,false,120));

console.log("Eligibiity of Member: ",determineEligibilty(45,false,40) );

// 1. Create a function that takes two arguments: **`monthlySales`** and **`isTeamLeader`**.
//  Inside the function, determine eligibility for a bonus based on the following criteria:
    
//     To be eligible for a bonus, the employee must meet **all** the following conditions:
    
//     - The **`monthlySales`** must be greater than or equal to 5000.
//     - The employee must be a team leader (**`isTeamLeader`** is `true`).
    
//     Return `true` if the employee meets the criteria, otherwise return `false`.
    
//     Call the function with the following test cases and display the output to the console:
    
//     - **`monthlySales`** as 7000 and **`isTeamLeader`** as `true`.
//     - **`monthlySales`** as 4000 and **`isTeamLeader`** as `true`.

function bonusEligibility(monthlySales,isTeamLeader){
    if(monthlySales>=5000 && isTeamLeader){
        return true;
    }
    return false;

}

console.log("Bonus Eligibility: ",bonusEligibility(7000,true));
console.log("Bonus Eligibility: ",bonusEligibility(4000,true));