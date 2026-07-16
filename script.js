// --- คำถามจำลอง 20 ข้อ ---
const questionsData = [
    { q: "ChatGPT พัฒนาโดยบริษัทใด?", a: ["OpenAI", "Google", "Microsoft", "Meta"], correct: 0, audio: "q1.mp3" },
    { q: "GitHub Copilot ใช้เทคโนโลยี AI ตัวใดเป็นพื้นฐานในระยะแรก?", a: ["GPT-3", "Codex", "BERT", "Claude"], correct: 1, audio: "q2.mp3" },
    { q: "NotebookLM เป็นบริการจากค่ายใด?", a: ["Google", "Apple", "Amazon", "OpenAI"], correct: 0, audio: "q3.mp3" },
    { q: "ElevenLabs มีความโดดเด่นในด้านใด?", a: ["สร้างภาพ AI", "วิเคราะห์ข้อมูล", "Speech Synthesis (เสียงสังเคราะห์)", "เขียนโค้ด"], correct: 2, audio: "q4.mp3" },
    { q: "Machine Learning คือส่วนหนึ่งของ AI ใช่หรือไม่?", a: ["ใช่", "ไม่ใช่", "เป็นคนละเรื่องกัน", "เฉพาะในหุ่นยนต์"], correct: 0, audio: "q5.mp3" },
    { q: "Deep Learning เลียนแบบการทำงานของอะไร?", a: ["หัวใจมนุษย์", "ระบบประสาทและสมอง", "ระบบกล้ามเนื้อ", "การไหลเวียนเลือด"], correct: 1, audio: "q6.mp3" },
    { q: "LLM ย่อมาจากอะไร?", a: ["Large Logic Machine", "Long Language Model", "Large Language Model", "Light Learning Method"], correct: 2, audio: "q7.mp3" },
    { q: "Generative AI คืออะไร?", a: ["AI ที่ใช้ทำนายยอดขาย", "AI ที่สร้างเนื้อหาใหม่ได้", "AI ที่ใช้สั่งการหุ่นยนต์", "AI ที่ใช้คำนวณเลข"], correct: 1, audio: "q8.mp3" },
    { q: "การเขียนคำสั่งให้ AI ทำงานตามที่ต้องการเรียกว่าอะไร?", a: ["Prompt Engineering", "Software Engineering", "AI Designing", "Coding"], correct: 0, audio: "q9.mp3" },
    { q: "Computer Vision คือเทคโนโลยีที่เกี่ยวกับอะไร?", a: ["การฟังเสียง", "การวิเคราะห์ภาพและวิดีโอ", "การอ่านข้อความ", "การเดินของหุ่นยนต์"], correct: 1, audio: "q10.mp3" },
    { q: "NLP เกี่ยวข้องกับอะไรมากที่สุด?", a: ["ภาพเคลื่อนไหว", "ภาษาธรรมชาติของมนุษย์", "การทำนายราคาหุ้น", "ความปลอดภัยทางไซเบอร์"], correct: 1, audio: "q11.mp3" },
    { q: "AI Ethics เน้นเรื่องใด?", a: ["ความเร็วของ AI", "ความฉลาดสูงสุด", "จริยธรรมและความยุติธรรมของ AI", "ราคาของ AI"], correct: 2, audio: "q12.mp3" },
    { q: "เทคโนโลยีเบื้องหลังการระบุตัวตนด้วยใบหน้าคือ?", a: ["Face Recognition", "Audio Analysis", "Data Mining", "Text-to-Speech"], correct: 0, audio: "q13.mp3" },
    { q: "ข้อใดคือตัวอย่างของ Generative AI ด้านรูปภาพ?", a: ["Midjourney", "Excel", "Spotify", "Google Maps"], correct: 0, audio: "q14.mp3" },
    { q: "Neural Network ประกอบด้วยส่วนที่เรียกว่าอะไร?", a: ["Cells", "Layers", "Blocks", "Bricks"], correct: 1, audio: "q15.mp3" },
    { q: "Claude คือคู่แข่งของ ChatGPT พัฒนาโดยใคร?", a: ["Anthropic", "IBM", "Tesla", "Twitter"], correct: 0, audio: "q16.mp3" },
    { q: "การสอน AI โดยมีเฉลยให้เรียกว่าอะไร?", a: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Manual Learning"], correct: 0, audio: "q17.mp3" },
    { q: "GPU มีความสำคัญอย่างไรต่อ AI?", a: ["ช่วยประมวลผลการเรียนรู้ให้เร็วขึ้น", "ช่วยเก็บข้อมูล", "ช่วยให้ AI พูดได้", "ช่วยเชื่อมต่ออินเทอร์เน็ต"], correct: 0, audio: "q18.mp3" },
    { q: "Turing Test ใช้ทดสอบอะไร?", a: ["ความเร็วอินเทอร์เน็ต", "ความสามารถในการคิดเหมือนมนุษย์ของเครื่องจักร", "ความจุของฮาร์ดดิสก์", "ความปลอดภัยของรหัสผ่าน"], correct: 1, audio: "q19.mp3" },
    { q: "Stable Diffusion คือ AI สำหรับทำอะไร?", a: ["แต่งเพลง", "สร้างภาพจากข้อความ", "ตัดต่อวิดีโอ", "แปลภาษา"], correct: 1, audio: "q20.mp3" }
];

// --- ตัวแปรควบคุมเกม ---
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let userAnswers = [];
let fastAnswersCount = 0;

// --- Elements ---
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const reviewScreen = document.getElementById('review-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score-display');
const progressBar = document.getElementById('progress-bar-fill');
const questionNumber = document.getElementById('question-number');

// --- Audio API ---
const sounds = {
    welcome: new Audio('audio/welcome.mp3'),
    correct: new Audio('audio/correct.mp3'),
    wrong: new Audio('audio/wrong.mp3'),
    finish: new Audio('audio/finish.mp3')
};

function playSound(key){
    try{
        // stop any TTS to avoid overlap
        stopCurrentTTS();
        const s = sounds[key];
        if(!s) return;
        try{ s.currentTime = 0; }catch(e){}
        const p = s.play();
        if(p && p.catch) p.catch(()=>{});
    }catch(e){}
}

function stopAllAudio(){
    // stop TTS
    stopCurrentTTS();
    // stop SFX
    try{
        Object.values(sounds).forEach(s=>{ try{ s.pause(); s.currentTime = 0; }catch(e){} });
    }catch(e){}
}

// --- ฟังก์ชันเริ่มต้นเกม ---
function startGame() {
    playSound('welcome');
    score = 0;
    currentIndex = 0;
    userAnswers = [];
    fastAnswersCount = 0;
    
    // สุ่มคำถาม 10 ข้อ (แนบ id เดิมเพื่อแมปกับไฟล์เสียง q1..q20)
    currentQuestions = [...questionsData].map((q, i) => ({...q, id: i+1})).sort(() => 0.5 - Math.random()).slice(0, 10);
    
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 15;
    timerDisplay.innerText = timeLeft;
    
    const current = currentQuestions[currentIndex];
    questionText.innerText = current.q;
    questionNumber.innerText = `Question ${currentIndex + 1} / 10`;
    progressBar.style.width = `${((currentIndex + 1) / 10) * 100}%`;

    // สุ่มลำดับตัวเลือก
    const options = current.a.map((text, index) => ({ text, index }));
    options.sort(() => 0.5 - Math.random());

    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn', 'fade-in');
        btn.innerText = option.text;
        btn.onclick = () => checkAnswer(option.index, current.correct);
        optionsContainer.appendChild(btn);
    });

    startTimer();
    // อ่านคำถามด้วย TTS หรือไฟล์เสียงถ้ามี
    playQuestionAudio(current);
}

