console.log('Hello World!');

// Now let us do some practice of the nested loop

const fruitArray = [
  'apple',
  'orange',
  'pineapple',
  'watermelon'
]

const vegArray = [
  'carrot',
  'radish',
  'cabage',
  'tomato',
  'potato'
]



for (let fruit = 0; fruit < 10; fruit++) {
  console.log('The Fruits--------------');
  for (let innerFruit = 0; innerFruit < 10; innerFruit++) {
    console.log(`${innerFruit} ${fruitArray} `);
  }
}

