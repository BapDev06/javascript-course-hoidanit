console.log("video 28")

const ages = [10, 20, 30, 25, 12, 19]; 

const agesX2 = ages.map((item, index) => {
    return item * 2; 
})

const agesGreatThan18 = ages.filter((item, index) => {
    return item > 18; //true
})

console.log("original: ", ages); 
console.log("agesX2: ", agesX2); 
console.log("agesGreatThan18: ", agesGreatThan18);

// let newArray = array.filter(function(element, index, array) {
//  return điều_kiện_đúng; // true giữ lại, false loại bỏ
// });