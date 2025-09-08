console.log("video 25")

const names = ["Tuan", "Bap", "Nam", "Bla bla"]

//index = 0; arr[index]
console.log("0 = ", names[0])
console.log("2 = ", names[2])
console.log("10 = ", names[10])

names[3] = "update name"; 
console.log("before", names); 

names.push(true, 157)
names.unshift(null)

names.pop()
names.shift()
console.log("after", names)