/**
 * โจทย์ backend ข้อที่ 10
 * เขียนฟังก์ชันที่รับค่า string และทำการสลับอักษรที่ตำแหน่งคู่กับคี่
 * 
 * ตัวอย่าง
 * input = "abcdef"
 * 
 * ผลลัพธ์: "badcfe"
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam10(text) {
        let result = '';
        const textLength = text.length;
        for (let i = 0; i < textLength; i++) {
            if (i % 2 === 0) {
                result += text[i + 1] ? text[i + 1] : text[i];
            } else {
                result += text[i - 1];
            }
        }
        return result;
    }

    console.log(exam10(input.text));
});