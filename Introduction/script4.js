//Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.
// 1 USD = 0.85 EUR
const converter = 0.85; 
let usdAmount = prompt("Enter the amount in USD:");
usdAmount = parseFloat(usdAmount); 
let euroAmount = usdAmount * converter;

alert("Value of " + usdAmount + "$ in euro is " + euroAmount+"€")



//----------------------------
//A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive. 

let memoryGB = prompt("Enter the size of memory in GB:");
memoryGB = parseFloat(memoryGB);

const sizeInMB = 820;
let numberOfFiles = Math.floor(memoryGB * 1024 / sizeInMB);
alert("You can store approximately " + numberOfFiles + " files of size 820MB on a " + flashDriveMemoryGB + "GB flash drive.");
