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


module.exports = {
  getWeekNWeeksAgo,
  getSameDayNDaysAgo,
};
