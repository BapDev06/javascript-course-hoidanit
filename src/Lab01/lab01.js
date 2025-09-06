console.log("lab 01")
// full name (string)
const fullName = "Ngo Nhat Tuan"; 

//Birth year (number)
const birthYear = 2006;

//isStudent: true/false
const isStudent = true; 

//Tinh nam hien tai
const today = new Date(); 
const currentYear = today.getFullYear();

const calculatedAge = currentYear - birthYear; 

//Tên: [fullName]
//Tuổi: [calculatedAge]
//Sinh viên: [Đúng/Sai]


const intro = `Tên: ${fullName}
Tuổi: ${calculatedAge}
Sinh viên: ${isStudent}`
console.log(intro)

console.log("=================")
console.log("Tên: ", fullName); 
console.log("Tuổi: ", calculatedAge); 
console.log("Sinh viên: ", isStudent); 

