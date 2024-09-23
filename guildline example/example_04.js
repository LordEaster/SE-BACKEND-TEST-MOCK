/**
 * โจทย์ backend ข้อที่ 4
 * หาค่า max และ min จาก array ที่กำหนดให้
 * จากนั้นนำค่า max และ min มาบวกกันแล้ว return ออกมา
 * 
 * ตัวอย่าง
 * array = [ 3, 4, 5, 1, 2 ]
 * 
 * ผลลัพธ์ = 6
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam04(arr) {
        let max = Math.max(...arr);
        let min = Math.min(...arr);

        return max + min;
    }

    console.log(exam04(input.arr));
});