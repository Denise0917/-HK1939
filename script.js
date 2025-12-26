// ==================== 1. 游戏数据 (Database) ====================

// --- 核心系统文件 (Intro 和 Help) ---
// 这些是系统运行必须的基础界面，保留在这里
const systemData = {
    "Intro": `
        <div class="newspaper-container">
            <div class="newspaper-header">
                <div class="newspaper-title">《香江日报》</div>
                <div class="newspaper-eng-title">THE HONG KONG DAILY NEWS</div>
                <div class="newspaper-date">中华民国二十八年八月十三日 （星期日）</div>
            </div>

            <div class="headline-main">【号外！特大凶案】兵头洲惊现灭门惨案！十人赴宴无一生还！</div>
            <div class="headline-sub">豪宅变修罗场 皇家警队束手无策 全港震动</div>

            <div class="news-section">
                <span class="news-bold">【本报专讯】</span>
                就在日寇铁蹄于深圳河对岸徘徊、战争阴云笼罩香江之际，一起发生在西贡外海的离奇案件昨日震惊了整个殖民地高层。
            </div>
            <div class="news-section">
                据警方可靠消息，西贡水警轮于昨日风暴停息后，强行登上被坊间传为神秘富豪拥有的<span class="news-bold">“兵头洲”</span>（Soldier Head Island）。迎接警方的并非奢华的避暑派对，而是一幅令人毛骨悚然的地狱图景。
            </div>

            <hr style="border-color: #444; margin: 15px 0;">

            <div class="news-bold">豪宅内发现十具尸体</div>
            <div class="news-section">
                警方在岛上那座白色洋楼内及周边悬崖，共发现十具尸体。死者身份极其显赫与复杂，竟包括刚退休的最高法院大法官沃格雷夫爵士、前军阀名将马国豪、中环名医安世昌等社会名流。
            </div>

            <div class="news-bold">离奇的“密室”杀人</div>
            <div class="news-section">
                据当值探长透露，现场惨不忍睹。十名死者死状各异，有的中毒，有的中枪，有的被重物击碎头骨。最令人不寒而栗的是，经法医初步勘验，所有人的死亡时间均在救援到达之前。
            </div>
            
            <hr style="border-color: #444; margin: 15px 0;">

            <div class="news-bold">【警方发布的案件核心疑点】</div>
            <ul style="padding-left: 20px; margin-top: 5px;">
                <li><span class="news-bold">神秘的东家：</span> 所有人均受一名自称 “欧文先生” 的人士邀请登岛。但这名欧文先生从未露面，甚至查无此人。</li>
                <li><span class="news-bold">消失的凶手：</span> 既然岛上没有外人，那么凶手必然在死者之中。究竟是谁杀死了其他人，最后又是谁杀死了凶手？</li>
                <li><span class="news-bold">死亡童谣：</span> 案发现场的每个房间都挂着一首关于<span class="news-bold">《十个小戏俑》</span>的广东童谣。十个人的死亡方式，竟然与童谣中的描述一一对应！</li>
            </ul>

            <br>
            <div class="headline-main" style="font-size: 1.2em; border-top: 1px dashed #666; padding-top: 10px;">【读者挑战：寻找真相】</div>
            <div class="news-section">
                尊敬的读者，您手中的这份档案，不仅是旧报纸的残片，更是通往那个死亡之岛的门票。当您翻开下一页，时间将倒流回惨案发生的五天前。
            </div>
            <div class="news-bold" style="text-align:center; margin-top: 10px;">到底发生了什么？</div>
        </div>

        <div class="start-game-btn" onclick="startBootSequence()">
            &gt; 点击此处 接入 R.C.P.D 绝密档案系统 &lt;
        </div>
    `,

    "help": `
        <p><strong>R.C.P.D 终端操作手册 v3.1</strong></p>
        <p>欢迎, 调查员。</p>
        <hr style="border-color: #444; margin: 10px 0;">
        
        <p><span class="type-inbox" onclick="processCommand('inbox')" style="cursor:pointer; text-decoration:underline;">[Inbox]</span> 内部通讯文件</p>
        
        <p><span class="recent" onclick="processCommand('list')" style="cursor:pointer; text-decoration:underline;">[List]</span> 现场录音档案</p>
        
        <p><span class="type-police" onclick="processCommand('police')" style="cursor:pointer; text-decoration:underline;">[Police]</span> 死者档案</p>
        
        <p><span class="type-evidence" onclick="processCommand('evidence')" style="cursor:pointer; text-decoration:underline;">[Evidence]</span> 现场证物</p>
        
        <br>
        <p>输入 <strong>list</strong> / <strong>inbox</strong> / <strong>police</strong> / <strong>evidence</strong> 查看对应模块。</p>
        <p>输入 <strong>文件名</strong> 直接调阅。</p>
        <p>输入 <strong>name [代号] [名字]</strong> 标记嫌疑人。</p>
        <p>输入 <strong>reset </strong> 重新进入系统。</p>
    `
};

// --- 数据合并 (关键步骤) ---
// 这里会自动抓取那4个js文件里的内容
// 确保 index.html 里已经引入了 data_audio.js 等文件，否则这里会报错
const storyData = {
    ...systemData,   // 包含 Intro 和 Help
    ...db_audio,     // 包含 List 录音文件
    ...db_inbox,     // 包含 Inbox 通讯文件
    ...db_police,    // 包含 Police 档案文件
    ...db_evidence   // 包含 Evidence 证物文件
};

