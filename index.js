// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      fare = fare * multiplier;
      return fare;
    }
  }
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function(drivers, fn) {
    if (fn === returnFirstTwoDrivers) {
      return returnFirstTwoDrivers(drivers);
    } else if (fn === returnLastTwoDrivers) {
      return returnLastTwoDrivers(drivers);
    }
  
  }