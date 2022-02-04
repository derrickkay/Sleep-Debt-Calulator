
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 4;
    case 'wednesday':
      return 3;
    case 'thursday':
      return 5;
    case 'friday':
      return 6;
    case 'saturday':
      return 5;
    case 'sunday':
      return 4;
    default:
      return 'Please enter a valid day.'
  }
};

// no curly braces IMPPLICIT return!
const getActualSleepHours = () => 
getSleepHours('monday') + 
getSleepHours('tuesday') + 
getSleepHours('wednesday') + 
getSleepHours('thursday') + 
getSleepHours('friday') + 
getSleepHours('saturday') + 
getSleepHours('sunday');
// OR const getActualSleepHours = () => 8 + 4 + 3 + 5 + 6 + 5 + 4;

//console.log("put in a string", getSleepHours('monday'));
console.log("The total amount of sleep you've had this week is", getActualSleepHours()); // This prints WRONG VALUE :-(

const getIdealSleepHours = () => {
const idealHours = 8;
return idealHours * 7; 
};
// OR const getIdealSleepHours = idealHours => idealHours * 7;


const calculateSleepDebt = (idealHours) => {

  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);


  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep. Good job!');
  } else if (actualSleepHours >= idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} hour(s) more sleep than you needed this week.`);
  } else {
    console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`);
  }
}


calculateSleepDebt();
console.log('Your ideal/recommended amount is ' + getIdealSleepHours());
getIdealSleepHours();
