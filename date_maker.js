const ONE_WEEK = 7;
const DAYS_IN_MS = 24 * 60 * 60 * 1000;

// weeksToLookBack:  0 for current week
const getWeekNWeeksAgo = ( n ) => {
  const currentDate = new Date();
  const dateArr = [];
  const startingTime = n * ONE_WEEK * DAYS_IN_MS;
  const startingDate = new Date( currentDate.getTime() - startingTime );
  for ( let i = 0; i < ONE_WEEK; i += 1 ) {
    dateArr.push( new Date( startingDate.getTime() - ( DAYS_IN_MS * i ) ) );
  }
  return dateArr;
};

const getSameDayNDaysAgo = ( n ) => {
  const date = new Date();
  const arr = [];
  const sameDayLastWeek = new Date( date.getTime() - ( n * DAYS_IN_MS ) );
  arr.push( date );
  arr.push( sameDayLastWeek );
  return arr;
};

const getMonth = ( date ) => {
  let month = date.getMonth() + 1;
  if ( month < 10 ) {
    month = `0${month}`;
  }
  return month;
};

const getTwentyFourHourPeriod = ( currentDate, daysAgo ) => {
  // 2020-05-24T02:48:01-08:00
  const targetDate = new Date().setDate( currentDate.getDate() - daysAgo );
  const offset = currentDate.getTimezoneOffset() / 60;
  console.log( targetDate );

  const startTime = `${currentDate.getFullYear()}-${getMonth( currentDate )}-${currentDate.getDate()}T00:00:00-0${offset}:00`;
  const endTime = `${currentDate.getFullYear()}-${getMonth( currentDate )}-${currentDate.getDate()}T23:59:59-0${offset}:00`;

  // const targetStartTime = `${targetDate.getFullYear()}-${getMonth( targetDate )}-${targetDate.getDate()}T00:00:00-0${offset}:00`;
  // const targetEndTime = `${currentDate.getFullYear()}-${getMonth( targetDate )}-${targetDate.getDate()}T23:59:59-0${offset}:00`;

  console.log( startTime, endTime );
  // console.log( targetStartTime, targetEndTime );
};


// getTwentyFourHourPeriod( new Date(), 0 );
getTwentyFourHourPeriod( new Date(), 1 );


module.exports = {
  getWeekNWeeksAgo,
  getSameDayNDaysAgo,
};
