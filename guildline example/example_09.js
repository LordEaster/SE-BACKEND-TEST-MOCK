/**
 * โจทย์ backend ข้อที่ 9
 * เขียนฟังก์ชันเพื่อหาจำนวนครั้งที่ตัวเลขในอาร์เรย์เกิดขึ้นซ้ำ
 * 
 * ตัวอย่าง
 * array = [1, 2, 2, 3, 4, 4, 4, 5]
 * 
 * ผลลัพธ์: {1: 1, 2: 2, 3: 1, 4: 3, 5: 1}
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam09(arr) {
        let result = {};
        for (let i = 0; i < arr.length; i++) {
            if (result[arr[i]]) {
                result[arr[i]]++;
            } else {
                result[arr[i]] = 1;
            }
        }
        return result;
    }

    console.log(exam09(input.arr));
});