// ==================== 2. 游戏状态 (State) ====================
const defaultState = {
    // 列表缓存
    list_cache: ["00-readme", "01-Living-1-2-3-4-5-6-7-8-9", "01-Corridor-1-2-3-4-5-6-7-8-9"], 
    inbox_cache: ["MSG-CASE-BRIEFING","MSG-001","MSG-002","MSG-003","MSG-004"],
    police_cache: ["DOC-WITNESS-STATEMENT","DOC-BOATMAN-TESTIMONY","DOC-AUTOPSY-SUMMARY","DOC-DRIVER-TESTIMONY"],
    evidence_cache: [],

    // 进度与设置
    readHistory: [], 
    people: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    nicknames: {},
    
    currentView: "intro", 
    currentListType: "list", 
    currentKey: "Intro"
};

// ==================== 线索关系配置 (Clue Map) ====================
// 格式： "源文件名": ["暗示的目标文件1", "暗示的目标文件2", ...]
const audioClues = {
    // 示例：00-readme 提到了 01-Wei-2-6 等一堆文件
    "00-readme": [
        "01-Living-1-2-3-4-5-6-7-8-9"
    ],
    
    // 示例：假设录音A里提到了录音B
    "01-Living-1-2-3-4-5-6-7-8-9": [
        "01-Corridor-1-2-3-4-5-6-7-8-9",
        "01-Dining-1-3-4-5-6-7-8-9-10",
    ], 
    //推测大家所有人的房间
    "01-Corridor-1-2-3-4-5-6-7-8-9":[
        "01-Wei-2-6", 
        "01-Tang-9", 
        "01-Dai-3", 
        "01-Bai-2-4",
        "01-Ma-8", 
        "01-Wargrave-5",
        "01-Lu-7",
        
    ],
    "01-Dai-3":[
        "02-Corridor-1-3-7"
    ],
    "01-Lu-7":[
        "02-Corridor-1-3-7"
    ],
    "02-Corridor-1-3-7":[
        "02-Living-1-3-7"
    ],
    // 你可以在这里继续添加...
    "01-Wargrave-5":[
        "01-Terrace-1-5-10",
    ],
    "01-Terrace-1-5-10":[
        "03-Living-1-10"
    ],
    "03-Living-1-10":[
        "01-An-1-10",
        "01-Dining-1-3-4-5-6-7-8-9-10"
    ],
    "01-Dining-1-3-4-5-6-7-8-9-10":[
        "02-Terrace-2-4-6",
        "02-Dining-1-3-5-7-8-9-10"
    ],
    "02-Terrace-2-4-6":[
        "04-Living-1-2-3-4-5-6-7-8-9-10",
        "01-Kitchen-1-2"
    ],
    "01-Kitchen-1-2":[
        "02-Kitchen-1-2"
    ],
    "02-Kitchen-1-2":[
        "03-Kitchen-1-2"
    ],
    "02-Dining-1-3-5-7-8-9-10":[
        "04-Living-1-2-3-4-5-6-7-8-9-10"
    ],
    "04-Living-1-2-3-4-5-6-7-8-9-10":[
        "01-Mahjong-1-3-4-5-6-7-8-9-10"
    ],
    "01-Mahjong-1-3-4-5-6-7-8-9-10":[
        "05-Living-1-2-3-4-5-6-7-8-9-10"
    ],
    "05-Living-1-2-3-4-5-6-7-8-9-10":[
        "01-Servant-1-2-10",
        "06-Living-1-3-4-5-6-7-8-9-10"
    ],
    "01-Servant-1-2-10":[
        "06-Living-1-3-4-5-6-7-8-9-10"
    ],
    "06-Living-1-3-4-5-6-7-8-9-10":[
        "02-Tang-3-7-10"
    ],
    "02-Tang-3-7-10":[
        "07-Living-1-3-4-5-6-7-8-10"
    ],
    "07-Living-1-3-4-5-6-7-8-10":[
        "03-Corridor-3-4-5-6-7-8-10",
        "03-Dining-1"
    ],
    "02-Servant-2-Mystery":[
        "03-Servant-1"
    ],
    "03-Servant-1":[
        "02-An-1-10"
    ],
    "02-An-1-10":[
        "04-Servant-1-10"
    ],
    "04-Servant-1-10":[
        "04-Kitchen-1",
        "04-Corridor-6-10"
    ],
    "04-Corridor-6-10":[
        "04-Dining-6-10"
    ],
    "02-Wei-6":[
        "04-Corridor-6-10"
    ],
    "02-Bao-3":[
        "03-Tang-3-7"
    ],
    "02-Bao-3":[
        "03-Tang-3-7"
    ],
    "02-Lu-7":[
        "03-Tang-3-7"
    ],
    "03-Tang-3-7":[
        "08-Living-7-8"
    ],
    "04-Kitchen-1":[
        "05-Dining-1-3-4-5-6-7-8-10"
    ],
    "05-dining-1-3-4-5-6-7-8-10":[
        "03-An-3-5-6-7-8-10",
        "02-Wargrave-3-5-6-7-8-10"
    ],
    "03-An-3-5-6-7-8-10":[
        "02-Wargrave-3-5-6-7-8-10"
    ],
    "02-Wargrave-3-5-6-7-8-10":[
        "03-Wei-3-6-7-8-10"
    ],
    "03-Wei-3-6-7-8-10":[
        "04-Wei-6-7"
    ],
    "04-An-10":[
        "05-Corridor-3-7-10"
    ],
    "05-Corridor-3-7-10":[
        "06-Dining-1-3-7",
        "04-Tang-1-3-7-10"
    ],
    "04-Tang-1-3-7-10":[
        "06-Corridor-3-7-10",
        "01-Store-1" 
    ],
    "05-Terrace-4":[
        "06-Terrace-1-3-4-5-6-7-10"
    ],
     "06-Terrace-1-3-4-5-6-7-10":[
        "09-Living-1-3-4-5-6-7-10"
    ],
     "09-Living-1-3-4-5-6-7-10":[
        "07-Dining-5-6",
        "03-Ma-1-3-7-10"  
    ],
     "03-Ma-1-3-7-10":[
        "05-Kitchen-1" 
    ],
     "05-Kitchen-1":[
        "08-Dining-1-3-4-5-6-7-10" 
    ],
     "08-Dining-1-3-4-5-6-7-10":[
        "10-Living-1-3-4-5-6-7-10" 
    ],
    "10-Living-1-3-4-5-6-7-10":[
        "03-Wargrave-3-5",
        "06-Kitchen-1-7",
        "11-Living-3-5-10",
        "09-Dining-4-6"
    ],
    "09-Dining-4-6":[
        "10-Dining-1-3-4-5-6-7-10"
    ],
    "10-Dining-1-3-4-5-6-7-10":[
        "07-Corridor-3-4-5-6-7-10",
        "11-Dining-1"
    ],
    "11-Dining-1":[
        "02-Store-1"
    ],
    "07-Corridor-3-4-5-6-7-10":[
        "02-Bai-4"
    ],
    "03-Lu-7":[
        "01-Woodshed-1"
    ],
    "05-An-10":[
        "08-Corridor-3-5-6-7-10"
    ],
    "05-Wei-6":[
        "08-Corridor-3-5-6-7-10"
    ],
    "03-Bao-3-7":[
        "08-Corridor-3-5-6-7-10"
    ],
    "04-Wargrave-5-7":[
        "08-Corridor-3-5-6-7-10"
    ],
    "12-Living-3-4-5-6-7-10":[
        "12-Dining-3-4-5-6-7-10"
    ],
    "12-Dining-3-4-5-6-7-10":[
        "02-Woodshed-3-4-5-6-7-10"
    ],
    "02-Woodshed-3-4-5-6-7-10":[
        "03-Store-3-7",
        "07-Kitchen-4-6"
    ],
     "07-Kitchen-4-6":[
        "14-Dining-3-4-5-6-7-10"
    ],
    "14-Dining-3-4-5-6-7-10":[
        "13-Living-5-10",
        "08-Kitchen-3-5-6-7"
    ],
    "08-Kitchen-3-5-6-7":[
        "01-Basement-3-7"
    ],
    "13-Living-5-10":[
        "04-Store-7-10"
    ],
    "01-Basement-3-7":[
        "04-Store-7-10"
    ],
    "04-Store-7-10":[
        "15-Dining-3-5-6-7-10"
    ],
    "15-Dining-3-5-6-7-10":[
        "03-Bai-3-6-7"
    ],
    "03-Bai-3-6-7":[
        "04-Bao-3",
        "04-Lu-7",
        "09-Corridor-3-5-6-7-10"
    ],
    "04-Bao-3":[
        "09-Corridor-3-5-6-7-10"
    ],
    "04-Lu-7":[
        "09-Corridor-3-5-6-7-10"
    ],
    "09-Corridor-3-5-6-7-10":[
        "06-Wei-3-5-6-7-10",
        "05-Bao-3-5-6-7-10",
        "05-Wargrave-3-5-6-7-10",
        "05-Lu-3-5-6-7-10",
        "06-An-3-5-6-7-10"
    ],
    "06-An-3-5-6-7-10":[
        "05-Lu-3-5-6-7-10"
    ],
    "05-Lu-3-5-6-7-10":[
        "05-Bao-3-5-6-7-10"
    ],
    "05-Bao-3-5-6-7-10":[
        "05-Wargrave-3-5-6-7-10"
    ],
    "05-Wargrave-3-5-6-7-10":[
        "06-Wei-3-5-6-7-10"
    ],
    "06-Wei-3-5-6-7-10":[
        "09-Kitchen-3-5-6-7-10"
    ],
    "09-Kitchen-3-5-6-7-10":[
        "17-Dining-3-5-6-7-10"
    ],
    "17-Dining-3-5-6-7-10":[
        "18-Dining-3-5-6-7-10"
    ],
    "18-Dining-3-5-6-7-10":[
        "19-Dining-3-6-7-10"
    ],
    "19-Dining-3-6-7-10":[
        "07-Wei-6",
        "20-Dining-3-7-10"
    ],
    "20-Dining-3-7-10":[
        "08-Wei-3-6-7-10"
    ],
    "08-Wei-3-6-7-10":[
        "14-Living-3-6-7-10"
    ],
    "14-Living-3-6-7-10":[
        "11-Corridor-3-6-7-10"
    ],
   
};


