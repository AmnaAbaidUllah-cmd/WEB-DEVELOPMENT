const paintings = [
 {title: "Girl with a Pearl Earring", artist: "Vermeer", year: 1665},
 {title: "Artist Holding a Thistle", artist: "Durer", year: 1493},
 {title: "Wheatfield with Crows", artist: "Van Gogh", year: 1890},
 {title: "Burial at Ornans", artist: "Courbet", year: 1849},
 {title: "Sunflowers", artist: "Van Gogh", year: 1889}
];

paintings.forEach( (n) => {
    console.log(`Title: ${n.title} , Artist: ${n.artist}`) 
});

//foreach takes 3 parameters overall
let numbers=[1,3,5,7,9];
numbers.forEach((value, index, array) => { 
console.log(`Value: ${value}, Index: ${index}, Array: ${array}`)});

//returns undefined -- does not store the value returned by the callback function
let result = numbers.forEach((n) => n * 2);
console.log(result);
 

//without returning it can show the value in console but it will not store it in result variable
let result1 = numbers.forEach((n) => {
    console.log(n * 2);
});
console.log(result1);