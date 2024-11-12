// Employee Shift Check

// var startTime = parseInt(prompt("Enter the start time:"));
//         var endTime = parseInt(prompt("Enter the end time:"));
//         if(startTime >= 22 && endTime <= 6){
//             console.log("Night shift");
//         }
//         else {
//             console.log("Day shift");
//         }

// 2.Temperature Advisory

//  let temp = parseFloat(prompt("Enter the temperature:"));
//         if(temp < 10){
//             console.log("Cold");
//         }
//         else if(temp >= 10 && temp <= 25){
//             console.log("Moderate");
//         }
//         else if(temp > 25){
//             console.log("Hot");
//         }
//         else{
//             console.log("Invalid input");
//         }

// 3.Discount Calculator

// let bill = parseInt(prompt("Enter the bill amount:"));
//         if(bill > 0 && bill <= 100){
//             console.log(`Bill amount = ${bill}`);
//         }
//         else if(bill > 100 && bill <= 200){
//             discount = 0.1*bill;
//             console.log(`Discount on bill amount = ${discount}`);
//         }
//         else if(bill > 200){
//             console.log(`Discount on bill amount = ${0.2*bill}`);
//         }
//         else{
//             console.log("Enter correct input");
//         }

// 4. Elevator Capacity Check

// let items = [];
//        let noOfItems = parseInt(prompt("Enter the number of items:"));
//        for(i=1;i<=noOfItems;i++){
//         weight = parseInt(prompt("Enter the weight of an item:"));
//         items.push(weight);
//        }
//        sum = 0;
//        for(i=0;i<items.length;i++){
//         sum = sum + items[i];

//        }
//        if(sum > 500){
//         console.log("Elevator overloaded");
//        }
//        else{
//         console.log("No overload");
//        }

// 5. E-commerce Order Validity

//  let noOfOrders = parseInt(prompt("Enter the number of items ordered"));
//         if(noOfOrders < 5){
//             console.log("Invalid order");
//         }
//         else if(noOfOrders >= 5 && noOfOrders <= 10){
//             console.log("Standard order");
//         }
//         else if(noOfOrders > 10){
//             console.log("Bulk order");
//         }
//         else{
//             console.log("Invalid input");
//         }

// Leetcode1
// Roman to Integer
// function value(r) {
//             if (r === 'I') return 1;
//             if (r === 'V') return 5;
//             if (r === 'X') return 10;
//             if (r === 'L') return 50;
//             if (r === 'C') return 100;
//             if (r === 'D') return 500;
//             if (r === 'M') return 1000;
//             return -1;
//         }
//         let str = "XIX";

//         var num = value(str.charAt(0));
//         var pre, curr;
//         for (var i = 1; i < str.length; i++) {
//             curr = value(str.charAt(i)); 
//             pre = value(str.charAt(i - 1));
//             if (curr <= pre) {
//                 num = num + curr;

//             }
//             else {
//                 num = num - pre * 2 + curr;
//             }
//         }
//         console.log(num)

// Leetcode 2
// Palindrome Number

// let num = parseInt(prompt("Enter an integer:"));
//         rev = 0;
//         temp = num;
//         while (temp > 0) {
//             ld = temp % 10;
//             rev = rev * 10 + ld;
//             temp = parseInt(temp / 10);
//         }
//         if (num == rev) {
//             console.log("Palindrome");
//         }
//         else {
//             console.log("Not a palindrome number");
//         }


// 6.Account Balance Status

//  let balance = parseInt(prompt("Enter the bank balance:"));
//         if(balance < 100){
//             console.log("Low Balance");
//         }
//         else if(balance >= 100 && balance <= 500){
//             console.log("Healthy");
//         }
//         else if(balance > 500){
//             console.log("High Balance");
//         }
//         else{
//             console.log("Enter correct input")
//         }

// 7.Flight Price Calculator

// var ticketCost = parseInt(prompt("Enter the ticket cost:"));
//         var bookingClass = prompt("Enter the booking class:");
//         if(bookingClass == "advance"){
//             discount = 0.05*ticketCost;
//             console.log(`Ticket cost if booked over 30 days advance = ${ticketCost-discount}`);
//         }
//         else if(bookingClass == "business"){
//             discount = 0.1*ticketCost;
//             console.log(`Ticket cost when booked for business class = ${ticketCost-discount}`);
//         }
//         else if(bookingClass == "premium"){
//             discount = 0.15*ticketCost;
//             console.log(`ticket cost for premium booking = ${ticketCost-discount}`);
//         }
//         else{
//             console.log("Enter valid input")
//         }

// 8.Voting Eligibility