let state = JSON.parse(JSON.stringify(defaultState));

// ==================== 3. 核心引擎 (Engine) ====================

const inputEl = document.getElementById('command-input');
const outputEl = document.getElementById('output-area');
const headingEl = document.getElementById('heading-display');
const backBtn = document.getElementById('back-btn');
const headerDiv = document.getElementById('main-header');

// --- 初始化 ---
window.onload = () => {
    const savedData = localStorage.getItem('soldierIslandSaveData');

    if (savedData) {
        // [有存档]
        try {
            state = JSON.parse(savedData);
            
            if (state.currentView === "intro") {
                // 如果存档在 Intro，隐藏 Header 并显示报纸
                toggleHeader(false);
                renderPassage("Intro", false);
            } else {
                // 如果在游戏内，显示 Header 并恢复视图
                toggleHeader(true);
                inputEl.focus();
                restoreView();
            }
            console.log("档案已加载");
        } catch (e) {
            console.error("档案损坏", e);
            resetGame();
        }
    } else {
        // [无存档]：隐藏 Header，显示报纸
        toggleHeader(false);
        renderPassage("Intro");
    }
};

// --- 控制 Header 显示/隐藏 ---
function toggleHeader(show) {
    if (show) {
        headerDiv.classList.remove('hidden');
    } else {
        headerDiv.classList.add('hidden');
    }
}

