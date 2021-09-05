// 1. Grasshopper - Object syntax debug**
// [https://www.codewars.com/kata/56d8ae9237123036d3001b54](https://www.codewars.com/kata/56d8ae9237123036d3001b54)

var rooms = {
  first: {
    description: "This is the first room",
    items: {
      chair: "The old chair looks comfortable",
      lamp: "This lamp looks ancient",
    },
  },
  second: {
    description: "This is the second room",
    items: {
      couch: "This couch looks like it would hurt your back",
      table: "On the table there is an unopened bottle of water",
    },
  },
};

// 2. fix my method

// [https://www.codewars.com/kata/558710234f02dcc4a8000005/train/javascript](https://www.codewars.com/kata/558710234f02dcc4a8000005/train/javascript)

function myFunction() {
  var myObject = {
    objProperty: "string",
    objMethod: function objMethod() {
      return myObject.objProperty;
    },
  };

  return myObject;
}

//3. Grasshopper bug squashing**
// [https://www.codewars.com/kata/56214b6864fe8813f1000019/solutions/javascript](https://www.codewars.com/kata/56214b6864fe8813f1000019/solutions/javascript)

var health = 100;
var position = 0;
var coins = 0;

function main() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  // attack();
  printStatus();
}

// Function syntax debug
// https://www.codewars.com/kata/56dae9dc54c0acd29d00109a/solutions/javascript](https://www.codewars.com/kata/56dae9dc54c0acd29d00109a/solutions/javascript)

function main(verb, noun) {
  return verb + noun;
}
