const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon"
];

// Destructure the array

// const[first,second,thired] = finalMenuItems;
// [second, first] = [first, second];
//
// console.log(first);
// console.log(second);
//
// // We can swap the values as well
//
//
// console.log('After swapping the values');
// console.log(first);

// destructure the firstValue with the restValues

const [firstValue, ...restValues] = finalMenuItems;

console.log(firstValue);
console.log(restValues);


