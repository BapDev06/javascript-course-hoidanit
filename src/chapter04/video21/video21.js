console.log("video21")

let globalVar = " Tôi là biến toàn cục"; 

function show(){
    console.log(globalVar); //truy cập được
}

show(); 
console.log(globalVar); // truy cập được

function sayHi(){
    let name1 = "Bap"; 
    console.log("Hi " + name1); 
    
    if(true) {
        let x = 10; 
        const y = 20; 
        console.log(x, y); //Truy cập được
    }

    console.log(x); // lỗi: x is not defined
}

sayHi(); 
console.log(name1); // lỗi: name is not defined

