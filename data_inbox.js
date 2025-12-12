// === 模块 2: 内部通讯 (Inbox) ===
const db_inbox = {
    "MSG-003": `
    <div class="evidence-doc" style="font-family: 'Songti SC', 'SimSun', serif; background-color: #f9f3d8; color: #2a2a2a; padding: 15px; border: 1px solid #d4c5a3; box-shadow: 2px 2px 5px rgba(0,0,0,0.2); max-width: 400px; margin: 0 auto; transform: rotate(1deg);">
        
        <div style="border-bottom: 2px solid #333; margin-bottom: 10px; padding-bottom: 5px; text-align: center;">
            <h4 style="margin: 0; font-size: 0.9em; color: #555;">中华民国二十八年七月二十日</h4>
            <h3 style="margin: 5px 0; font-size: 1.4em; font-weight: bold; letter-spacing: 2px;">香 江 小 报</h3>
            <p style="margin: 0; font-size: 0.8em;">街谈巷议 · 秘闻趣事</p>
        </div>

        <div style="text-align: center; margin-bottom: 15px;">
            <h2 style="margin: 0; font-size: 1.3em; font-weight: bold; line-height: 1.4;">西贡孤岛易主之谜！<br>兵头洲新贵究竟何人？</h2>
        </div>

        <div style="font-size: 0.9em; line-height: 1.6; text-align: justify; column-count: 1;">
            <p style="text-indent: 2em; margin-top: 0;">
                本港西贡外海之<strong>“兵头洲” (Soldier Head Island)</strong>，素来是茶余饭后之谈资。据悉，该岛原为美国军火阔佬<strong>罗布森 (Robson)</strong> 之私产，耗巨资建成海上销金窟。惜其新纳之三姨太不耐风浪，更兼惧怕台风，遂连屋带岛挂牌求售。
            </p>
            <p style="text-indent: 2em;">
                近日忽传喜讯，该岛已由一神秘富豪<strong>欧文先生 (Mr. Owen)</strong> 购得。自此，关于兵头洲之流言，更是一日三变，令人咋舌。
            </p>
            <p style="text-indent: 2em;">
                <strong>传闻一：</strong> 有谓新岛主实为好莱坞女星<strong>加布里埃尔·特尔</strong>，亦有说是上海滩某位避世之“电影皇后”，意欲借孤岛清静数月，避开影迷纠缠。
            </p>
            <p style="text-indent: 2em;">
                <strong>传闻二：</strong> 本报特约记者“包打听”透露，该岛恐将成为某位<strong>前清皇亲国戚</strong>之私邸，作为乱世中最后的安乐窝。
            </p>
            <p style="text-indent: 2em;">
                <strong>传闻三：</strong> 更有甚者，坊间盛传是一<strong>英资洋行大班</strong>一掷千金，买下该岛作金屋藏娇之用，以此作为与新婚名媛的蜜月爱巢。
            </p>
            <p style="text-indent: 2em;">
                <strong>传闻四：</strong> 据消息灵通人士乔纳斯爆料，鉴于日寇窥伺，<strong>英国海军部</strong>已秘密购入该岛，意欲开展针对日军南下的秘密防御试验。
            </p>
            <p style="text-indent: 2em; font-weight: bold; margin-top: 10px;">
                总之，兵头洲虽小，却已成全港头号新闻！本报将持续追踪报道。
            </p>
        </div>
        
        <div style="border-top: 4px double #333; margin-top: 15px; padding-top: 5px; text-align: center; font-size: 0.8em;">
            <p>广告：陈李济跌打酒 · 专治跌打损伤</p>
        </div>
    </div>
    `,
    // ... 上面的内容保持不变 ...

    // 邮件 2：案件移交说明与警告
    "MSG-CASE-BRIEFING": `
        <div class="evidence-doc" style="font-family: 'Courier New', Courier, monospace; background-color: #fff; color: #111; padding: 25px; border: 1px solid #333; max-width: 650px; margin: 0 auto;">
            <div style="border-bottom: 2px solid #8b0000; margin-bottom: 20px; padding-bottom: 10px; display: flex; justify-content: space-between; align-items: end;">
                <div>
                    <h3 style="margin: 0; color: #8b0000; text-transform: uppercase;">CID INTERNAL MEMO</h3>
                    <p style="margin: 5px 0 0 0; font-size: 0.8em; color: #666;">刑事侦缉处 · 内部绝密</p>
                </div>
                <div style="font-size: 2em; color: #ddd; font-weight: bold;">TOP SECRET</div>
            </div>
            <div style="font-size: 0.95em; line-height: 1.6; text-align: justify;">
                <p>调查员：</p>
                <p>关于兵头洲（Soldier Island）的那桩惨案，档案现在正式移交给你。说实话，这是我从警三十年来见过的最<strong>棘手</strong>、最疯狂的案子。</p>                
                <p><strong>【关于关键证物】：</strong></p>
                <p>我们在岛上搜获了一批录音设备（以及对应的转录文档）。这可能是解开谜题的唯一钥匙。世界上只有一个人真正知道那几天岛上发生了什么，而现在，记录着这些声音的<strong>硬盘（档案盒）</strong>此刻就在你手上。</p>
                
                <p><strong>【核心困难】：</strong></p>
                <p>你要做的就是弄清楚岛上究竟发生了什么。但我必须警告你，这并不容易：</p>
                <ul style="background-color: #f0f0f0; padding: 10px 10px 10px 30px; border-left: 3px solid #555;">
                    <li>我们不知道是谁安排了这些录音。</li>
                    <li><strong>最致命的是：我们不知道每个录音器录下的确切时间线。</strong></li>
                    <li>每一个麦克风都是独立的。我们只能确定<strong>同一个麦克风</strong>上录音片段的先后顺序，但无法直接判断“客厅的录音A”和“厨房的录音B”哪个先发生。这给我们的调查带来了极大的麻烦。</li>
                </ul>

                <p><strong>【信任警告】：</strong></p>
                <p>我不知道你还能从这堆数据里找到什么，但有一件事毋庸置疑——<strong>我们不能完完全全相信所有的录音。</strong>在这个充满了谎言和伪装的孤岛上，我们不排除录音有被凶手后期<strong>捏造、剪辑甚至伪造</strong>的可能性。</p>
                
                <p><strong>眼见不一定为实，耳听亦可能是虚。</strong></p>

                <hr style="border: 0; border-top: 1px dashed #ccc; margin: 20px 0;">

                <p><strong>【建议切入点】：</strong></p>
                <p>技术科即使拼凑出了一些碎片，文件名也仅仅是基于内容的简单标记。以下是我们想办法复原的几个初始文档名称，我建议你从这里开始调查：</p>
                
                <p><strong>【已索引的修复片段列表】：</strong></p>

                <div style="border: 2px solid #d65d0e; padding: 10px; margin-bottom: 15px; text-align: center; color: #d65d0e; font-weight: bold; letter-spacing: 2px;">
    -- CHAPTER I : THE NIGHT OF JUDGMENT --<br>
    ( 第一章：审判之夜 )
</div>
            <div style="border: 1px dashed #555; padding: 15px; background-color: #111; color: #98971a; line-height: 1.8;">

                <div style="margin: 0;">01-Wei-2-6</div>

                <div style="margin: 0;">01-Terrace-1-5-10</div>

                <div style="margin: 0;">01-Tang-9</div>

                <div style="margin: 0;">01-Dai-3</div>

                <div style="margin: 0;">01-Ma-8</div>

                <div style="margin: 0;">02-Corridor-1-3-7</div>

                <div style="margin: 0;">01-Dining-______________</div>

            </div>
            <p><strong>【特别提示】：</strong></p>
                <p>还有一个不起眼但可能有用的细节：那对管家夫妇确实是非常守旧且尽职的仆人。</p>
                <p>在大部分社交场合，他们往往都在角落伺候着，像影子一样。<strong>如果你在推演某个场景的在场人员名单时卡住了，不确定还有谁在，不妨试试把他们也算进去——可能会有意外收获。</strong></p>
                <p>祝你好运。你需要的不仅是推理，还需要一点运气。</p>
            </div>

            <br>
            <div style="text-align: right;">
                <div style="font-family: 'Brush Script MT', cursive; font-size: 1.5em; opacity: 0.8;">Supt. Battle</div>
                <p style="margin: 0; font-weight: bold;">贝特 (Battle)</p>
                <p style="margin: 0; font-size: 0.8em;">警务处副处长 / 重案组</p>
            </div>
        </div>
    `,
    // 邮件 2：行动授权
    "MSG-001": `
        <p><strong>发件人:</strong> 助理警务处长 托马斯·莱格</p>
        <p><strong>主题:</strong> 绝密行动授权</p>
        <p>调查员，你现在不仅是在查案，更是在维护香港皇家刑事检察署的颜面。这是最高级别的授权。</p>
        <p>不管那个自称“欧文”的疯子是谁，把他的底裤都给我扒出来。另外，法医报告显示死者体内有氰化物成分，注意排查。</p>
    `,

    // 邮件 3：技术科进度
    "MSG-002": `
        <p><strong>发件人:</strong> 技术科</p>
        <p><strong>主题:</strong> 音频修复进度</p>
        <p>虽然大部分录音无法复原，但我们正在尝试提取更多片段。如果你在文件中发现了新的线索（比如提到了某个人名或地点），请务必记录下来。</p>
    `,

    // 邮件 4：录音转录通知 (新加入 - 解释玩法核心)
    "MSG-004": `
    <div class="evidence-doc" style="font-family: 'Courier New', Courier, monospace; background-color: #fff; color: #000; padding: 20px; border: 1px solid #ccc; max-width: 600px; margin: 0 auto;">
        
        <div style="border-bottom: 2px solid #000; margin-bottom: 15px; padding-bottom: 5px;">
            <h3 style="margin: 0; text-transform: uppercase;">ROYAL HONG KONG POLICE FORCE</h3>
            <h4 style="margin: 5px 0;">INTER-DEPARTMENTAL MEMO / 内部备忘录</h4>
        </div>

        <div style="font-size: 0.9em; margin-bottom: 20px; line-height: 1.5;">
            <p style="margin: 0;"><strong>致 (To):</strong> 负责本案探长 / 调查指挥官</p>
            <p style="margin: 0;"><strong>自 (From):</strong> 刑事侦缉处(CID) 技术支援组 - 张警长</p>
            <p style="margin: 0;"><strong>日期 (Date):</strong> 1939年8月15日</p>
            <p style="margin: 0;"><strong>事由 (Subject):</strong> 兵头洲现场搜获之录音设备及文字转录报告</p>
        </div>

        <hr style="border: 0; border-top: 1px solid #000; margin: 15px 0;">

        <div style="font-size: 0.95em; line-height: 1.6; text-align: justify;">
            <p>长官：</p>
            
            <p>关于西贡兵头洲（Soldier Head Island）特大凶案现场的搜证工作取得重大突破。</p>
            
            <p>搜证小组在别墅的客厅、餐厅及走廊隐蔽处，发现了数套改装过的<strong>机械录音装置（Modified Dictaphones）</strong>。这些设备连接着声控机关，虽然技术粗糙，但令人震惊地记录下了案发期间（8月8日至8月11日）屋内发生的大部分对话与声响。</p>
            
            <p>这显然是凶手“欧文”为了欣赏自己的“杰作”而刻意布置的。</p>
            
            <p>鉴于录音介质（蜡筒与虫胶盘）受损且带有大量杂音，技术组已连夜组织人手进行听写与修复。目前，所有可辨识的语音内容已被<strong>转录为文字档案</strong>。</p>
            
            <p>这些文字记录真实还原了十名死者生前的对话、争执以及最后的惨叫，是还原案发经过的关键证据。</p>
            
            <p><strong>【操作指引】：</strong></p>
            <p>您可以随时通过终端调阅已归档的<strong>“兵头洲事件簿（文字版）”</strong>。输入 <strong>list</strong> 指令查看所有录音记录。</p>
        </div>
    </div>
    `
    // 在这里继续添加以 MSG- 开头的邮件...
};