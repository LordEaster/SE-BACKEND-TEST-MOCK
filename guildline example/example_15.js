/**
 * โจทย์ backend ข้อที่ 15
 * เขียนฟังก์ชันที่รับค่าตัวเลข n และสร้างอาร์เรย์ที่มีความยาว n โดยสมาชิกในอาร์เรย์คือเลขคี่เริ่มจาก 1
 * 
 * ตัวอย่าง
 * input = 5
 * 
 * ผลลัพธ์: [1, 3, 5, 7, 9]
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam15(number) {
        //  แก้ไขโค้ดตรงนี้
        let arr = [];
        for (let i = 1; i <= number * 2; i++) {
            if (i % 2 !== 0) {
                arr.push(i);
            }
        }
        return arr;
    }

    console.log(exam15(input.number));
});