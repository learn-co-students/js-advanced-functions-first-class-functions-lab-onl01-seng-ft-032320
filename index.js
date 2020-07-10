function returnFirstTwoDrivers(arr) {
    return [arr[0],arr[1]]
}

function returnLastTwoDrivers(arr) {
    return [arr[arr.length-2], arr[arr.length-1]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) { return function(value) {
        return value * multiplier
    }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(arr, selecter) {
    return selecter(arr)
}
