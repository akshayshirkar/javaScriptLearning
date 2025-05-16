// const menuItems = [
//   { item: "Blue Cheese Salad", price: 8 },
//   { item: "Spicy Chicken Rigatoni", price: 18 },
//   { item: "Ponzu Glazed Salmon", price: 23 },
//   { item: "Philly Cheese Steak", price: 13 },
//   { item: "Baked Italian Chicken Sub", price: 12 },
//   { item: "Pan Seared Ribeye", price: 31 }
// ];
//
//  const totalPrice = menuItems.reduce((price,menuitem)=>{
//   return price + menuitem.price;
// },0)
//
// console.log(totalPrice);


const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },
];

// const allCarweight = cars.reduce((acc,cars)=>{
//   if(cars.isElectric){
//     return acc + cars.weight;
//   }
// },0);

// const allCarweight = cars.reduce((acc,cars)=>{
//     return acc + cars.weight;
// },0);
//
// console.log(allCarweight);

const evCarweight = cars.reduce((acc, cars) => {
  if (cars.isElectric) {
    return acc + cars.weight;
  }
  return acc;  // Add this line to return the accumulator when car is not electric
}, 0);

console.log(evCarweight);

