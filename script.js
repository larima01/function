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

//-----FIRST CLASS & HIGHER ORDER FUNCTION