// --- 恢复视图 ---
function restoreView() {
    if (state.currentView === "list_view") {
        renderCategoryList(state.currentListType, false);
    } else if (state.currentView === "file_view" && state.currentKey) {
        renderPassage(state.currentKey, false);
    } else {
        renderPassage("help", false);
    }
}

// --- 启动动画 (Loading Sequence) ---
function startBootSequence() {
    // 1. 清空屏幕
    outputEl.innerHTML = "";
    headingEl.innerHTML = "";
    
    // 2. 确保 Header 依然隐藏
    toggleHeader(false);

    // 3. 定义加载文本 (扩充版)
    // 技巧：部分行 delay 设置得短，模拟快速刷屏；关键行 delay 长，模拟处理耗时。
    const bootLines = [
        // --- 阶段一：硬件自检 ---
        { text: "R.C.P.D Secure Terminal v3.1 (Build 1939)", class: "boot-line", delay: 100 },
        { text: "Copyright (C) Royal Hong Kong Police Force. All Rights Reserved.", class: "boot-line", delay: 200 },
        { text: "BIOS Date 01/15/99 14:22:51 Ver: 08.00.12", class: "boot-line", delay: 300 },
        { text: "CPU: Intel Pentium II 450MHz", class: "boot-line", delay: 400 },
        { text: "Memory Test: 65536K OK", class: "boot-line", delay: 600 },
        { text: "Detecting Primary Master ... Maxtor 8.4GB HDD", class: "boot-line", delay: 700 },
        { text: "Detecting Primary Slave ... None", class: "boot-line", delay: 750 },
        
        // --- 阶段二：系统启动 ---
        { text: "Loading R.C.P.D Kernel...", class: "boot-line", delay: 1200 },
        { text: "Mounting file system /dev/hda1 [READ-ONLY]", class: "boot-line", delay: 1300 },
        { text: "Checking disk integrity...", class: "boot-line", delay: 2000 },
        { text: ">> Found 4 bad sectors in block 0x3F. Attempting recovery...", class: "boot-line msg-warning", delay: 3500 }, // 模拟卡顿
        { text: ">> Recovery successful. Data may be fragmented.", class: "boot-line boot-success", delay: 3600 },
        
        // --- 阶段三：网络连接 ---
        { text: "Initializing Network Adapter (10/100 Ethernet)...", class: "boot-line", delay: 3800 },
        { text: "Obtaining IP Address...", class: "boot-line", delay: 4500 },
        { text: "Connected to R.C.P.D Intranet (192.168.0.105).", class: "boot-line", delay: 4600 },
        { text: "Pinging Soldier Island Archive Server...", class: "boot-line", delay: 4800 },
        { text: "Reply from 10.4.22.8: bytes=32 time=128ms TTL=54", class: "boot-line", delay: 4900 },
        { text: "Establishing Secure Tunnel (SSL/TLS)...", class: "boot-line", delay: 5500 },
        { text: "Handshake completed. Link encrypted.", class: "boot-line boot-success", delay: 5700 },

        // --- 阶段四：权限验证 ---
        { text: "Requesting User Authorization...", class: "boot-line", delay: 6200 },
        { text: "Verifying Biometric Hash...", class: "boot-line", delay: 7000 },
        { text: "Admin Credentials Accepted.", class: "boot-line boot-success", delay: 7200 },
        { text: "Security Clearance: LEVEL 5 (TOP SECRET)", class: "boot-line msg-warning", delay: 7300 },
        { text: "Warning: Accessing Cold Case Files (1939). Logging enabled.", class: "boot-line", delay: 7400 },

        // --- 阶段五：数据加载 ---
        { text: "Fetching Case File: 'ECHOES' [HK-1939]...", class: "boot-line", delay: 7800 },
        { text: "Decompressing data streams...", class: "boot-line", delay: 8500 },
        
        { text: "Initializing Module: AUDIO RECOVERY...", class: "boot-line", delay: 8800 },
        { text: ">> 22 Audio Fragments Loaded.", class: "boot-line boot-success", delay: 8900 },
        
        { text: "Initializing Module: INBOX ARCHIVE...", class: "boot-line", delay: 9100 },
        { text: ">> Decrypting private correspondences...", class: "boot-line", delay: 9300 },
        { text: ">> Inbox Loaded [OK]", class: "boot-line boot-success", delay: 9400 },
        
        { text: "Initializing Module: POLICE RECORDS...", class: "boot-line", delay: 9600 },
        { text: ">> Retrieving autopsy reports...", class: "boot-line", delay: 9800 },
        { text: ">> Police Database Loaded [OK]", class: "boot-line boot-success", delay: 9900 },
        
        { text: "Initializing Module: EVIDENCE LOCKER...", class: "boot-line", delay: 10100 },
        { text: ">> Scanning physical evidence photos...", class: "boot-line", delay: 10300 },
        { text: ">> Evidence Loaded [OK]", class: "boot-line boot-success", delay: 10400 },

        // --- 阶段六：完成 ---
        { text: "System Integrity Check: 98%", class: "boot-line", delay: 10600 },
        { text: "Launching Interface Shell...", class: "boot-line", delay: 11000 },
        { text: "Welcome, Investigator.", class: "boot-line boot-success", delay: 11500 }
    ];

    let totalDelay = 0;
    bootLines.forEach(line => {
        const currentDelay = line.delay || (totalDelay + 200);
        totalDelay = currentDelay;

        setTimeout(() => {
            const p = document.createElement("p");
            p.className = line.class;
            p.innerText = line.text;
            outputEl.appendChild(p);
            window.scrollTo(0, document.body.scrollHeight);
        }, currentDelay);
    });

    // 4. 动画结束：进入 Help，显示 Header
    setTimeout(() => {
        renderPassage("help");
        state.currentView = "help";
        toggleHeader(true); // 显示输入框
        inputEl.focus();
        saveGame();
    }, totalDelay + 1000);
}

