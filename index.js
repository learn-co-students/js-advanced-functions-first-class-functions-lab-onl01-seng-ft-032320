const returnFirstTwoDrivers = (drivers) => (drivers.slice(0,2));

const returnLastTwoDrivers = (drivers) => (drivers.slice(-2));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => ((fare) => (fare * multiplier));

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

let randomFunc = selectingDrivers[Math.round(Math.random())]

const selectDifferentDrivers = (drivers, randomFunc) => (randomFunc(drivers))