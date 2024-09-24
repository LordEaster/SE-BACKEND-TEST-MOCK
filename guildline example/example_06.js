/**
 * โจทย์ backend ข้อที่ 6
 * เขียนฟังก์ชันเพื่อลบค่าที่ซ้ำกันในอาร์เรย์ โดยคงไว้เฉพาะค่าที่ไม่ซ้ำกัน
 * 
 * ตัวอย่าง
 * array = [1, 2, 2, 3, 4, 4, 5]
 * 
 * ผลลัพธ์: [1, 2, 3, 4, 5]
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam06(arr) {
        const result = arr.filter((item, index) => arr.indexOf(item) === index);
        return result;
    }

    console.log(exam06(input.arr));
});