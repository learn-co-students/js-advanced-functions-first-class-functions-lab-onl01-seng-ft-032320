
const returnFirstTwoDrivers = function(driverArr) {
    const newArr = driverArr.slice(0, 2)
    return newArr
}

const returnLastTwoDrivers = function(driverArr) {
    const newArr = driverArr.slice(-2)
    return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
      return (fare * int)
    }
}

const dblFare = createFareMultiplier(2)

function fareDoubler(fare) {
    return dblFare(fare)
}

const trplFare = createFareMultiplier(3)

function fareTripler(fare) {
    return trplFare(fare)
}

function  selectDifferentDrivers(driversArr, func) {
    return func(driversArr)
}
    


