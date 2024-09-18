// Q 1
function doubleNumbers(arr) {
    return arr.map(number => number * 2);
}
        console.log(doubleNumbers([2, 5, 100]));

 // Q 2
 function stringItUp(arr) {
    return arr.map(number => number.toString());
}
console.log(stringItUp([2, 5, 100])); 


 // Q 3
 function capitalizeNames(names) {
    return names.map(name => 
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    );
}
console.log(capitalizeNames(["Mohammad", "Ahmed", "Ibrahim", "Kordi"]));


 // Q 4
    function namesOnly(arr) {
    return arr.map(person => person.name);
}

console.log(namesOnly([
    {
        name: "Mohammad",
        age: 20
    },
    {
        name: "Ahmed",
        age: 22
    },
    {
        name: "Ibrahim",
        age: 35
    },
    {
        name: "Reem",
        age: 18
    },
    {
        name: "Leen",
        age: 21
    }
])); 


// Q 5
function makeStrings(arr) {
    return arr.map(item => {
        if (item.age >= 18) {
            return `${item.name} can go to The Matrix`;
        } else {
            return `${item.name} is under age!!`;
        }
    });
}

console.log(makeStrings([
    {
        name: "Mohammad",
        age: 20
    },
    {
        name: "Ahmed",
        age: 22
    },
    {
        name: "Ibrahim",
        age: 35
    },
    {
    
name: "Reem",
age: 18
    },
    {
        name: "Leen",
        age: 21
    }
]));


// Q6
function readyToPutInTheDOM(arr){
    return arr.map(person => {
        return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
});
};

console.log(readyToPutInTheDOM([
{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}
]));


// Q 7
function doubleValues(arr) {
    return arr.map(num => num * 2); 
}

console.log(doubleValues([1, 2, 3]));   
console.log(doubleValues([1, -2, -3])); 


// Q 8
function valTimesIndex(arr){
        return arr.map((num , index) => num *index);
    }
    console.log(valTimesIndex([1, 2, 3]));   
    console.log(valTimesIndex([1,-2,-3]));


// Q 9
   function extractKey(arr, key) {
    return arr.map(object => object[key]);
    }

    console.log(extractKey([
        {name: "Mohammad",
         age: 20
        },
        {name: "Kordi",
         age: 29
        },
        {name: "Ahmed",
         age: 23
        }
    ], 'name')); 

 // Q 10
    function extractFullName(arr) {
    return arr.map(object => object.first + " " + object.last);
    }

    console.log(extractFullName([
        {first: 'Elie', last: "Schoppik"},
        {first: 'Tim', last: "Garcia"},
        {first: 'Matt', last: "Lane"},
        {first: 'Colt', last: "Steele"}
    ]));