/**
 * โจทย์ backend ข้อที่ 1
 * คำอธิบาย : ให้รับค่า array จาก input และให้ทำการบวกค่าใน array โดยมีเงื่อนไขการเช็คดังนี้
 * 1. ถ้า array ที่ index ตำแหน่งนั้นๆ มีค่าเป็น int ให้ทำการบวกค่าลงในตัวแปร
 * 2. ถ้า array ที่ index ตำแหน่งนั้นๆ มีค่าเป็น string แต่มีตัวเลขผสมอยู่ใน string ให้ทำการตัดตัวอักษรออกและเปลี่ยนค่ามาเป็น int และทำการบวกค่าลงในตัวแปร
 * 
 * หลังจากนั้นทำการ return ค่าออกมาเป็นผลรวมของการบวก
 * 
 * ตัวอย่าง 
 * array = [1, '2a', '3abc', 4, 'def5', 'b6'];
 * 
 * ผลลัพธ์ = 21
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam01(arr) {
        let sum = 0;

        arr.forEach((item) => {
            if (typeof item === 'string' && !item.match(/\d/)) {
                return;
            }

            if (typeof item === 'number') {
                sum += item;
            } else {
                const num = parseInt(item.replaceAll(/\D/g, ''));
                sum += num;
            }
        });

        return sum;
    }

    console.log(exam01(input.arr));
});