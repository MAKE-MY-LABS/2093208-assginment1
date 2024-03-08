// create sort method 

// sort method
// 1. sort method is used to sort the elements of an array in place and returns the sorted array.
// 2. The default sort order is according to string Unicode code points.
// 3. The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

// Example 1
let arr = [1, 4, 2, 3];
arr.sort();
console.log(arr); // [1, 2, 3, 4]

// Example 2
arr = [1, 4, 2, 3];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 3, 4]

// Example 3
arr = [1, 4, 2, 3];
arr.sort((a, b) => b - a);
console.log(arr); // [4, 3, 2, 1]

// Example 4
arr = [1, 4, 2, 3];
arr.sort((a, b) => Math.random() - 0.5);
console.log(arr); // [2, 3, 1, 4]

// Example 5
arr = ['c', 'a', 'b', 'd'];
arr.sort();
console.log(arr); // ['a', 'b', 'c', 'd']

// Example 6
arr = ['c', 'a', 'b', 'd'];
arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
console.log(arr); // ['a', 'b', 'c', 'd']

// Example 7
arr = ['c', 'a', 'b', 'd'];
arr.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
console.log(arr); // ['d', 'c', 'b', 'a']

// Example 8
arr = ['c', 'a', 'b', 'd'];
arr.sort((a, b) => Math.random() - 0.5);
console.log(arr); // ['b', 'a', 'c', 'd']

// create array of object with product with  reandom sequence and sort it by price
// and year with months

// Example 9
let products = [
    { name: 'Laptop', price: 1000, year: 2019, month: 1 },
    { name: 'Mobile', price: 500, year: 2020, month: 2 },
    { name: 'Tablet', price: 300, year: 2018, month: 3 },
    { name: 'Watch', price: 100, year: 2017, month: 4 }
];
products.sort((a, b) => a.price - b.price);
console.log(products);

products.sort((a, b) => a.year - b.year);
console.log(products);

products.sort((a, b) => a.month - b.month);
console.log(products);

// Example 10
products.sort((a, b) => Math.random() - 0.5);

console.log(products);
