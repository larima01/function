'use strict';
/*
 const bookings = [];

 const createBooking = function (
   flightNum,
   numPassengers = 1,
   price = 199 * numPassengers
 ) {
   //ES5
   // numPassengers = numPassengers || 1
   // price = price || 199

   const booking = {
     flightNum,
     numPassengers,
     price,
  };
  console.log(booking);
   bookings.push(booking);
 };

 createBooking('LH123');
 createBooking('LH123', 2, 800);
 createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

 const flight = 'LH234';

 const lukmon = {
   name: 'Aminu Lukmon',
   passport: 24739479284,
 };

 const checkIn = function (flightNum, passenger) {
   flightNum = 'LH999';
   passenger.name = 'Mr. ' + passenger.name;

   if (passenger.passport === 24739479284) {
     alert('Check in');
   } else {
     alert('Wrong passport!');
   }
 };
 checkIn(flight, lukmon);
 console.log(flight);
 console.log(lukmon);

Is the same as doing...
 const flightNum = flight;
 const passenger = lukmon;

 const newPassport = function (person) {
   person.passport = Math.trunc(Math.random() * 1000000000);
 };

 newPassport(lukmon);
 checkIn(flight, lukmon);

//-----FUNCTION ACCEPTINFG CALLBACK FUNCTIONS--------

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Jvascript is the best!', upperFirstWord);

transformer('Jvascript is the best!', oneWord);

//JS uses callback all the timegit
const high5 = function () {
  console.log('👏');
};
document.body.addEventListener('click', high5);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Stephen');

greet('Hello')('Jonas');

// Challenge
const greets = greeting => name => console.log(`${greeting} ${name}`);

const greeter = greet('Hey');
greeter('Jamiu');
greeter('Samuel');

greet('Hi')('Jonatharn');
*/
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Aminu Lukmon');
lufthansa.book(635, 'Jamiu Alimi');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// Does NOT work
// book(123, 'Sarah Williams');

//Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//Apply method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // Is the same as apply method
console.log(swiss);

// Bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
bookEW(23, 'Stevens William');
