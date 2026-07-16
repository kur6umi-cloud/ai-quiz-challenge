// generate-tts.js
// Usage: set ELEVEN_API_KEY and VOICE_ID environment variables, then:
//   node generate-tts.js

const fs = require('fs');
const path = require('path');

const API_KEY = process.env.ELEVEN_API_KEY;
const VOICE_ID = process.env.VOICE_ID; // e.g. '21m00Tcm4TlvDq8ikWAM'

if(!API_KEY || !VOICE_ID){
    console.error('Please set ELEVEN_API_KEY and VOICE_ID environment variables.');
    process.exit(1);
}

const scripts = [
    'ChatGPT พัฒนาโดยบริษัทใด?',
    'GitHub Copilot ใช้เทคโนโลยี AI ตัวใดเป็นพื้นฐานในระยะแรก?',
    'NotebookLM เป็นบริการจากค่ายใด?',
    'ElevenLabs มีความโดดเด่นในด้านใด?',
    'Machine Learning คือส่วนหนึ่งของ AI ใช่หรือไม่?',
    'Deep Learning เลียนแบบการทำงานของอะไร?',
    'LLM ย่อมาจากอะไร?',
    'Generative AI คืออะไร?',
    'การเขียนคำสั่งให้ AI ทำงานตามที่ต้องการเรียกว่าอะไร?',
    'Computer Vision คือเทคโนโลยีที่เกี่ยวกับอะไร?',
    'NLP เกี่ยวข้องกับอะไรมากที่สุด?',
    'AI Ethics เน้นเรื่องใด?',
    'เทคโนโลยีเบื้องหลังการระบุตัวตนด้วยใบหน้าคือ?',
    'ข้อใดคือตัวอย่างของ Generative AI ด้านรูปภาพ?',
    'Neural Network ประกอบด้วยส่วนที่เรียกว่าอะไร?',
    'Claude คือคู่แข่งของ ChatGPT พัฒนาโดยใคร?',
    'การสอน AI โดยมีเฉลยให้เรียกว่าอะไร?',
    'GPU มีความสำคัญอย่างไรต่อ AI?',
    'Turing Test ใช้ทดสอบอะไร?',
    'Stable Diffusion คือ AI สำหรับทำอะไร?'
];

async function main(){
    const outDir = path.join(__dirname, 'assets', 'tts');
    fs.mkdirSync(outDir, { recursive: true });

    for(let i=0;i<scripts.length;i++){
        const idx = i+1;
        const text = scripts[i];
        const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;
        console.log(`Generating q${idx}.mp3 ...`);

        try{
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'xi-api-key': API_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            });

            if(!res.ok){
                console.error('Failed:', res.status, await res.text());
                continue;
            }

            const arrayBuffer = await res.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const outPath = path.join(outDir, `q${idx}.mp3`);
            fs.writeFileSync(outPath, buffer);
            console.log('Saved', outPath);
            // be polite to API
            await new Promise(r => setTimeout(r, 600));
        }catch(err){
            console.error('Error generating', idx, err.message || err);
        }
    }
    console.log('Done');
}

main();
