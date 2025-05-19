class product{
  constructor(name,price,hasdiscount) {
    this.name = name;
    this.price = price;
    this.hasdiscount = hasdiscount;
  }
}

class productdiscuount extends product{
  constructor(name,price,hasdiscount, discountPercentage){
    super(name,price,hasdiscount);
    this.discountPercentage = discountPercentage;
  }
}


const product1 = new productdiscuount('Test',100,true,10);

console.log(product1);
