const ONE_WEEK = 7;

const getMonth = ( date ) => {
  let month = date.getMonth() + 1;
  if ( month < 10 ) {
    month = `0${month}`;
  }
  return month;
};

const getStartAndEndTimes = ( startDate, endDate ) => {
  // 2020-05-24T02:48:01-08:00
  if ( !endDate ) endDate = new Date( startDate );
  const startOffset = startDate.getTimezoneOffset() / 60;
  const endOffset = endDate.getTimezoneOffset() / 60;
  const endTime = `${startDate.getFullYear()}-${getMonth( startDate )}-${startDate.getDate()}T00%3A00%3A00-0${startOffset}%3A00`;
  const startTime = `${endDate.getFullYear()}-${getMonth( endDate )}-${endDate.getDate()}T23%3A59%3A59-0${endOffset}%3A00`;
  return { startTime, endTime };
};


// weeksToLookBack:  0 for current week
const getWeekRangeNWeeksAgo = ( n ) => {
  const currentDate = new Date();
  const startDate = new Date( new Date().setDate( currentDate.getDate() - ( n * ONE_WEEK ) ) );
  const endDate = new Date( new Date().setDate( startDate.getDate() - 6 ) );
  return getStartAndEndTimes( startDate, endDate );
};


const getDayRangeNDaysAgo = ( n ) => {
  const date = new Date( new Date().setDate( new Date().getDate() - n ) );
  return getStartAndEndTimes( date );
};


// console.log( getStartAndEndTimes( new Date() ) );
console.log( getDayRangeNDaysAgo( 1 ) );

module.exports = {
  getWeekRangeNWeeksAgo,
  getDayRangeNDaysAgo,
};
