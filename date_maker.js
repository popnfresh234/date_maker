const ONE_WEEK = 7;

// weeksToLookBack:  0 for current week
const getWeekNWeeksAgo = ( n ) => {
  const currentDate = new Date();
  const dateArr = [];
  const startingDate = new Date( new Date().setDate( currentDate.getDate() - ( n * ONE_WEEK ) ) );
  for ( let i = 0; i < ONE_WEEK; i += 1 ) {
    dateArr.push( new Date( new Date().setDate( startingDate.getDate() - i ) ) );
  }
  return dateArr;
};


const getMonth = ( date ) => {
  let month = date.getMonth() + 1;
  if ( month < 10 ) {
    month = `0${month}`;
  }
  return month;
};

const getDateNDaysAgo = n => new Date( new Date().setDate( new Date().getDate() - n ) );

const getTwentyFourHourPeriodFromDate = ( date ) => {
  // 2020-05-24T02:48:01-08:00
  const offset = date.getTimezoneOffset() / 60;
  const startTime = `${date.getFullYear()}-${getMonth( date )}-${date.getDate()}T00:00:00-0${offset}:00`;
  const endTime = `${date.getFullYear()}-${getMonth( date )}-${date.getDate()}T23:59:59-0${offset}:00`;
  return { startTime, endTime };
};

console.log( getWeekNWeeksAgo( 1 ) );

module.exports = {
  getWeekNWeeksAgo,
  getTwentyFourHourPeriodFromDate,
  getDateNDaysAgo,
};
