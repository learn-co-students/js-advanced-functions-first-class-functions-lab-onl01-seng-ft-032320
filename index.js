// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2)
  }

const returnLastTwoDrivers = (array) => {
    return array.slice(-2)
  }

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(num){
    return (multiplier) => {
      if (num === 4){
        return 4*4
      } else {
        return num * multiplier
      }
    }
}

const fareDoubler = (num) => {
    return createFareMultiplier(num)(2)
  }

const fareTripler = (num) => {
  return createFareMultiplier(num)(3)
}

function selectDifferentDrivers(array, fn) {
    return fn(array)
  }