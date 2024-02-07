function getPrice(obj, conditional) {
  if(conditional == true){
    console.log(`Prices with 20% tax:`)
  } else {
    console.log(`Prices without tax:`)
  }

  obj.forEach(dish => {
    let price
    if (conditional == true) {
      price = dish.price + dish.price * 0.2
    } else {
      price = dish.price
    }
    console.log(`Dish: ${dish.name} Price (incl.tax): $ ${price}`)
  })
}

let dishes = [
  { name: 'Italian pasta', price: 9.55 },
  { name: 'Rice wish Veggies', price: 8.65 },
  { name: 'Chicken with potatoes', price: 15.55 },
  { name: 'Vegetarian Pizza', price: 6.45 }
]

getPrice(dishes, false)