// var age = parseInt(prompt("Enter your age:"));
//         if(age >= 18){
//             console.log("Eligible for voting");
//         }
//         else{
//             console.log("Not eligible to vote")
//         }

// 9.Shopping Bill Calculation

//  let items = [];
//        let noOfItems = parseInt(prompt("Enter the number of items:"));
//        for(i=1;i<=noOfItems;i++){
//         price = parseInt(prompt("Enter the price of an item:"));
//         items.push(price);
//        }
//        sum = 0;
//        for(i=0;i<items.length;i++){
//         sum = sum + items[i];

//        }
//       console.log(`The total bill of shopping is ${sum}`);

// 10.Traffic Light Simulation

//  let color = prompt("Enter the color");
//         switch(color){
//             case "Red": 
//             console.log("Stop!");
//             break;
//             case "Yellow": 
//             console.log("Slow Down!");
//             break;
//             case "green": 
//             console.log("Go!");
//             break;
//             default: 
//             console.log("Enter valid input")
//         }

// Leetcode
// Reverse Integer

//  let num = parseInt(prompt("Enter an integer:"));
//         rev = 0;
//         while(num > 0){
//             ld = num % 10;
//             rev = rev*10+ld;
//             num = parseInt(num / 10);
//         }
//         console.log(`Reversed number is ${rev}`);

// 11.Electricity Bill Calculation

// let units = parseInt(prompt("Enter the number of units used in kwh:"));
//         if(units > 0 && units <= 100){
//             electricityBill = 0.10 * units;
//             console.log(`Electricity  bill = ${electricityBill}`);
//         }
//         else if(units > 100 && units <= 200){
//             electricityBill = (0.10 * 100)+(units - 100)*0.15;
//             console.log(`Electricity  bill = ${electricityBill}`);
//         }
//         else if(units > 200){
//             electricityBill = (0.10 * 100)+(0.15 * 100)+(units - 200)*0.20;
//             console.log(`Electricity  bill = ${electricityBill}`);
//         }
//         else{
//             console.log("Invalid input");
//         }

// 12.Calculate Weekly Wages

//  let workingHours = parseInt(prompt("Enter the number of hours worked:"));
//         let wages = parseInt(prompt("Enter the wages:"));
//         if(workingHours <= 40){
//             wages = wages * workingHours;
//             console.log(`employee's weekly wage based on their hours is ${wages}`);
//         }
//         else if(workingHours > 40){
//             wages = (wages * 40)+(workingHours-40)*wages*1.5;
//             console.log(`employee's weekly wage based on their hours is ${wages}`);

//         }
//         else{
//             console.log("Invalid input");
//         }



// 13.Student Grades Calculation

// let sub1 = parseInt(prompt("Enter the marks in subject1:"));
//         let sub2 = parseInt(prompt("Enter the marks in subject2:"));
//         let sub3 = parseInt(prompt("Enter the marks in subject3:"));
//         let sum = sub1+sub2+sub3;
//         console.log(`Sum of marks of three subjects is ${sum}`);
//         let avg = sum/3;
//         if(avg>90){
//             console.log("Grade A");
//         }
//         else if(avg>80 && avg<=90){
//             console.log("Grade B");
//         }
//         else if(avg<80){
//             console.log("Grade C");
//         }
//         else{
//             console.log("Invalid");
//         }

// 14.Warehouse Stock Update

// let stock = parseInt(prompt("Enter the available stock in units"));
//         if(stock == 0){
//             console.log("Out of stock");
//         }
//         else if(stock <10 && stock>0){
//             console.log("Low stock");
//         }
//         else if(stock>=10){
//             console.log("In stock");
//         }
//         else{
//             console.log("Enter the valid input");
//         }

// 15.Game Score Tracker

// let score = parseInt(prompt("Enter the number of points earned:"));
//         if(score>=100 && score<500){
//             console.log("Reaches milestone - 100");
//         }
//         else if(score >=500 && score<1000){
//             console.log("reaches milestone - 500");
//         }
//         else if(score>=1000){
//             console.log("reached milestone - 1000");
//         }
//         else{
//             console.log("Enter the valid input")
//         }

// 16.Calculate Train Fare

//  function trainFare(classOfTravel,distance) {
//             if(classOfTravel == "Economy") {
//                 console.log(`The total train fare = ${distance*60}`);
//             }
//             else if(classOfTravel == "Business"){
//                 console.log("Business")
//                 console.log(`The total cost of travel = ${distance*70}`);
//             }
//             else{
//                 console.log("Invalid input");
//             }
//         }
//         let distance = parseInt(prompt("Enter the distance in kms:"));
//         let classOfTravel = prompt("Enter the class of travel:");
//         trainFare(classOfTravel,distance);

