// Data Types:

// Task1
function reverseString(str) 
{ return str.split('').reverse().join(''); 

}

console.log(reverseString("hello"));

// Task2
function factorial(num) {
if (num === 0 || num === 1) {
return 1;
} else {
return num * factorial(num - 1);
}
}

console.log(factorial(5));

// Task3
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj);

// Task4
function toggleBoolean(bool) {
    return !bool;
}
console.log(toggleBoolean(true)); 
console.log(toggleBoolean(false));


// Functions - Conditions - Loops:

// Task1
const numbers = [12, 7, 5, 21, 18, 33, 8, 14];
console.log(numbers);

// Task2
function calculateSum(numbers) {
    let sum = 0;
    for (let number of numbers) {
      sum = sum + number;
    }
    return sum;
  }
  const numbers1 = [12, 7, 5, 21, 18, 33, 8, 14];
  const result = calculateSum(numbers1);
  console.log(result);

  // Task3
  function findMaximum(numbers) {
    return Math.max(...numbers);
  }
  const numbers2 = [12, 7, 5, 21, 18, 33, 8, 14];
  const max = findMaximum(numbers2);
  console.log(max);

  // Task4
  function findMinimum(numbers) {
    return Math.min(...numbers);
  }
  const numbers3 = [12, 7, 5, 21, 18, 33, 8, 14];
  const min = findMinimum(numbers3);
  console.log(min);

  // Task5
  function countEvenOdd(numbers) {
    let evenCount = 0;
    let oddCount = 0;
  
    for (let num of numbers) {
      if (num % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    return { even: evenCount, odd: oddCount };
  }
  const numbers4 = [12, 7, 5, 21, 18, 33, 8, 14];
  const counts = countEvenOdd(numbers4);
  console.log(counts);

  // Task6
  function generateReport(numbers) { 
    const sum = calculateSum(numbers); 
    const max = findMaximum(numbers); 
    const min = findMinimum(numbers); 
    const counts = countEvenOdd(numbers); 
   
    return  `
  Sum: ${sum} 
  Maximum: ${max} 
  Minimum: ${min} 
  Even Numbers: ${counts.even} 
  Odd Numbers: ${counts.odd} 
    ` ; 
  } 

const numbers5 = [12, 7, 5, 21, 18, 33, 8, 14]; 
const report = generateReport(numbers5); 
console.log(report);

  // Task7
  function main() {
    const numbers = [12, 7, 5, 21, 18, 33, 8, 14];
    const report = generateReport(numbers);
    console.log(report);
  }
  main();






