
//Câu 1:
console.log(`--- CÂU 1 ---`);

let n = -10;
//NV1
if (n % 2 === 0) {
    console.log(`Số ${n} là số chẵn`);
} else {
    console.log(`Số ${n} là số lẻ`);
}
//NV2
if (n > 0) {
    console.log(`Số ${n} là số dương`);
} else if (n < 0) {
    console.log(`Số ${n} là số âm`);
} else {
    console.log(`Số ${n} bằng 0`);
}
//NV3
if (!n || n < 0) {
    console.log(`Giá trị n không hợp lệ để tạo dãy số`);
} else {
    for (let i = 1; i <= n; i++) {
        console.log(`${i}`);
    }
}

//Câu 2:
console.log(`--- CÂU 2 ---`);
//NV1
let end = 50;
let totalFizz = 0;
for (let start = 1;start <= end;start++){
    if(start % 3 === 0 && start % 5 === 0){
        console.log(`FizzBuzz`);
        continue;
    }else if(start % 3 === 0){
        console.log(`Fizz`);
        totalFizz += start;
        continue;
    }else if(start % 5 === 0){
        console.log(`Buzz`);
        continue;
    }else{
        console.log(`${start}`);
    }
}
//NV2
console.log(`Tổng của tất cả các số đã
in ra chữ "Fizz" là ${totalFizz}`);
