**สวัสดีครับทุกท่าน วันนี้ผมจะมาอธิบายโจทย์ backend จำนวน 5 ข้อที่น่าสนใจ ทั้งการจัดการกับข้อมูลใน array การคำนวณผลลัพธ์ และการสลับหรือหมุนตำแหน่งสมาชิกใน array**

ลิงก์โจทย์: [โจทย์จำลอง back-end](https://github.com/LordEaster/SE-BACKEND-TEST-MOCK)

# วิธีการตรวจด้วย Automated

![](data:image/png;base64,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)
ในไฟล์ที่เพื่อนๆ ดาวน์โหลดไปจะมีตัว checker อยู่
สิ่งที่ต้องทำ

1. ต้องมี python ติดตั้งอยู่ในเครื่อง
2. package python ที่ต้องติดตั้ง
    1. requests: สำหรับส่ง HTTP requests ไปยัง Piston API
    2. PyYAML: สำหรับอ่านและเขียนไฟล์ YAML
3. ติดตั้งได้ผ่าน `pip install requests pyyaml`
4. รันคำสั่ง `python3 checker/checker.py` ที่นอกสุดของโค้ดโจทย์ที่ดาวน์โหลดมา

**เราเข้าใจเบื้องต้นกันแล้วแล้ว ไปเริ่มกันเลยย!!**

# โจทย์ข้อที่ 1: บวกค่าตัวเลขจาก array โดยจัดการข้อมูลประเภท string ที่มีตัวเลขผสมอยู่

โจทย์นี้จะให้เรารับ array เป็น input และทำการบวกค่าทุก ๆ ตำแหน่งที่มีเลขแฝงอยู่ เงื่อนไขการเช็คคือ:

* ถ้าค่าที่ตำแหน่งนั้นเป็น int ให้ทำการบวกทันที
* ถ้าเป็น string ที่มีตัวเลขปนอยู่ ให้ดึงตัวเลขออกมาและบวกเข้าตัวแปร

**ตัวอย่าง**:

```array = [1, '2a', '3abc', 4, 'def5', 'b6'];```

ผลลัพธ์จะเท่ากับ 21 เพราะเราจะได้ตัวเลขจากการดึงออกมาจาก string แล้วบวกเข้ากับ int โดยตรง

**หลักการคิด**:

1. เราตรวจสอบแต่ละค่าของ array
2. ถ้าค่าเป็นตัวเลข ก็ทำการบวก
3. ถ้าค่าเป็น string ให้ดึงเฉพาะตัวเลขออกมาและเปลี่ยนเป็น int ก่อนที่จะทำการบวก

# โจทย์ข้อที่ 2: สลับค่าใน array

โจทย์นี้จะให้เราสลับค่าในตำแหน่งที่กำหนด โดยให้สลับค่าในตำแหน่ง index 1 กับ index 2 ใน array ที่ได้รับ

**ตัวอย่าง**:

`student = ['Bomgay', 'Ohm', 'Smart'];`

หลังจากการสลับ index ที่ 1 และ 2 ผลลัพธ์จะเป็น:

`student = ['Bomgay', 'Smart', 'Ohm'];`

**หลักการคิด**:

1. ตรวจสอบตำแหน่งของสมาชิกที่ต้องสลับ
2. ทำการสลับค่าในตำแหน่งที่กำหนดแล้ว return array ที่สลับค่าแล้วออกมา

# โจทย์ข้อที่ 3: เปรียบเทียบคะแนนของ Alice และ Bob

ในข้อนี้ Alice และ Bob จะทำการเปรียบเทียบคะแนนใน array ของแต่ละคน โดยเงื่อนไขคือ:

* ถ้า Alice ชนะในตำแหน่งนั้น ๆ Alice จะได้ 1 คะแนน
* ถ้า Bob ชนะในตำแหน่งนั้น ๆ Bob จะได้ 1 คะแนน
* ถ้าคะแนนเท่ากันจะไม่มีใครได้คะแนน

**ตัวอย่าง**:

`Alice = [1, 2, 3]; Bob = [7, 1, 3];`

จากตัวอย่าง Alice ได้ 1 คะแนน และ Bob ได้ 1 คะแนน ดังนั้นผลลัพธ์จะเป็น [1, 1]

**หลักการคิด**:

1. เปรียบเทียบแต่ละ index ของ Alice และ Bob
2. ให้คะแนนตามเงื่อนไขที่กำหนด
3. Return ผลรวมของคะแนนทั้งสองฝั่ง

# โจทย์ข้อที่ 4: หาผลรวมของค่ามากที่สุดและน้อยที่สุดใน array

ในโจทย์นี้ เราจะต้องหาค่ามากที่สุด (max) และค่าน้อยที่สุด (min) จาก array ที่ได้รับ จากนั้นให้นำค่าทั้งสองมาบวกกันแล้ว return ผลลัพธ์ออกมา

**ตัวอย่าง**:

`array = [3, 4, 5, 1, 2];`

ค่า max คือ 5 และค่า min คือ 1 ดังนั้นผลลัพธ์ของโจทย์นี้จะเท่ากับ 6

**หลักการคิด**:

1. หาค่าที่มากที่สุดและน้อยที่สุดใน array
2. นำค่ามากที่สุดและน้อยที่สุดมาบวกกัน
3. Return ผลลัพธ์ของการบวก

# โจทย์ข้อที่ 5: การหมุน (rotation) สมาชิกใน array

โจทย์นี้จะให้ทำการ “หมุน” สมาชิกใน array โดยย้ายสมาชิกตัวสุดท้ายไปไว้ตำแหน่งแรก และทำซ้ำตามจำนวนครั้งที่กำหนด

**ตัวอย่าง**:

`array = [1, 2, 3, 4, 5];`

หลังจากหมุนไป 3 ครั้ง ผลลัพธ์สุดท้ายจะเป็น:

`[3, 4, 5, 1, 2]`

**หลักการคิด**:

1. ย้ายสมาชิกตัวสุดท้ายไปไว้ที่ตำแหน่งแรกของ array
2. ทำซ้ำตามจำนวนครั้งที่ต้องการหมุน
3. Return array ที่ถูกหมุนเสร็จแล้ว


จบไปแล้วกับการอธิบายโจทย์ backend ที่น่าสนใจ หวังว่าทุกท่านจะได้ประโยชน์จากการอธิบายนี้ และสามารถนำไปใช้ประโยชน์ได้ครับ!