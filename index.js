// Code your solution in this file!
function returnFirstTwoDrivers(array) {return array.slice(0, 2)}

function returnLastTwoDrivers(array) {return array.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (int) {
    return function (value) {
      return int * value;
    };
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers)
}