/**
 * โจทย์ backend ข้อที่ 5
 * การหมุน (rotation) จะทำการย้ายสมาชิกตัวสุดท้ายของอาร์เรย์ไปที่ตำแหน่งแรก 
 * ในโจทย์นี้มีอาร์เรย์เริ่มต้นคือ [ 1, 2, 3, 4, 5 ] และมีการหมุนไปทั้งหมด n ครั้ง
 * 
 * ตัวอย่าง
 * หมุน 3 ครั้ง
 * 
 * ข้อมูลเริ่มต้น: [ 1, 2, 3, 4, 5 ]
 * หมุน 1 ครั้ง: [ 5, 1, 2, 3, 4 ] (สมาชิกตัวสุดท้าย 5 ถูกย้ายไปตำแหน่งแรก)
 * หมุน 2 ครั้ง: [ 4, 5, 1, 2, 3 ] (สมาชิกตัวสุดท้าย 4 ถูกย้ายไปตำแหน่งแรก)
 * หมุน 3 ครั้ง: [ 3, 4, 5, 1, 2 ] (สมาชิกตัวสุดท้าย 3 ถูกย้ายไปตำแหน่งแรก)
 * 
 * ผลลัพธ์: [ 3, 4, 5, 1, 2 ]
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam05(round) {
        let arr = [ 1, 2, 3, 4, 5 ]

        //  แก้ไขโค้ดตรงนี้

        return arr
    }

    console.log(exam05(input.round));
});