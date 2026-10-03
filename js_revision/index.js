// 1. You have an array of products with a `name` and `price`. 
// Write a function `filterAffordableProducts(products, maxPrice)` 
// that returns an array of products with a price less than or equal to `maxPrice`.
    
    const products = [
      { name: "Laptop", price: 1200 },
      { name: "Phone", price: 800 },
      { name: "Headphones", price: 150 },
      { name: "Monitor", price: 300 }
    ];

    const filterAffordableProducts =(products, maxPrice) =>{
        let productsWithPrice =[]
        for(let i=0;i<products.length;i++){
            if(products[i].price <= maxPrice){
                productsWithPrice.push(products[i]);
            }
        }
        return productsWithPrice;
    }
    
    // console.log(filterAffordableProducts(products, 500));  
//     // Expected Output: [ { name: "Headphones", price: 150 }, { name: "Monitor", price: 300 } ]
//     ```
    

// 1. You are given an array of products with a `category`. 
// Write a function `countCategories(products)`that counts how many products belong to each category.
    

    const products1 = [
      { name: "Smartphone", category: "Electronics" },
      { name: "T-Shirt", category: "Clothing" },
      { name: "Laptop", category: "Electronics" },
      { name: "Sofa", category: "Furniture" },
      { name: "Headphones", category: "Electronics" },
      { name: "Jacket", category: "Clothing" }
    ];

   const countCategories = (products) => {
  const count = {};

  for (let i = 0; i < products.length; i++) {
    const category = products[i].category;

    if (count[category] === undefined) {
      count[category] = 1;
    } else {
      count[category]++;
    }
  }

  return count;
};
    
    console.log(countCategories(products1));  
    // Expected Output: { Electronics: 3, Clothing: 2, Furniture: 1 }
//     ```