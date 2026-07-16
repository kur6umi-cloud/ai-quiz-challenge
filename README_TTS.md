TTS (ElevenLabs) — คู่มือสั้น

ไฟล์สคริปต์ `generate-tts.js` ในโปรเจกต์นี้ช่วยเรียก ElevenLabs Text-to-Speech เพื่อสร้างไฟล์ `q1.mp3`..`q20.mp3` แล้วบันทึกไปที่ `audio/tts/`.

การใช้งาน:

1. สร้างโฟลเดอร์ `audio/tts/` (ถ้ายังไม่มี)
2. ลงทะเบียนและรับ API Key จาก ElevenLabs
3. เลือก `VOICE_ID` จาก ElevenLabs (ตัวอย่าง voice id จะอยู่ใน Dashboard)
4. รันคำสั่ง (bash):

```bash
export ELEVEN_API_KEY="your_api_key_here"
export VOICE_ID="your_voice_id_here"
node generate-tts.js
```

หลังรันสำเร็จ คุณจะได้ไฟล์ `audio/tts/q1.mp3` .. `audio/tts/q20.mp3` ซึ่งโค้ดใน `script.js` จะโหลดไฟล์เหล่านี้โดยอัตโนมัติเมื่อแสดงคำถาม

หมายเหตุ:
- สคริปต์จะ fallback เป็น Web Speech API (browser TTS) หากไฟล์เสียงไม่พบ
- ระวังค่าใช้จ่ายและข้อจำกัดการใช้งานของ ElevenLabs API
