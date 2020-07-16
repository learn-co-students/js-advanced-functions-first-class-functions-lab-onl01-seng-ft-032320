// Code your solution in this file!

function returnFirstTwoDrivers(array) {
    const new_array = array.slice(0, 2);
    return new_array;
}

function returnLastTwoDrivers(array) {
    let new_array = array.slice(-2);
    return new_array;
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(a) {
    return function(fare) {
        return fare * a;
    }
}
const double = createFareMultiplier(2);
function fareDoubler(a) {
    return double(a);
}

const triple = createFareMultiplier(3);
function fareTripler(a) {
    return triple(a);
}

function selectDifferentDrivers(drivers, driver_f) {
    return driver_f(drivers);
}
