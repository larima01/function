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
*/

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
