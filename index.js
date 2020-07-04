// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(driversArray) {
    const newArray = [...driversArray]
    return newArray.slice(0, 2)
}

const returnLastTwoDrivers = function(driversArray) {
    const newArray = [...driversArray]
    return newArray.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(timesFare) {
    return function(fare){
        return timesFare * fare
    }
}

const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, whosDriving) {
    return whosDriving(drivers);
  };