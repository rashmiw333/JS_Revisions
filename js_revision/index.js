const products = [
  { name: "Smartphone", category: "Electronics", retailSales: 20000, onlineSales: 35000, wholesaleSales: 15000 },
  { name: "T-Shirt", category: "Clothing", retailSales: 8000, onlineSales: 12000, wholesaleSales: 5000 },
  { name: "Sofa", category: "Furniture", retailSales: 25000, onlineSales: 10000, wholesaleSales: 30000 },
  { name: "Laptop", category: "Electronics", retailSales: 40000, onlineSales: 50000, wholesaleSales: 20000 },
  { name: "Jeans", category: "Clothing", retailSales: 10000, onlineSales: 15000, wholesaleSales: 7000 },
  { name: "Bed", category: "Furniture", retailSales: 30000, onlineSales: 12000, wholesaleSales: 20000 },
  { name: "Headphones", category: "Electronics", retailSales: 15000, onlineSales: 18000, wholesaleSales: 9000 },
  { name: "Jacket", category: "Clothing", retailSales: 12000, onlineSales: 17000, wholesaleSales: 6000 }
];


// 1. Add totalSales to every product

products.forEach(product => {

  product.totalSales =
    product.retailSales +
    product.onlineSales +
    product.wholesaleSales;

});


// 2. Find the product with highest totalSales

const mostProfitableProduct = products.reduce(
  (highest, product) => {

    if (product.totalSales > highest.totalSales) {
      return product;
    }

    return highest;
  }
);


// 3. Calculate total sales of all products

const totalSalesOfAllProducts = products.reduce(
  (total, product) => total + product.totalSales,
  0
);


// 4. Calculate average sales

const averageSalesOfAllProducts =
  totalSalesOfAllProducts / products.length;


// 5. Calculate total retail sales

const totalRetailSales = products.reduce(
  (total, product) => total + product.retailSales,
  0
);


// 6. Calculate total online sales

const totalOnlineSales = products.reduce(
  (total, product) => total + product.onlineSales,
  0
);


// 7. Calculate total wholesale sales

const totalWholesaleSales = products.reduce(
  (total, product) => total + product.wholesaleSales,
  0
);


// 8. Calculate averages

const averageRetailSales =
  totalRetailSales / products.length;

const averageOnlineSales =
  totalOnlineSales / products.length;

const averageWholesaleSales =
  totalWholesaleSales / products.length;


// 9. Generate Sales Report

const salesReport =
  "====== Sales Report =====\n\n" +

  "Most Profitable Product\n" +
  "------\n" +

  "Name: " + mostProfitableProduct.name + "\n" +
  "Category: " + mostProfitableProduct.category + "\n" +
  "Total Sales: " + mostProfitableProduct.totalSales + "\n\n" +

  "Sales Average\n" +
  "------\n" +

  "Total Sales of All Products: " + totalSalesOfAllProducts + "\n" +
  "Average Sales of All Products: " + averageSalesOfAllProducts + "\n" +
  "Average Retail Sales: " + averageRetailSales + "\n" +
  "Average Online Sales: " + averageOnlineSales + "\n" +
  "Average Wholesale Sales: " + averageWholesaleSales;


// 10. Print report

console.log(salesReport);