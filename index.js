// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function (drivers) {
   let newDrivers = drivers.slice(0,2).map(d => d)
   return newDrivers;
}

const returnLastTwoDrivers = function (drivers) {
    let newLastDrivers = drivers.slice(2,4).map(d => d)
    return newLastDrivers;
 }

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multValue) {
    return function(fare) {
        return multValue * fare;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = function (drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
  };