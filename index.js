// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
      let array = drivers.slice(0,2)
      
      return array

     
}

const returnLastTwoDrivers = function(drivers){
    let array = drivers.slice(-2)
      
      return array
      
}



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    let i = integer
    if( i === 4){
        return function(fare){
           return fare *= 4
        }
        
    }
    return function(fare) {
      return fare *= i
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, func){

    if( func === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers)
    }

    return returnFirstTwoDrivers(arrayOfDrivers)

}




    
      








