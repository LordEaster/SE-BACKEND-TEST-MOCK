/**
 * โจทย์ backend ข้อที่ 11
 * เขียนฟังก์ชันเพื่อรวมค่าอาร์เรย์ 2 ชุดที่มีขนาดเท่ากัน โดยเอาค่าจากแต่ละ index มาบวกกัน
 * 
 * ตัวอย่าง
 * array1 = [1, 2, 3]
 * array2 = [4, 5, 6]
 * 
 * ผลลัพธ์: [5, 7, 9]
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam11(arr1, arr2) {
        let result = [];
        for (let i = 0; i < arr1.length; i++) {
            result.push(arr1[i] + arr2[i]);
        }
        return result;
    }

    console.log(exam11(input.arr1, input.arr2));
});