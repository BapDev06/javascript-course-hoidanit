//Tạo hàm tính điểm trung bình 
const tinhTrungBinh = (toan , van, anh) => {
    return (toan + van + anh)/3; 
}


//Tạo hàm xếp loại (diemTB)
const xepLoai = (diemTB) => {
    if (diemTB >= 9){
        return "Xuất sắc";  
    } else if (diemTB >= 8 && diemTB < 9){
        return "Giỏi"; 
    } else if (diemTB >= 6.5 && diemTB < 8) {
        return "Khá"; 
    } else {
        return "Trung Bình"; 
    }
}

const diemToan = 9; 
const diemVan = 8; 
const diemAnh = 7; 

const myTb = tinhTrungBinh(diemToan, diemVan, diemAnh); 

console.log(`
Điểm trung bình: ${myTb}
Xếp loại: ${xepLoai(myTb)}
`)

