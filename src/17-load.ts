//Non module way for importing an external library after npm i
//** var _ = require("lodash");
//this other way is for implementing it the TS way, as module, at first
// it pops up a warning saying type is "any" which is bad, so it suggests us to
// import TS's own package for dealing with lodash Type Annotations "npm i --save-dev @types/lodash",
// after that warning it taken care of.
import _ from "lodash";

const data = [
  {
    username: 'vic',
    role: 'admin'
  },
  {
    username: 'tom',
    role: 'dev'
  },
  {
    username: 'jerry',
    role: 'dev'
  },
  {
    username: 'maria',
    role: 'customer'
  },
  {
    username: 'joe',
    role: 'customer'
  }
];

console.log(_.groupBy(data, (item) => item.role));