// --- TTS / Question audio handling ---
let _currentTtsAudio = null;
let _currentUtterance = null;
let _currentTtsId = 0;
function fadeVolume(el, from, to, duration=300){
    return new Promise(resolve=>{
        if(!el) return resolve();
        const step = 40; const steps = Math.max(1, Math.round(duration/step));
        const delta = (to - from)/steps; let i=0; let cur = from; el.volume = cur;
        const iv = setInterval(()=>{ i++; cur += delta; el.volume = Math.max(0, Math.min(1, cur)); if(i>=steps){ clearInterval(iv); el.volume = to; resolve(); } }, step);
    });
}

function stopCurrentTTS(){
    _currentTtsId += 1;
    if(_currentTtsAudio){ try{ _currentTtsAudio.pause(); _currentTtsAudio.currentTime = 0; }catch(e){} _currentTtsAudio = null; }
    if(_currentUtterance){ try{ speechSynthesis.cancel(); }catch(e){} _currentUtterance = null; }
}

function playQuestionAudio(qObj){
    // ensure no SFX or previous TTS overlap
    stopAllAudio();
    const bg = document.getElementById('bg-audio');
    const audioPath = qObj.audio ? `audio/tts/${qObj.audio}` : `audio/tts/q${qObj.id}.mp3`;
    const audio = new Audio(audioPath);
    const ttsId = ++_currentTtsId;
    let played = false;

    audio.addEventListener('canplaythrough', async ()=>{
        if(ttsId !== _currentTtsId) return;
        played = true;
        _currentTtsAudio = audio;
        if(bg){ await fadeVolume(bg, bg.volume, Math.max(0.05, bg.volume*0.25), 200); }
        audio.play().catch(()=>{});
    });

    audio.addEventListener('ended', async ()=>{
        if(ttsId !== _currentTtsId) return;
        if(bg){ await fadeVolume(bg, bg.volume, parseFloat(localStorage.getItem('bgAudioVolume') || 0.6), 300); }
        if(_currentTtsAudio === audio) _currentTtsAudio = null;
    });

    audio.addEventListener('error', ()=>{
        if(ttsId !== _currentTtsId || played) return;
        const utter = new SpeechSynthesisUtterance(qObj.q);
        utter.lang = 'th-TH';
        const voices = speechSynthesis.getVoices();
        const thai = voices.find(v=>/th|thai/i.test(v.lang) || /thai/i.test(v.name));
        if(thai) utter.voice = thai;
        _currentUtterance = utter;
        if(bg) fadeVolume(bg, bg.volume, Math.max(0.05, bg.volume*0.25), 200);
        speechSynthesis.speak(utter);
        utter.onend = ()=>{ if(ttsId !== _currentTtsId) return; if(bg) fadeVolume(bg, bg.volume, parseFloat(localStorage.getItem('bgAudioVolume') || 0.6), 300); if(_currentUtterance === utter) _currentUtterance = null; };
    });

    audio.load();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(-1, currentQuestions[currentIndex].correct); // หมดเวลา
        }
    }, 1000);
}

