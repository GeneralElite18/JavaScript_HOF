console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


function plus(number){

    return ((plusNumber)=> {
        console.log("plusNumber: " + plusNumber);
        console.log("number: " + number);
        return number += plusNumber;
    });
}

let plus15 = plus(15);

console.log(plus15);

console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
];

users.forEach(element => {
    console.log(element.name);
});

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let mappedUsers = users.map(element => {
    const arr = [element.name, element.score]
    return arr;
}); 

console.log(mappedUsers);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let filteredUsers = users.filter((element) => {
    return element.isActive;
});

console.log(filteredUsers);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let sortedUsers = users.sort((a,b) => {
    return b.score - a.score;
});

console.log(sortedUsers);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

let reducedUsers = users.reduce((accumulated, current) => {
    return accumulated + current.score;
}, 0);

console.log("Total score: " + reducedUsers);

console.log("Average score: " + (reducedUsers/users.length));