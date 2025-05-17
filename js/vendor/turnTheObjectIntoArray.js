const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
  phone: 95
};

// get the sum of all the expenses

const totalExpense = Object.values(monthlyExpenses).reduce((sum,expense) =>{
  sum += expense;
  return sum;
},0);

console.log(totalExpense);
