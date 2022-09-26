const name = 'madhav'
const userAge = 39

const user = {
    name,
    age: userAge,
    location: 'hyderabad'
}

// console.log(user)

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    rating: 4.2,
    salePrice: undefined
}

// const {label:productLabel, price, rating = 1.1} = product
// console.log(productLabel)
// console.log(price)
// console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)


