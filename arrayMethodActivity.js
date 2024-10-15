// 1. Use concat() to join two arrays
let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr); // Outputs: ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

// 2. Use push() to add an element "Kiwi" to the fruits array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); // Outputs: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

// 3. Use unshift() to add numbers 4 and 5 to the beginning of array1
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1); // Outputs: [4, 5, 1, 2, 3]

// 4. Use pop() to remove the last element from the fruits array
fruits.pop();
console.log(fruits); // Outputs: ["Banana", "Orange", "Apple", "Mango"]

// 5. Use shift() to remove the first element from array2
let array2 = [1, 2, 3];
array2.shift();
console.log(array2); // Outputs: [2, 3]

// 6. Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log(fruits); // Outputs: ["Apple", "Banana", "Mango", "Orange"]

// 7. Use slice() to create a new array containing a portion of the fruits array
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Outputs: ["Banana", "Mango"]

// 8. Use splice() to insert and remove elements in the months array
let months = ["January", "March", "April", "June"];
months.splice(1, 0, "February"); // Inserts February at index 1
console.log(months); // Outputs: ["January", "February", "March", "April", "June"]
months.splice(4, 1, "May"); // Replaces "June" with "May"
console.log(months); // Outputs: ["January", "February", "March", "April", "May"]
