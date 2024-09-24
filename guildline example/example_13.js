/**
 * โจทย์ backend ข้อที่ 13
 * เขียนฟังก์ชันเพื่อลบตัวเลขที่เป็นคี่ทั้งหมดในอาร์เรย์
 * 
 * ตัวอย่าง
 * array = [1, 2, 3, 4, 5]
 * 
 * ผลลัพธ์: [2, 4]
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam13(arr) {
        return arr.filter((value) => value % 2 === 0);
    }

    console.log(exam13(input.arr));
});