function checkAnswer(selectedIndex, correctIndex) {
    clearInterval(timer);
    // หยุดเสียงทั้งหมดก่อนเล่น SFX เพื่อตัดการซ้อน
    stopAllAudio();
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    
    // บันทึกคำตอบ
    userAnswers.push({
        question: currentQuestions[currentIndex].q,
        selected: selectedIndex === -1 ? "หมดเวลา" : currentQuestions[currentIndex].a[selectedIndex],
        correct: currentQuestions[currentIndex].a[correctIndex],
        isCorrect: selectedIndex === correctIndex
    });

    if (selectedIndex === correctIndex) {
        score += 10;
        playSound('correct');
        if (timeLeft >= 10) fastAnswersCount++; // ตอบใน 5 วินาที (15-5=10)
    } else {
        playSound('wrong');
    }

    // แสดงเฉลยทันที (Highlight)
    buttons.forEach(btn => {
        btn.disabled = true;
        // ค้นหาข้อความที่เป็นคำตอบที่ถูก
        if (currentQuestions[currentIndex].a[correctIndex] === btn.innerText) {
            btn.classList.add('correct');
        } else if (selectedIndex !== -1 && btn.innerText === currentQuestions[currentIndex].a[selectedIndex]) {
            btn.classList.add('wrong');
        }
    });

    scoreDisplay.innerText = `Score: ${score}`;

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < 10) {
            loadQuestion();
        } else {
            endGame();
        }
    }, 1500);
}

function endGame() {
    stopCurrentTTS();
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    playSound('finish');

    const correctCount = score / 10;
    const wrongCount = 10 - correctCount;
    const percentage = (score / 100) * 100;

    document.getElementById('final-score').innerText = score;
    document.getElementById('correct-count').innerText = correctCount;
    document.getElementById('wrong-count').innerText = wrongCount;
    document.getElementById('percentage').innerText = percentage + "%";

    // จัดอันดับ
    let rank = "";
    let desc = "";
    if (score <= 30) { rank = "Beginner"; desc = "เริ่มต้นเรียนรู้ AI ต่อไปนะ!"; }
    else if (score <= 60) { rank = "AI Explorer"; desc = "คุณเริ่มเข้าใจโลก AI แล้ว!"; }
    else if (score <= 80) { rank = "AI Enthusiast"; desc = "เก่งมาก! คุณมีความรู้ด้าน AI ที่ดีเลย"; }
    else { rank = "AI Expert"; desc = "สุดยอด! คุณคือผู้เชี่ยวชาญ AI"; }

    document.getElementById('rank-name').innerText = rank;
    document.getElementById('rank-description').innerText = desc;

    // Achievements
    const achDiv = document.getElementById('achievements');
    achDiv.innerHTML = '';
    if (score === 100) achDiv.innerHTML += '<span class="badge">🏆 Perfect Score</span>';
    if (fastAnswersCount >= 5) achDiv.innerHTML += '<span class="badge">⚡ Fast Thinker</span>';
    if (score >= 90) achDiv.innerHTML += '<span class="badge">🧠 AI Master</span>';

    // QR Code Image
    const qrDiv = document.getElementById('qr-code');
    qrDiv.innerHTML = '<img src="assets/My-QR.png" alt="QR Code">';
}

function showReview() {
    resultScreen.classList.remove('active');
    reviewScreen.classList.add('active');
    const list = document.getElementById('review-list');
    list.innerHTML = '';

    userAnswers.forEach((ans, i) => {
        const item = document.createElement('div');
        item.classList.add('review-item');
        item.innerHTML = `
            <p><strong>${i+1}. ${ans.question}</strong></p>
            <p style="color: ${ans.isCorrect ? '#10b981' : '#ef4444'}">คำตอบของคุณ: ${ans.selected}</p>
            <p style="color: #10b981">คำตอบที่ถูก: ${ans.correct}</p>
        `;
        list.appendChild(item);
    });
}

// --- Event Listeners ---
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('restart-btn').addEventListener('click', startGame);
document.getElementById('review-btn').addEventListener('click', showReview);
document.getElementById('back-to-result').addEventListener('click', () => {
    reviewScreen.classList.remove('active');
    resultScreen.classList.add('active');
});

// Modal Logic
const modal = document.getElementById('how-to-modal');
document.getElementById('how-to-btn').onclick = () => modal.style.display = 'flex';
document.getElementById('close-modal').onclick = () => modal.style.display = 'none';
window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; };