// 17.Loan Eligibility Check

// function loan(income,creditScore){
//             if(income > 10000 && creditScore > 1000){
//                 console.log("Eligible for loan")
//             }
//             else{
//                 console.log("Not eligible for loan")
//             }
//         }
//     let income = parseInt(prompt("Enter your monthly income:"));
//     let creditScore = parseInt(prompt("Enter your credit score:"));
//     loan(income,creditScore)

// 18.Movie Ticket Price Calculation

//  function ticketPrice(category){
//             if(category == "students"){
//                 console.log(`Movie ticket price with discount is ${price-price*0.1}`);
//             }else if(category == "seniors"){
//                 console.log(`Movie ticket price with discount is ${price-price*0.2}`);
//             }
//             else{
//                 console.log("Invalid input");
//             }
//         }
//         let price = 200;
//         let category = prompt("Enter the category of the tickets:");
//         ticketPrice(category);

// 19.Game Level Up

// function gameLevelUp(points){
//             if(points >= 1000){
//                 console.log("Have enough points to level up!");
//             }
//             else{
//                 console.log("Not have enough points");
//             }
//         }
//         let points = parseInt(prompt("Enter the number of points earned:"));
//         gameLevelUp(points);

// 20.Fuel Cost Estimation

// function fuelCostEstimation(distance,fuelEfficiency,fuelCost){
//             console.log(`total fuel cost at a rate per liter = ${(distance/fuelEfficiency)*fuelCost}`);
//         }
//         let distance = parseInt(prompt("Enter the distance to be traveled:"));
//         let fuelEfficiency = parseInt(prompt("Enter the vehicle fuel efficiency:"));
//         let fuelCost = parseInt(prompt("Enter the fuel cost per liter"));
//         fuelCostEstimation(distance,fuelEfficiency,fuelCost);

// 21.Classroom Seating Arrangement

// function rowsNeeded(noOfStudents,seats){
//             if(noOfStudents%seats==0){
//                 rows = noOfStudents/seats;
//                 console.log(`Number of rows needed = ${rows}`);
//             }
//             else{
//                 rows = parseInt(noOfStudents/seats)+1;
//                 console.log(`Number of rows needed = ${rows}`);
//             }
//         }
//         let noOfStudents = parseInt(prompt("Enter the number of students:"));
//         let seats = parseInt(prompt("Enter the number of seats per row:"));
//         rowsNeeded(noOfStudents,seats);


// 22.Tax Calculation

// function taxCalc(income){
//             if(income < 50000){
//                 console.log(`Tax based on income = ${income*0.1}`);
//             }
//             else if(income >= 50000 && income <= 100000){
//                 console.log(`Tax based on income = ${income*0.2}`);
//             }
//             else if(income > 100000){
//                 console.log(`Tax based on income = ${income*0.3}`);
//             }
//             else{
//                 console.log("Invalid input");
//             }
//         }

//         let income = parseInt(prompt("Enter your income:"));
//         taxCalc(income);


// 23.Employee Bonus Calculation

// function bonus(years,income){
//             if(years >= 5 && years <=10){
//                 console.log(`Bonus = ${0.05*income}`);
//             }
//             else if(years >10 && years <=20){
//                 console.log(`Bonus = ${0.1*income}`);
//             }
//             else if(years > 20){
//                 console.log(`Bonus = ${0.15*income}`);
//             }
//             else{
//                 console.log("Invalid input");
//             }
//         }
//         let years = parseInt(prompt("Enter the years of service:"));
//         let income = parseInt(prompt("Enter your income:"));
//         bonus(years,income);

// // 24.Fuel Efficiency Check

//   function fuelEfficiency(distance,fuelused){
//             fuelefficiency = distance/fuelused;
//             console.log(`Fuel efficiency = ${fuelefficiency}`);
//         }
//         let distance = parseFloat(prompt("Enter the distance travelled:"));
//         let fuelused = parseFloat(prompt("Enter the number of litres used:"));
//         fuelEfficiency(distance,fuelused);

// 25.Internet Usage Alert

// function dataAlert(dataused) {
//             if (dataused >= 80) {
//                 console.log("Reached 80% of your monthly data limit");
//             }
//             else if (dataused > 100) {
//                 console.log("reached 100% of your data limit");

//             }
//             else {
//                 console.log("invalid input");
//             }
//         }
//         let dataused = parseFloat(prompt("Enter the percentage of monthly data used:"));
//         dataAlert(dataused);