// --- 颜色配置 (莫兰迪/粉彩渐变) ---
function getColorByType(type) {
    switch(type) {
        case 'list': return '#ebbcba';     // 淡蔷薇 (Rose)
        case 'inbox': return '#f6c177';    // 淡琥珀 (Gold)
        case 'police': return '#9ccfd8';   // 淡泡沫 (Foam)
        case 'evidence': return '#c4a7e7'; // 淡薰衣草 (Iris)
        default: return '#eee';
    }
}

// --- 存档/重置 ---
function saveGame() {
    localStorage.setItem('soldierIslandSaveData', JSON.stringify(state));
}

function resetGame() {
    localStorage.removeItem('soldierIslandSaveData');
    state = JSON.parse(JSON.stringify(defaultState)); 
    location.reload(); 
}

// --- 事件监听 ---
inputEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const rawInput = this.value.trim();
        if (rawInput) processCommand(rawInput);
        this.value = ''; 
    }
});

backBtn.addEventListener('click', function() {
    if (state.currentView !== "intro") {
        if (state.currentView === "file_view") {
            renderCategoryList(state.currentListType);
        } else {
            processCommand("help");
        }
    }
    inputEl.focus();
});

// --- 指令处理 ---
// --- 指令处理 ---
function processCommand(input) {
    const args = input.trim().split(/\s+/);
    const command = args[0].toLowerCase();

    if (state.currentView === "intro") return;

    if (command === 'back') {
        backBtn.click();
    }
    else if (command === 'help') {
        renderPassage("help");
        state.currentView = "help";
        saveGame();
    }
    else if (command === 'list') { renderCategoryList('list'); }
    else if (command === 'inbox') { renderCategoryList('inbox'); }
    else if (command === 'police') { renderCategoryList('police'); }
    else if (command === 'evidence') { renderCategoryList('evidence'); }
    else if (command === 'reset') {
        if (confirm("重置将删除所有进度，确定吗？")) resetGame();
    }
    else if (command === 'name') {
        handleNameCommand(args);
    }
    else {
        // 1. 获取数据库中所有的文件名(Key)
        const allKeys = Object.keys(storyData);
        
        // 2. 查找匹配项（忽略大小写）
        const matchKey = allKeys.find(key => key.toLowerCase() === input.toLowerCase());

        // 3. 如果找到了匹配的文件
        if (matchKey) {
            let key = matchKey; // 使用数据库中正确的大小写文件名（例如 "03-Living-1"）
            
            if (!isFileKnown(key)) {
                addFileToCache(key);
            }
            identifyAndSetListType(key);

            renderPassage(key);
            state.currentView = "file_view";
            saveGame();
        }
        else {
            refreshCurrentViewWithMsg(`<p class="msg-error">系统错误: 指令 "${input}" 无效。</p>`);
        }
    }
}

// --- 辅助函数 ---
function identifyAndSetListType(key) {
    if (key.startsWith("MSG-")) state.currentListType = "inbox";
    else if (key.startsWith("DOC-") || key.startsWith("POLICE-")) state.currentListType = "police";
    else if (key.startsWith("EVI-")) state.currentListType = "evidence";
    else state.currentListType = "list"; 
}

function isFileKnown(key) {
    return state.list_cache.includes(key) || 
           state.inbox_cache.includes(key) || 
           state.police_cache.includes(key) || 
           state.evidence_cache.includes(key);
}

function addFileToCache(key) {
    if (key.startsWith("MSG-")) state.inbox_cache.push(key);
    else if (key.startsWith("DOC-") || key.startsWith("POLICE-")) state.police_cache.push(key);
    else if (key.startsWith("EVI-")) state.evidence_cache.push(key);
    else state.list_cache.push(key);
}

