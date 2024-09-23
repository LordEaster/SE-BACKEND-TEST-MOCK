/**
 * โจทย์ backend ข้อที่ 3
 * คำอธิบาย: ให้รับค่า array 2 ตัว แล้วเอาค่า array ในตำแหน่งที่ index ตรงกัน มาเปรียบเทียบกันโดยมีเงื่อนไขดังนี้
 *
 * Alice และ Bob จะทำการสร้าง array คะแนนที่จะเอามาเปรียบเทียบกัน ถ้าคะแนน ณ ตำแหน่งเดียวกัน
 * ฝั่งไหนมากกว่า ฝั่งนั้นจะได้คะแนน แต่ถ้าคะแนนเท่ากัน ก็จะไม่ได้คะแนนในส่วนนั้น ให้นับคะแนน และ
 * คืนค่าเป็น array 2 ค่า โดยที่ค่าแรกจะเป็นคะแนนของ Alice และค่าที่สองจะเป็นของ Bob
 *
 * โดยสรุป เงื่อนไขการให้คะแนนจะเป็นดังนี้
 * - ถ้า Alice ณ index นั้น มากกว่า (>) Bob ณ index เดียวกัน Alice จะได้คะแนน 1 คะแนน
 * - แต่ถ้า Bob ณ index นั้น มากกว่า (<) Alice ณ index เดียวกัน Bob จะได้คะแนน 1 คะแนน
 * - ถ้าเท่ากัน จะไม่ได้คะแนนทั้งคู่
 *
 * ตัวอย่างเช่น
 * Alice array = [1, 2, 3]
 * Bob array = [7, 1, 3]
 *
 * การเปรียบเทียบจะเป็นดังนี้
 * - Alice array index ที่ 0 มีค่าเป็น 1
 *   Bob array index ที่ 0 มีค่าเป็น 7
 *   ดังนั้น คะแนนครั้งนี้ Bob จะได้ไป 1 คะแนน
 *
 * - Alice array index ที่ 1 มีค่าเป็น 2
 *   Bob array index ที่ 1 มีค่าเป็น 1
 *   ดังนั้น คะแนนครั้งนี้ Alice จะได้ไป 1 คะแนน
 *
 * - Alice array index ที่ 2 มีค่าเป็น 3
 *   Bob array index ที่ 2 มีค่าเป็น 3
 *   ดังนั้น คะแนนครั้งนี้จะไม่มีใครได้คะแนน
 *
 * ดังนั้น คำตอบจากข้อมูลนี้จะได้เป็น [1, 1]
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam03(alice, bob) {
        let aliceScore = 0;
        let bobScore = 0;

        for (let i = 0; i < alice.length; i++) {
            if (alice[i] > bob[i]) {
                aliceScore++;
            } else if (bob[i] > alice[i]) {
                bobScore++;
            }
        }

        return [aliceScore, bobScore];
    }

    console.log(exam03(input.alice, input.bob));
});