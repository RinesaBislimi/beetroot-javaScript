//Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.

let number = prompt("Enter one number : ");
number=parseInt(number);
let sum=0;

for(let i =0;i <=number;i++){
     sum+=i;
  
}
let rez=alert("The sum of numbers from 1 to "+number +"is: "+ sum);