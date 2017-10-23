// Object destructuring

const person = {
  name: 'Stephen',
  age: 45,
  location: {
    city: 'Cape Town',
    temp: 17
  }
};

const {name, age} = person; // same result as the commented out lines below

// const name = person.name;
// const age = person.age;

console.log(`${name} is ${age}.`);

const {city, temp} = person.location;

if (city && temp) {
  console.log(`It is ${temp} in ${city}`);
}


const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

// Renaming a property plus giving a default if the property is not there
const { name: publisherName = 'Self-Publish'} = book.publisher;

console.log(publisherName);

// Array destructuring

const address = ['131 Chudleigh Road', 'Plumstead', 'Cape Town', '7800', 'Western Cape'];

const [street, suburb, town, postalCode, province] = address; // The order is important

console.log(`Your street is ${street} with a postal code of ${postalCode}`);
