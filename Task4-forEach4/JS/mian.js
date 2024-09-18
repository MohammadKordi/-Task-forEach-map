// Q 1
function doubleValues(arr) {
    return arr.map(value => value * 2);
}
console.log(doubleValues([1, 2, 3])); 
console.log(doubleValues([5, 1, 2, 3, 10])); 

// Q 2
function onlyEvenValues(arr) {
    return arr.filter(value => value % 2 === 0);
}
console.log(onlyEvenValues([1, 2, 3]));  // [2]
console.log(onlyEvenValues([5, 1, 2, 3, 10]));  // [2, 10]

// Q 3
function showFirstAndLast(arr) {
    return arr.map(str => str[0] + str[str.length - 1]);
}
console.log(showFirstAndLast(['Mohammad', 'Ahmed', 'Ibrihem', 'Kordi'])); 
console.log(showFirstAndLast(['JS', 'goodbye', 'smile']));  

// Q 4
function addKeyAndValue(arr, key, value) {
    arr.forEach(obj => {
        obj[key] = value;
    });
    return arr;
}
const result = addKeyAndValue(
    [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }],
    'title',
    'instructor'
);

console.log(result);


// Q 5
function vowelCount(str) {
    const lowerStr = str.toLowerCase();
    
    const vowelCounts = {};
    
    const vowels = 'aeiou';    
    for (let char of lowerStr) {
        if (vowels.includes(char)) {
            if (!vowelCounts[char]) {
                vowelCounts[char] = 1;
            } else {
                vowelCounts[char]++;
            }
        }
    }
    
    return vowelCounts;
}

console.log(vowelCount('Elie'));  
console.log(vowelCount('Tim'));  
console.log(vowelCount('Matt'));  
console.log(vowelCount('hmmm')); 
console.log(vowelCount('I Am awesome and so are you'));