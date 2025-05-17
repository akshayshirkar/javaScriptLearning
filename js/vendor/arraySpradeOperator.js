const lunchMenuIteam = ['Harvest Salad', 'Southern Fried Chicken'];

//push this lunch menu iteam to the new array

// const allMenuIteam = lunchMenuIteam;
//
// allMenuIteam.push('Chicken and Potatoes');
//
// console.log(lunchMenuIteam);

// Use the sprade oparator not to mutate the orignal array

// const allMenuItemes = [...lunchMenuIteam];
// allMenuItemes.push('Chicken and Potatoes');
//
// console.log(lunchMenuIteam);
//
// console.log(allMenuItemes);const breakfastMenuIdeas = ["Buckwheat Pancakes"];
// const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

// We want to add the menu list into the all menu such way that breakfastmenu will come 1st

const allMenuIdeas= [...breakfastMenuIdeas,...dinnerMenuIdeas];

// console.log(allMenuIdeas);

// Remove the 1st index from the array

const afterRemovingFirstIndex = allMenuIdeas.slice(1);
console.log(afterRemovingFirstIndex);

// Remove Meatloaf from the allmenuArray

const findMeatloaf = allMenuIdeas.findIndex(menu => menu === 'Meatloaf');

const afterRemovingMeatloaf = [...allMenuIdeas.slice(0,findMeatloaf),...allMenuIdeas.slice(findMeatloaf+1)]

console.log(afterRemovingMeatloaf);



