// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
   return drivers.slice(-2)   
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
   return function(fare){return fare * int}
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, selected){
   return selected(drivers)
}