// --- 列表渲染 (带地点分组 & 线索计数版) ---
function renderCategoryList(type, animate = true) {
    state.currentView = "list_view";
    state.currentListType = type;
    state.currentKey = "List_Menu";
    headingEl.innerHTML = "";
    saveGame();

    let title = "";
    let dataArray = [];
    let cssClass = "";
    let themeColor = getColorByType(type);

    // 统计未读数
    let targetCache = [];
    if (type === 'list') targetCache = state.list_cache;
    else if (type === 'inbox') targetCache = state.inbox_cache;
    else if (type === 'police') targetCache = state.police_cache;
    else if (type === 'evidence') targetCache = state.evidence_cache;

    let unreadCount = 0;
    targetCache.forEach(f => { if(!state.readHistory.includes(f)) unreadCount++; });

    // 设置标题
    switch(type) {
        case 'list': title = "现场录音 (AUDIO)"; cssClass = "recent"; break;
        case 'inbox': title = "内部通讯 (INBOX)"; cssClass = "type-inbox"; break;
        case 'police': title = "死者档案 (POLICE)"; cssClass = "type-police"; break;
        case 'evidence': title = "现场证物 (EVIDENCE)"; cssClass = "type-evidence"; break;
    }

    let html = `
        <div class="list-container" style="border-color: ${themeColor}">
            <div class="list-header" style="color: ${themeColor}">
                ${title} <span style="float:right; font-size:0.8em; opacity: 0.7;">[未读: ${unreadCount}]</span>
            </div>
    `;

    // --- 录音列表逻辑 (带地点分组 + 线索计数) ---
    if (type === 'list') {
        if (targetCache.length === 0) {
            html += `<p class="hints">-- 暂无数据 --</p>`;
        } else {
            // 1. 地点映射
            const locationMap = {
                "OTHER": "【 未分类 / 说明 】",
                "Living": "【 一楼：客厅 】",
                "Dining": "【 一楼：餐厅 】",
                "Terrace": "【 一楼：露台 】",
                "Mahjong": "【 一楼：麻将房 】",
                "Kitchen": "【 一楼：厨房 】",
                "Store": "【 一楼：储物间 】",
                "Servant": "【 一楼：佣人房 】",
                "Corridor": "【 二楼：走廊 】",
                "Bao": "【 二楼：客房 】",
                "Dai": "【 二楼：客房 】",
                "Bai": "【 二楼：客房 】",
                "Wargrave": "【 二楼：客房 】",
                "Wei": "【 二楼：客房 】",
                "Lu": "【 二楼：客房 】",
                "Ma": "【 二楼：客房 】",
                "Tang": "【 二楼：客房 】",
                "An": "【 二楼：客房 】"
            };

            // 2. 分组
            const groups = {};
            Object.keys(locationMap).forEach(k => groups[k] = []);

            targetCache.sort().forEach(file => {
                const parts = file.split('-');
                let code = "OTHER";
                if (parts.length >= 2 && locationMap[parts[1]]) {
                    code = parts[1];
                } else if (file.includes("readme")) {
                    code = "OTHER";
                }
                groups[code].push(file);
            });

            // 3. 渲染
            Object.keys(locationMap).forEach(code => {
                if (groups[code].length > 0) {
                    // 分组标题
                    html += `<div style="font-size: 0.8em; color: ${themeColor}; opacity: 0.6; margin: 15px 0 5px 0px; border-bottom: 1px dashed ${themeColor}; padding-bottom: 2px;">${locationMap[code]}</div>`;
                    
                    // 文件列表
                    groups[code].forEach(file => {
                        let isRead = state.readHistory.includes(file);
                        let finalClass = isRead ? `${cssClass} read` : cssClass;
                        let readIcon = isRead ? "" : `<span style="color:${themeColor}; font-size: 0.8em;">● </span>`;
                        
                        // [新增核心逻辑]：计算剩余线索数量
                        let clueDisplay = "";
                        // 1. 获取该文件指向的所有目标文件
                        const targets = audioClues[file] || [];
                        // 2. 过滤出玩家 *尚未* 拥有的文件
                        const missingTargets = targets.filter(t => !state.list_cache.includes(t));
                        // 3. 如果有未发现的，生成 (N)
                        if (missingTargets.length > 0) {
                            clueDisplay = `<span style="color: #d65d0e; font-weight: bold; margin-right: 5px;">(${missingTargets.length})</span>`;
                        }

                        html += `<p class="${finalClass}" onclick="processCommand('${file}')" style="margin-left: 10px;">
                            ${clueDisplay}${readIcon}[ ${file} ]
                        </p>`;
                    });
                }
            });
        }
    } 
    // --- 其他类型列表逻辑保持原样 ---
    else {
        dataArray = targetCache;
        if (dataArray.length === 0) {
            html += `<p class="hints">-- 暂无数据 --</p>`;
        } else {
            dataArray.sort();
            dataArray.forEach(file => {
                let isRead = state.readHistory.includes(file);
                let finalClass = isRead ? `${cssClass} read` : cssClass;
                let readIcon = isRead ? "" : `<span style="color:${themeColor}; font-size: 0.8em;">● </span>`;
                
                html += `<p class="${finalClass}" onclick="processCommand('${file}')">
                    ${readIcon}[ ${file} ]
                </p>`;
            });
        }
    }

    html += `</div>`;
    printToScreen(html, animate);
}



