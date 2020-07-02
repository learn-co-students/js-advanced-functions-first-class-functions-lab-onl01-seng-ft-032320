// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
    const variable = function(arr) {
        return arr.slice(0,2)
    }
    return variable(drivers)
}

function returnLastTwoDrivers(drivers) {
    const variable = function(arr) {
        return arr.slice(2)
    }
    return variable(drivers)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    let b = function (x) {
        return (x * integer)
    }
    return b
}

function fareDoubler(fare) {
    const variable = createFareMultiplier(2)
    return variable(fare)
}

function fareTripler(fare) {
    const variable = createFareMultiplier(3)
    return variable(fare)
}

function selectDifferentDrivers(drivers, myfunction) {
    return myfunction(drivers)
}