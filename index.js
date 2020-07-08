const returnFirstTwoDrivers =  function(driverArray){
    const arr = driverArray.slice(0, 2)
    return arr
}

const returnLastTwoDrivers = function (driverArray){
    const arr = driverArray.slice(-2)
    return arr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare){
        return fare * int
    }
}

 const fareDblr = createFareMultiplier(2)
 function fareDoubler(fare){
     return fareDblr(fare)
 }

 const fareTripl = createFareMultiplier(3)
 function fareTripler(fare){
     return fareTripl(fare)
 }

 function selectDifferentDrivers(arr, func){
    return func(arr)
 }