// --- 文件渲染 (修改版：加入章节结束判定) ---
function renderPassage(key, animate = true) {
    state.currentKey = key;

    // 1. 设置顶部标题栏
    if (key === "Intro") {
        headingEl.innerHTML = "";
    } else if (key !== "help" && key !== "Start") {
        let moduleColor = getColorByType(state.currentListType);
        headingEl.innerHTML = `&nbsp;&nbsp;&nbsp; <span style="color:${moduleColor}; border-bottom:1px solid ${moduleColor}">档案: ${key}</span>`;
        
        // 记录阅读历史
        if (!state.readHistory.includes(key)) {
            state.readHistory.push(key);
            saveGame();
        }
    } else {
        headingEl.innerHTML = "";
    }

    // 2. 获取基础内容
    let html = getPassageHTML(key);

    // ============================================================
    // ★ 新增：第一章结束判定逻辑
    // ============================================================
    if (key === "03-Dining-1") {
        // 在录音文档的末尾，追加一个“系统结算”界面
        html += `
            <br><br>
            <div style="border-top: 2px dashed #444; margin-top: 20px; padding-top: 20px;"></div>
            
            <div class="chapter-end-screen" style="
                background-color: #000; 
                border: 1px solid #d65d0e; 
                padding: 30px; 
                text-align: center; 
                font-family: 'Courier New', monospace; 
                animation: fadeIn 2s ease-in;
            ">
                <div style="font-size: 3em; color: #d65d0e; letter-spacing: 5px; margin-bottom: 10px; text-shadow: 0 0 10px #d65d0e;">
                    CHAPTER I<br>COMPLETE
                </div>
                <div style="font-size: 1.2em; color: #aaa; margin-bottom: 30px;">
                    第一章：审判之夜 - 完
                </div>

                <div style="text-align: left; width: 80%; margin: 0 auto; color: #666; font-size: 0.9em; line-height: 1.8;">
                    <p>> Verifying Case Data integrity... [OK]</p>
                    <p>> Archiving User Session... [OK]</p>
                    <p>> <span style="color: #fff;">目前进度已保存。</span></p>
                    <p>> R.C.P.D. 正在解密后续档案...</p>
                </div>

                <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;">

                <div style="color: #888; font-style: italic;">
                    "十个小戏俑，得闲去饮茶；<br>
                    不慎噎住喉，十个只剩九..."
                </div>
                
                <br>
                <div 
                onclick="processCommand('02-Servant-2-Mystery')"
                class="next-chapter-btn"
                style="
                    color: #d65d0e; 
                    border: 1px solid #d65d0e; 
                    padding: 15px 30px; 
                    display: inline-block; 
                    font-size: 0.9em; 
                    cursor: pointer; 
                    transition: all 0.3s;
                    font-weight: bold;
                    letter-spacing: 2px;
                "
                onmouseover="this.style.backgroundColor='#d65d0e'; this.style.color='#000';"
                onmouseout="this.style.backgroundColor='transparent'; this.style.color='#d65d0e';"
            >
                TO BE CONTINUED IN CHAPTER II ▶
            </div>
            </div>
            <style>
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            </style>
        `;
    }

    // 第二章结算页面逻辑
    if (key === "02-Store-1") {
        html += `
            <br><br>
            <div style="border-top: 2px dashed #444; margin-top: 20px; padding-top: 20px;"></div>
            
            <div class="chapter-end-screen" style="
                background-color: #0d0d0d; 
                border: 1px solid #b22222; 
                padding: 30px; 
                text-align: center; 
                font-family: 'Courier New', monospace; 
                animation: fadeIn 3s ease-in;
                box-shadow: 0 0 20px rgba(178, 34, 34, 0.2);
            ">
                <div style="font-size: 3em; color: #b22222; letter-spacing: 5px; margin-bottom: 10px; text-shadow: 0 0 10px #500;">
                    CHAPTER II<br>COMPLETE
                </div>
                <div style="font-size: 1.2em; color: #888; margin-bottom: 30px; letter-spacing: 2px;">
                    第二章：困兽之斗 - 完
                </div>

                <div style="text-align: left; width: 85%; margin: 0 auto; color: #666; font-size: 0.85em; line-height: 1.8; border-left: 2px solid #333; padding-left: 15px;">
                    <p>> Assessing Weather Conditions... [CRITICAL/TYPHOON]</p>
                    <p>> Power Grid Status... <span style="color: #c00;">[OFFLINE]</span></p>
                    <p>> Survivor Count... [7/10]</p>
                    <p>> Archiving User Session... [OK]</p>
                    <p>> <span style="color: #ccc;">暴风雨中的进度已保存。</span></p>
                </div>

                <hr style="border: 0; border-top: 1px solid #444; margin: 25px 0;">

                <div style="color: #a00; font-style: italic; font-weight: bold; line-height: 1.6;">
                    "七个小戏俑，砍柴乐悠悠；<br>
                    斧起头落地，七个只剩六。"
                </div>
                
                <br><br>
                <div 
                onclick="processCommand('03-Lu-7')"
                class="next-chapter-btn"
                style="
                    color: #fff; 
                    background-color: #b22222; 
                    padding: 8px 15px; 
                    display: inline-block; 
                    font-size: 0.9em; 
                    letter-spacing: 1px;
                    border-radius: 2px;
                ">
                    NEXT: 第三章 [血色黎明]
                </div>
            </div>
            <style>
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            </style>
        `;
    }
    // 假设 'key' 是当前正在查看/播放的物品ID
if (key === "09-Wei-6-7") {
    // 在录音文档的末尾，追加一个“章节结算”界面
    html += `
        <br><br>
        <div style="border-top: 2px dashed #444; margin-top: 20px; padding-top: 20px;"></div>
        
        <div class="chapter-end-screen" style="
            background-color: #050505; 
            border: 1px solid #b22222; /* 这里的边框改为暗红色，呼应'血色黎明' */
            padding: 40px; 
            text-align: center; 
            font-family: 'Courier New', monospace; 
            animation: fadeIn 2.5s ease-in;
            box-shadow: 0 0 20px rgba(178, 34, 34, 0.2);
            margin-bottom: 50px;
        ">
            <div style="font-size: 3.5em; color: #b22222; letter-spacing: 6px; margin-bottom: 10px; text-shadow: 0 0 15px #b22222; font-weight: bold;">
                CHAPTER III<br>COMPLETE
            </div>
            
            <div style="font-size: 1.4em; color: #888; margin-bottom: 40px; border-bottom: 1px solid #333; display: inline-block; padding-bottom: 10px;">
                第三章：血色黎明 - 完
            </div>

            <div style="text-align: left; width: 85%; margin: 0 auto; color: #666; font-size: 0.9em; line-height: 2.0;">
                <p>> Timeline Sync: 21:30, August 10th, 1939</p>
                <p>> Status Check: <span style="color: #b22222;">CRITICAL (极度危险)</span></p>
                <p>> Subject Analysis: 
                    <span style="text-decoration: line-through;">No.10 </span> [MISSING], 
                    No.6 [UNSTABLE], 
                    No.7  [ARMED]，
                    No.3  [ARMED] 
                </p>
                <p>> <span style="color: #fff;">WARNING WARNING WARNING</span></p>
                <p>> WARNING: 终局阶段即将开始...</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #444; margin: 30px 0;">

            <div style="color: #aaa; font-style: italic; margin-bottom: 30px; font-size: 1.1em;">
                "四个小戏俑，出海去捕鱼；<br>
                <span style="color: #b22222;">红鱼骗了人</span>，四个只剩三..."
            </div>
            
            <div 
                class="next-chapter-btn"
                style="
                    color: #fff; 
                    background-color: #b22222;
                    border: 1px solid #b22222; 
                    padding: 18px 40px; 
                    display: inline-block; 
                    font-size: 1.1em; 
                    cursor: pointer; 
                    transition: all 0.3s;
                    font-weight: bold;
                    letter-spacing: 3px;
                    box-shadow: 0 0 10px rgba(178, 34, 34, 0.5);
                "
                onmouseover="this.style.backgroundColor='#800000'; this.style.borderColor='#800000'; this.style.transform='scale(1.05)';"
                onmouseout="this.style.backgroundColor='#b22222'; this.style.borderColor='#b22222'; this.style.transform='scale(1)';"
            >
                ENTER THE FINALE ▶
            </div>
            
            <p style="margin-top: 15px; font-size: 0.8em; color: #444;">[ 终章：孤绝之岛 ]</p>
        </div>
        
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
        </style>
    `;
}
    // ============================================================

    // 3. 渲染到屏幕
    printToScreen(html, animate);
}


