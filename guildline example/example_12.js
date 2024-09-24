/**
 * โจทย์ backend ข้อที่ 12
 * ให้เขียนฟังก์ชันหาจำนวนตัวอักษรที่ซ้ำกันใน string
 * 
 * ตัวอย่าง
 * input = "hello"
 * 
 * ผลลัพธ์: {h: 1, e: 1, l: 2, o: 1}
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam12(text) {
        const textLength = text.length;
        const result = {};
        for (let i = 0; i < textLength; i++) {
            if (result[text[i]]) {
                result[text[i]] += 1;
            } else {
                result[text[i]] = 1;
            }
        }
        return result
    }

    console.log(exam12(input.text));
});