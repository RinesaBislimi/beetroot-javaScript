/*
1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. Write a few functions for working with this array. 

Display the entire list, so that the not yet purchased items go before the bought ones. 
Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. 
Purchasing a product. The function accepts the name of a product and marks it as bought.
*/
const groceriesList = [
    { name: "Apples", amount: 2, bought: false },
    { name: "Bananas", amount: 1, bought: false },
    { name: "Milk", amount: 1, bought: true },
    { name: "Bread", amount: 2, bought: false },
  ];
  
  function displayGroceriesList() {
    const sortedList = groceriesList.sort((a, b) => (a.bought === b.bought ? 0 : a.bought ? 1 : -1));
    sortedList.forEach(item => {
      console.log(`${item.name} - ${item.amount} ${item.bought ? "(Bought)" : "(Not Bought)"}`);
    });
  }
  
 
  function addPurchase(name, amount) {
    const existingPurchase = groceriesList.find(item => item.name.toLowerCase() === name.toLowerCase());
  
    if (existingPurchase) {
      existingPurchase.amount += amount;
    } else {
      groceriesList.push({ name, amount, bought: false });
    }
  
    displayGroceriesList();
  }
  

  function purchaseProduct(name) {
    const purchasedItem = groceriesList.find(item => item.name.toLowerCase() === name.toLowerCase());
  
    if (purchasedItem) {
      purchasedItem.bought = true;
      displayGroceriesList();
    } else {
      console.log(`Product "${name}" not found in the list.`);
    }
  }

  displayGroceriesList();
  addPurchase("Oranges", 3); 
  addPurchase("Bread", 1); 
  addPurchase("Cheese", 2); 
  purchaseProduct("Bananas"); 
  purchaseProduct("Milk"); 
  