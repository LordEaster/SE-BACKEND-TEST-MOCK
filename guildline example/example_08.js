/**
 * โจทย์ backend ข้อที่ 8
 * เขียนฟังก์ชันเพื่อตรวจสอบว่า string ที่กำหนดให้นั้นเป็น palindrome หรือไม่
 * 
 * ตัวอย่าง
 * input = "madam"
 * 
 * ผลลัพธ์: true
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam08(text) {
        let result = true;
        const textLength = text.length;
        for (let i = 0; i < textLength; i++) {
            if (text[i] !== text[textLength - 1 - i]) {
                result = false;
                break;
            }
        }
        return result;
    }

    console.log(exam08(input.text));
});