// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
// let a = +prompt("nhập số a");
// let b= +prompt("nhập số b");
// if(a % b == 0){
//     alert("hết");
// }else {
//     alert("không hết");
// }

// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10
// let a = +prompt("nhập tuổi");
// let age = 15
// if(a < age){
//     alert("không đủ điều kiện");
// }else {
//     alert("đủ điều kiên");
// }


// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
// let a = +prompt("nhập số");
// if(a>0){
//     document.write("lớn hơn 0");
// }else{
//     document.write("nhỏ hơn 0");
// }


// // Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
// let a = +prompt("nhập số ");
// let b = +prompt("nhập số ");
// let c = +prompt("nhập số ");
// max_value = a ;
// if(b>max_value){
//     max_value = b
// }
// if(c>max_value){
//     max_value = c
// }
// alert("số lớn nhất trong 3 số là " + max_value);


// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
// let a =+prompt("điểm thi giữa kỳ ") ;
// let b = +prompt("điểm thi cuối kỳ ");
// let c = +prompt("điểm bài kiểm tra ");
// let d =((a+c)%b)
// if(0 < d < 5 ){
//     alert("học sinh trung bình")
// }else if( 7 > d > 5  ){
//     alert("Học sinh khá ")
// }else{
//     alert("học sinh giỏi")
// }


// Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
// let a =+prompt("nhập doanh số");
// let hoahong =0
//
// let c = 15000000
// let d = 0.05
//
// let e= 30000000
// let g = 0.1
//
// if (a <= c ){
//     hoahong = a * d
// }else if (a <= e){
//     hoahong = a * g
// }else {
//     hoahong = c * d + (c - d) * g + (a - e) * 0.15
// }
// alert("hoa hồng nhận đưc là " + hoahong.toFixed(2));
// toFixed là giới hạn số lẻ của số thập phân là 2 chữ số


// bài 7 :  Tính cước điện thoại cho một hộ gia đình với các thông số đã cho


function tinhCuocDienThoai(soThanhVien, giaCuocDiDong, giaCuocCoDinh) {
    let cuocDiDong = soThanhVien * giaCuocDiDong;
    let cuocCoDinh = giaCuocCoDinh ;
    let tongCuoc = cuocDiDong + cuocCoDinh;

    return tongCuoc;
}

let soThanhVien = +prompt("số thành viên");
let giaCuocDiDong = +prompt("số cuốc di động");
let giaCuocCoDinh = +prompt("số cuốc cố định");

let cuocDienThoai = tinhCuocDienThoai(soThanhVien, giaCuocDiDong, giaCuocCoDinh);

alert("Tổng cước điện thoại hàng tháng là: " + cuocDienThoai + " VND");
