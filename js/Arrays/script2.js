/*
2. Create an array that describes a shop receipt. Each element of the array consists of the name of the product, an amount bought, and price per item. Write the following functions. 

Print the receipt out on the screen.
Counting the sum of the purchase.
Extracting the most expensive item on the receipt.
Counting an average item price on the receipt.
*/

const shopReceipt = [
    { name: "Apples", amount: 2, pricePerItem: 1.5 },
    { name: "Bananas", amount: 1, pricePerItem: 0.8 },
    { name: "Milk", amount: 1, pricePerItem: 2.0 },
    { name: "Bread", amount: 2, pricePerItem: 1.2 },
  ];
  
  
  function printReceipt() {
    console.log("Receipt:");
    shopReceipt.forEach(item => {
      const totalItemPrice = item.amount * item.pricePerItem;
      console.log(`${item.amount} x ${item.name} - $${totalItemPrice.toFixed(2)}`);
    });
  }
  
 
  function calculateTotal() {
    let total = 0;
    shopReceipt.forEach(item => {
      total += item.amount * item.pricePerItem;
    });
    return total.toFixed(2);
  }
  
 
  function findMostExpensiveItem() {
    let mostExpensiveItem = null;
    let highestPrice = 0;
  
    shopReceipt.forEach(item => {
      const totalItemPrice = item.amount * item.pricePerItem;
      if (totalItemPrice > highestPrice) {
        highestPrice = totalItemPrice;
        mostExpensiveItem = item;
      }
    });
  
    return mostExpensiveItem;
  }
  
  function calculateAveragePrice() {
    const totalItems = shopReceipt.length;
    let totalPrices = 0;
  
    shopReceipt.forEach(item => {
      totalPrices += item.pricePerItem;
    });
  
    return (totalPrices / totalItems).toFixed(2);
  }
  
  printReceipt(); 
  
  const totalAmount = calculateTotal(); 
  console.log(`Total: $${totalAmount}`);
  const mostExpensiveItem = findMostExpensiveItem(); 
  console.log(`Most Expensive Item: ${mostExpensiveItem.name} - $${(mostExpensiveItem.amount * mostExpensiveItem.pricePerItem).toFixed(2)}`);
  const averageItemPrice = calculateAveragePrice(); 
  console.log(`Average Item Price: $${averageItemPrice}`);
  