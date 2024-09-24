/**
 * โจทย์ backend ข้อที่ 7
 * หาค่าเฉลี่ยของตัวเลขในอาร์เรย์ โดยไม่รวมค่าที่น้อยที่สุดและมากที่สุดออกไป
 * 
 * ตัวอย่าง
 * array = [5, 1, 2, 3, 4]
 * 
 * ผลลัพธ์: ค่าเฉลี่ยของ [2, 3, 4] = 3
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam07(arr) {
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        const sum = arr.reduce((acc, cur) => acc + cur, 0);
        const length = arr.length - 2;
        return (sum - min - max) / length;
    }

    console.log(exam07(input.arr));
});