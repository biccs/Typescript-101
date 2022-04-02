//Importing date-fns from node modules, this library is TS compatible, so it shows
// us metadata on hover.
import { subDays, format } from 'date-fns';

//By default TS set January as 0, so february is 1, and so on.
const date = new Date(1999,7,24);

//subDays is a function from date-fns that allows us to subtract days from a date.
const rta = subDays(date, 30);

//format is a function from date-fns that allows us to format a date in a certain style.
const str = format(rta, 'yyy/MM/dd');

console.log(str);