function getPassageHTML(key) {
    let content = storyData[key];
    if (!content) return "";
    state.people.forEach(id => {
        if (state.nicknames[id]) {
            const regex = new RegExp(`\\[${id}\\]`, 'g');
            content = content.replace(regex, `[<span class="names">${id} ${state.nicknames[id]}</span>]`);
        } else {
            const regex = new RegExp(`\\[${id}\\]`, 'g');
            content = content.replace(regex, `[<span class="names">${id}</span>]`);
        }
    });
    return content;
}

function handleNameCommand(args) {
    if (args.length < 3) {
        refreshCurrentViewWithMsg(`<p class="msg-error">语法错误。正确格式: name [代号] [名字]</p>`);
        return;
    }
    const id = args[1];
    const name = args[2];
    if (state.people.includes(id)) {
        state.nicknames[id] = name;
        saveGame(); 
        refreshCurrentViewWithMsg(`<p class="msg-success">嫌疑人 [${id}] 已标记为 "${name}"。</p>`);
    } else {
        refreshCurrentViewWithMsg(`<p class="msg-error">数据库中不存在代号: ${id}</p>`);
    }
}

function refreshCurrentViewWithMsg(messageHTML) {
    let contentHTML = "";
    if (state.currentView === "list_view") {
        renderCategoryList(state.currentListType, false);
        setTimeout(() => {
             const msgDiv = document.createElement("div");
             msgDiv.className = "system-message";
             msgDiv.innerHTML = messageHTML;
             outputEl.prepend(msgDiv);
        }, 20);
        return;
    } else {
        contentHTML = getPassageHTML(state.currentKey);
    }
    const finalHTML = `<div class="system-message">${messageHTML}</div>${contentHTML}`;
    printToScreen(finalHTML, false);
}

// --- 渲染到屏幕 (通用函数) ---
function printToScreen(html, animate = true) {
    // [新增] 切换页面时，强制滚动到窗口最顶部
    window.scrollTo(0, 0);

    outputEl.innerHTML = html; 
    
    if (animate) {
        outputEl.style.opacity = 0;
        setTimeout(() => {
            outputEl.style.opacity = 1;
            outputEl.style.transition = "opacity 0.3s";
        }, 10);
    } else {
        outputEl.style.opacity = 1;
        outputEl.style.transition = "none";
    }
}

// ==================== 4. 系统安全保护 (Security) ====================

// [防御 1] 禁用右键菜单
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    // 可选：在这里显示一个符合游戏风格的提示
    // alert("R.C.P.D. 安全协议：禁止未授权的访问。");
    return false;
});

// [防御 2] 禁用开发者工具快捷键
document.onkeydown = function(e) {
    // F12
    if (event.keyCode == 123) {
        return false;
    }
    // Ctrl+Shift+I (打开开发者工具)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+Shift+J (打开开发者工具)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+Shift+C (审查元素)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+U (查看源代码)
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+S (保存网页 - 防止直接下载)
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        return false;
    }
}
// [防御 3] Debugger 陷阱 (检测到调试工具打开时卡住页面)
// 注意：这招非常狠，建议开发测试时先注释掉，上线前再打开！
(function anonymous() {
    setInterval(function() {
        debugger;
    }, 100); // 每100毫秒触发一次断点
})();


