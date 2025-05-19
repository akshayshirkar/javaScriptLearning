class product{
  constructor(name,price,hasDiscount){
    this.name = name;
    this._price=price; // _ indicates that this is private property and dosnt be accessable outside the class.
    this.hasDiscount = hasDiscount;
  }

  // While setting the properties we checked that the passed argument is always a number
  // if it is a number than and then only set the values
  set price(newPrice){
    if(typeof newPrice !== 'number'){
      console.log('Price must be a number');
    }else{
      this._price = newPrice;
    }

  }

  get price(){
    return this._price;
  }
}

const product1 = new product('Test',100,true);

console.log(product1.price);
