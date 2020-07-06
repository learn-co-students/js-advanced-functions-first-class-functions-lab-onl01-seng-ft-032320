// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let firstTwo = []
    for (let i = 0; i < 2; i++) {
        firstTwo.push(drivers[i]);
      }
     return firstTwo
}

const returnLastTwoDrivers = function(drivers){
    let newArray = drivers.slice(2);
    return newArray;
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

  // function createFareMultiplier(intg) {
  //   if (intg === 2) {
  //     return fareDoubler(intg)
  //   }
  //   else if (intg === 3) {
  //     return fareTripler(intg)
  //   }
    
  // }

    // const fareDoubler = (fare)
  //   return fare * 2
  // }
  // const fareTripler = function(fare){
  //   return fare * 3
  // }
                                        
  const createFareMultiplier = function(multiply) {
    return function(value) {
      return multiply * value;
    }
  }

  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);



  const selectDifferentDrivers = function(drivers, randomMethod){
    return randomMethod(drivers);
  }