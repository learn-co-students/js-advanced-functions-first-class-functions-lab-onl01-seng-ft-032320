// Code your solution in this file!
const returnFirstTwoDrivers = function(driver) {
    return driver.slice(0, 2)
}

const returnLastTwoDrivers = function(driver) {
    return driver.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function(fare) {
        return int * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, pickDrivers) {
    return pickDrivers(drivers)
}