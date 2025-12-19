// === 模块 4: 现场证物 (Evidence) ===
const db_evidence = {
    // 证物1：鲍乐的随身笔记 (No.3)
    "EVI-BLORE-NOTEBOOK": `
        <div class="evidence-doc" style="font-family: 'Kaiti', 'STKaiti', '楷体', cursive; background-color: #fffdf0; color: #202050; padding: 20px; border: 1px solid #ccc; box-shadow: 3px 3px 5px rgba(0,0,0,0.2); max-width: 450px; margin: 0 auto; transform: rotate(-1deg);">
            
            <div style="border-bottom: 2px solid #a0a0ff; margin-bottom: 15px; padding-bottom: 5px;">
                <p style="margin: 0; font-size: 0.9em; text-align: right;">1939 粉岭至尖沙咀慢车K402</p>
            </div>

            <div style="font-size: 1.1em; line-height: 1.8;">
                <p style="margin: 0; font-weight: bold;">【欧文交代的监视名单】：</p>
                <ul style="list-style-type: circle; padding-left: 20px; margin-top: 5px;">
                    <li><strong>白绮梅：</strong> 一个老女人。</li>
                    <li><strong>韦若兰：</strong> 教书的。</li>
                    <li><strong>安世昌：</strong> 中环那个医生。</li>
                    <li><strong>唐子轩</strong></li>
                    <li><strong>沃格雷夫(Wargrave)：</strong> 大法官。</li>
                    <li><strong>陆伯达</strong></li>
                    <li><strong>马国豪：</strong> 退下来的老军阀。</li>
                    <li><strong>老罗夫妇：</strong> 管家和妈姐。</li>
                </ul>
            </div>

            <hr style="border: 0; border-top: 1px dashed #999; margin: 15px 0;">

            <div style="font-size: 1em; color: #550000;">
                <p style="margin: 5px 0;"><strong>人数核对：</strong> 名单上一共9个。</p>
            <div style="margin-top: 20px; opacity: 0.6; font-size: 0.8em; text-align: right;">
                （角落里有个画了一半的简笔画）
            </div>
        </div>
    `,

    // 证物 2：唱片《天鹅之死》 (指控名单 - 更新版)
    "EVI-RECORD-CONTENT": `
        <div class="evidence-doc" style="font-family: 'Times New Roman', 'Songti SC', serif; background-color: #1a1a1a; color: #e0e0e0; padding: 25px; border: 4px double #d4af37; box-shadow: 5px 5px 15px rgba(0,0,0,0.5); max-width: 500px; margin: 0 auto; text-align: center;">
            
            <div style="width: 100px; height: 100px; background: radial-gradient(circle, #d4af37 10%, #8b4513 100%); border-radius: 50%; margin: 0 auto 20px auto; display: flex; align-items: center; justify-content: center; border: 2px solid #fff;">
                <div style="width: 10px; height: 10px; background-color: #000; border-radius: 50%;"></div>
            </div>

            <h2 style="margin: 0; color: #d4af37; letter-spacing: 2px; text-transform: uppercase;">SWAN SONG</h2>
            <h4 style="margin: 5px 0 20px 0; font-weight: normal; color: #aaa;">《天鹅之死》 / 33⅓ RPM</h4>

            <hr style="border: 0; border-top: 1px solid #555; margin: 15px 0;">
            
            <div style="font-size: 1em; line-height: 1.8; text-align: justify; color: #ccc;">
                <p style="text-align: center; color: #fff; font-weight: bold; font-size: 1.2em; margin-bottom: 20px;">
                    [电流嘶嘶声，随后是一声刺耳的爆音]
                </p>

                <p style="text-align: center; color: #ff4d4d; font-weight: bold; font-size: 1.3em; margin-bottom: 20px; border: 2px solid #ff4d4d; padding: 5px;">
                    “各位女士，各位先生！请安静！！！”
                </p>

                <p><strong>“你们被控犯有以下罪行：”</strong></p>

                <p>“<strong>安世昌</strong>，一九二五年三月十四日，你因醉酒手术，造成<strong>卢吴氏 </strong> 的死亡。”</p>

                <p>“<strong>白绮梅</strong>，你要对一九三一年十一月五日，你的女佣<strong>阿秀 </strong> 之死负全部责任。”</p>

                <p>“<strong>鲍乐</strong>，一九二八年十月十日，是你作伪证导致了无辜者<strong>林得志  在赤柱狱中死亡。”</p>

                <p>“<strong>韦若兰</strong>，一九三五年八月十一日，你在长洲海滩谋害了<strong>韩希乐 </strong>。”</p>

                <p>“<strong>陆伯达</strong>，一九三二年二月某日，你在滇缅边境的丛林中，抛弃并杀害了<strong>二十一名苦力</strong>。”</p>

                <p>“<strong>马国豪</strong>，一九一七年一月四日，你蓄意谋害了你的副官<strong>李志明 </strong>。”</p>

                <p>“<strong>唐子轩</strong>，去年十一月十四日，你在九龙飙车，杀害了<strong>陈家那两个孩子 </strong>。”</p>

                <p>“<strong>罗福</strong>和<strong>阿萍</strong>，一九二九年五月六日，你们合谋害死了你们的前雇主<strong>毕老太 </strong>。”</p>

                <p>“<strong>劳伦斯·沃格雷夫</strong>，一九三〇年六月十日，你利用职权谋害了<strong>谢东 </strong>。”</p>

                <hr style="border: 0; border-top: 1px dashed #555; margin: 20px 0;">

                <p style="text-align: center; font-style: italic; color: #d4af37; font-size: 1.1em; margin-top: 20px;">
                    “赤柱监狱的铁栅已经关闭，你们这些罪人还有什么要替自己辩解的吗？”
                </p>
                
                <p style="text-align: center; color: #666; font-size: 0.9em; margin-top: 20px;">
                    [声音戛然而止，只剩下空转的电流声]
                </p>
            </div>
        </div>
    `,
    // 证物 3：欧文先生的急信 (The Letter)
    "EVI-OWEN-LETTER": `
        <div class="evidence-doc" style="font-family: 'Courier New', Courier, monospace; background-color: #fdfcf0; color: #222; padding: 40px; border: 1px solid #dcdcdc; box-shadow: 5px 5px 10px rgba(0,0,0,0.1); max-width: 500px; margin: 0 auto; position: relative;">
            
            <div style="text-align: center; margin-bottom: 30px; color: #004d40;">
                <h2 style="margin: 0; font-family: 'Times New Roman', serif; letter-spacing: 2px; text-transform: uppercase;">The Peninsula</h2>
                <h4 style="margin: 5px 0; font-weight: normal;">HONG KONG · KOWLOON</h4>
                <div style="border-bottom: 2px solid #004d40; width: 60%; margin: 10px auto;"></div>
            </div>

            <div style="font-size: 0.9em; margin-bottom: 20px;">
                <p style="text-align: right;">1939年8月7日</p>
                <p>致：兵头洲公馆 管家</p>
                <p><strong>罗福 (Luo Fu)</strong></p>
            </div>

            <div style="font-size: 0.95em; line-height: 1.8; text-align: justify;">
                <p>罗福：</p>
                
                <p>因上海方面的生意突发变故，我与内人不得不推迟行程，恐无法于明日准时登岛迎接各位贵客。我们预计将在数日内抵达。</p>
                
                <p>在此期间，公馆内的一切事务全权由你负责。请务必按照之前的菜单，以最高规格款待各位客人，切勿怠慢。</p>
                
                <p>另外，关于那项<strong>特别安排</strong>：</p>
                
                <p>我在麻将房的抽屉里留下了一张最新的黑胶唱片。请你在<strong>明晚（8日）晚餐结束之后</strong>，播放这张唱片。</p>
                
                <p>这是一项我为客人们精心准备的“餐后惊喜”，也是一种特别的欢迎仪式。请通过墙上的传声孔播放，效果尤佳。</p>
                
                <p>切记照办。</p>
            </div>

            <div style="margin-top: 40px; margin-bottom: 20px;">
                <p>你忠诚的雇主，</p>
                
                <div style="font-family: 'Brush Script MT', cursive; font-size: 1.8em; color: #000; transform: rotate(-2deg); margin-top: 10px;">
                    Ulick Norman Owen
                </div>
                <p style="font-size: 0.8em; color: #666; margin-top: 5px;">(尤利克·诺尔曼·欧文)</p>
            </div>

            <div style="position: absolute; bottom: 10px; left: 0; width: 100%; text-align: center; font-size: 0.6em; color: #999;">
                THE PENINSULA HONG KONG - TELEPHONE: 28028 - CABLE: "PENHOTE"
            </div>
        </div>
    `,
    // ... 上面的内容保持不变 ...

    // 证物 7：书法卷轴《十个小戏俑》 (Nursery Rhyme)
    "EVI-NURSERY-RHYME": `
        <div class="evidence-doc" style="font-family: 'Kaiti', 'STKaiti', '楷体', serif; background-color: #fdfbf0; color: #2b2b2b; padding: 25px; border: 8px solid #4a3b2a; border-radius: 2px; box-shadow: inset 0 0 20px rgba(0,0,0,0.1), 5px 5px 15px rgba(0,0,0,0.3); max-width: 480px; margin: 0 auto; position: relative; background-image: linear-gradient(#e6e2d3 1px, transparent 1px), linear-gradient(90deg, #e6e2d3 1px, transparent 1px); background-size: 20px 20px; background-position: -2px -2px;">
            
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 100%); pointer-events: none; z-index: 10;"></div>

            <div style="text-align: center; margin-bottom: 25px; border-bottom: 3px double #8b0000; padding-bottom: 15px;">
                <div style="font-size: 2.2em; font-weight: bold; letter-spacing: 8px; color: #222; text-shadow: 1px 1px 0 rgba(0,0,0,0.1);">十个小戏俑</div>
            </div>

            <div style="font-size: 1.15em; line-height: 1.9; text-align: center; color: #111; font-weight: 500;">
                
                <p style="margin: 8px 0;">十个小戏俑，得闲去饮茶；<br>
                <span style="color: #8b0000; font-weight: bold;">不慎噎住喉，十个只剩九。</span></p>

                <p style="margin: 8px 0;">九个小戏俑，半夜不愿走；<br>
                <span style="color: #8b0000; font-weight: bold;">一睡睡过头，九个只剩八。</span></p>

                <p style="margin: 8px 0;">八个小戏俑，西贡去游水；<br>
                <span style="color: #8b0000; font-weight: bold;">留恋不归家，八个只剩七。</span></p>

                <p style="margin: 8px 0;">七个小戏俑，举斧去砍柴；<br>
                <span style="color: #8b0000; font-weight: bold;">砍柴砍断头，七个只剩六。</span></p>

                <p style="margin: 8px 0;">六个小戏俑，玩耍如孩童；<br>
                <span style="color: #8b0000; font-weight: bold;">毒蜂叮一口，六个只剩五。</span></p>

                <p style="margin: 8px 0;">五个小戏俑，官司打不通；<br>
                <span style="color: #8b0000; font-weight: bold;">清官判死刑，五个只剩四。</span></p>

                <p style="margin: 8px 0;">四个小戏俑，出海去捕鱼；<br>
                <span style="color: #8b0000; font-weight: bold;">红鱼骗了人，四个只剩三。</span></p>

                <p style="margin: 8px 0;">三个小戏俑，误入动物园；<br>
                <span style="color: #8b0000; font-weight: bold;">大熊抱得紧，三个只剩二。</span></p>

                <p style="margin: 8px 0;">二个小戏俑，烈日晒昏头；<br>
                <span style="color: #8b0000; font-weight: bold;">以此被烧焦，二个只剩一。</span></p>

                <p style="margin: 8px 0;">一个小戏俑，孤单又伶仃；<br>
                <span style="color: #8b0000; font-weight: bold;">上吊了残生，一个也不剩。</span></p>

            </div>

            <div style="margin-top: 40px; position: relative; height: 120px;">
                <div style="position: absolute; right: 10px; top: 0; font-size: 1.1em; writing-mode: vertical-rl; letter-spacing: 5px; color: #333;">
                    己卯年夏 欧文戏笔
                </div>
                
                <div style="position: absolute; right: 10px; top: 75px; width: 45px; height: 45px; border: 3px solid #c00; color: #c00; font-size: 0.7em; line-height: 1.1; text-align: center; display: flex; align-items: center; justify-content: center; border-radius: 4px; font-weight: bold; opacity: 0.85; background-color: rgba(200, 0, 0, 0.05); box-shadow: 0 0 2px rgba(200,0,0,0.3);">
                    欧文<br>藏书
                </div>
            </div>

            <div style="text-align: center; margin-top: 10px; font-size: 0.7em; color: #888; font-family: sans-serif;">
                【物证描述】：发现于每个客房的壁炉架上方。
            </div>
        </div>
    `,
    // 证物：欧文给安医生的聘书
    "EVI-LETTER-AN": `
        <div class="evidence-doc" style="font-family: 'Songti SC', 'SimSun', 'Times New Roman', serif; background-color: #fdfbf7; color: #2c2c2c; padding: 40px; border: 1px solid #d3d3d3; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); max-width: 550px; margin: 0 auto; background-image: linear-gradient(#fdfbf7 2px, transparent 2px); background-size: 100% 30px;">
            
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px double #8b0000; padding-bottom: 15px;">
                <h2 style="margin: 0; font-family: 'Times New Roman', serif; letter-spacing: 3px; color: #8b0000; text-transform: uppercase; font-size: 1.4em;">Soldier Island Mansion</h2>
                <p style="margin: 5px 0 0 0; font-size: 0.8em; color: #555; letter-spacing: 1px;">HONG KONG · PRIVATE RESIDENCE</p>
                <p style="margin: 5px 0 0 0; font-size: 0.9em; font-weight: bold; color: #333;">兵头洲公馆 · 私人寓所</p>
            </div>

            <div style="text-align: right; margin-bottom: 25px; font-size: 0.9em; font-family: 'Times New Roman', serif;">
                <p>2nd August, 1939</p>
            </div>

            <div style="font-size: 1.05em; line-height: 2.0; text-align: justify;">
                <p><strong>安世昌 医生 钧鉴：</strong></p>

                <p>久闻大名。</p>

                <p>近日在香港会所（The Hong Kong Club）与几位从伦敦归来的老友闲谈，言语间皆对阁下的精湛医术推崇备至，称您为治疗“妇人神经郁结之症”的圣手。</p>

                <p>实不相瞒，内人近来深受神经衰弱之苦。或许是因为这兵头洲的海风太盛，又或许是岛上过于清净，她总是疑神疑鬼，精神状态令我甚为担忧。</p>

                <p>素闻安医生不仅医术高明，更兼具绅士风度。故特修书一封，恳请阁下拨冗莅临寒舍小住几日。</p>

                <p>为免内人起疑抗拒，还请阁下<strong>务必暂且隐去医生身份</strong>，仅以<strong>“欧文家旧友”</strong>的名义登岛度假。只需在日常闲谈相处中，暗中观察其病情，待确诊后再行商议治疗方案。</p>

                <p>随信附上汇丰银行本票一张，面额为<strong>壹佰坚尼（100 Guineas）</strong>，权作舟车之资与定金。事成之后，另有重谢。</p>

                <p>静候佳音。</p>
                <br>
            </div>

            <div style="margin-top: 20px; padding-left: 55%;">
                <p style="margin: 0; font-size: 0.9em;">您诚挚的，</p>
                <div style="font-family: 'Brush Script MT', 'Times New Roman', cursive; font-size: 1.8em; color: #000080; margin: 10px 0; transform: rotate(-2deg);">
                    U.N. Owen
                </div>
                <p style="margin: 0; font-size: 0.9em; font-weight: bold;">尤纳·纳尔逊·欧文</p>
            </div>

            <div style="margin-top: 40px; font-size: 0.7em; color: #666; border-top: 1px dotted #999; padding-top: 5px;">
                <p>渡轮将于八月八日下午从西贡码头出发，请持此信登船。</p>
            </div>

        </div>
    `,
    // 证物：欧文给法官的邀请信 (打字机风格)
    "EVI-LETTER-WARGRAVE": `
        <div class="evidence-doc" style="
            background-color: #fdf8e4; 
            color: #333; 
            padding: 50px; 
            font-family: 'Courier New', Courier, monospace; 
            border: 1px solid #c0b090; 
            box-shadow: 5px 5px 15px rgba(0,0,0,0.2); 
            max-width: 550px; 
            margin: 0 auto; 
            line-height: 1.6;
            position: relative;
            background-image: repeating-linear-gradient(#fdf8e4 0px, #fdf8e4 24px, #f5f0db 25px);
        ">
            
            <div style="text-align: center; margin-bottom: 40px; border-bottom: 2px solid #2c3e50; padding-bottom: 15px;">
                <h1 style="font-family: 'Times New Roman', serif; font-size: 26px; letter-spacing: 5px; margin: 0; color: #2c3e50; text-transform: uppercase; font-weight: bold;">The Peninsula</h1>
                <p style="font-family: 'Times New Roman', serif; font-size: 12px; margin: 5px 0 0 0; letter-spacing: 3px; color: #555;">KOWLOON · HONG KONG</p>
            </div>

            <div style="text-align: right; margin-bottom: 40px; font-weight: bold;">
                July 30th, 1939
            </div>

            <div style="text-align: justify; font-size: 15px; letter-spacing: 0.5px;">
                <p><strong>尊敬的 劳伦斯·沃格雷夫 爵士：</strong></p>

                <p>冒昧致信，敬请海涵。</p>

                <p>虽然阁下与我素未谋面，但我们拥有一位共同的老朋友 —— <strong>康斯坦丝·卡尔明顿夫人 (Lady Culmington)</strong>。</p>

                <p>卡尔明顿夫人目前正做客于我在兵头洲的私人寓所。昨日茶叙时，她提及阁下近期深受风湿痛楚的困扰，且似乎在寻找一处清静之地。</p>

                <p>恕我直言，兵头洲正是阁下所需的最佳疗养地。这里远离尘嚣，没有九龙那种令人窒息的喧闹。卡尔明顿夫人极力向我推荐阁下，并渴望在这座海岛上与老友重逢。</p>

                <p>内子与我亦对阁下仰慕已久。若能邀请阁下莅临寒舍小住几日，实乃荣幸。</p>

                <p>随信附上行程安排。</p>
                <br>
            </div>

            <div style="margin-top: 40px; padding-left: 50%;">
                <p>您诚挚的，</p>
                
                <div style="font-family: 'Brush Script MT', cursive; font-size: 28px; color: #000080; transform: rotate(-5deg); margin: 15px 0;">
                    U.N. Owen
                </div>

                <p style="text-transform: uppercase; font-weight: bold;">U.N. OWEN</p>
            </div>

            <div style="position: absolute; bottom: 15px; left: 20px; font-size: 10px; color: #999; font-family: sans-serif; opacity: 0.6;">
                THE PENINSULA STATIONERY
            </div>

        </div>
    `,
    // 证物：白绮梅收到的信 (名为旧识，实为诱饵)
    // 证物：白绮梅收到的信 (浅水湾酒店信笺)
    "EVI-LETTER-BAI": `
        <div class="evidence-doc" style="
            background-color: #fdfbf7; 
            color: #1a1a1a; 
            padding: 50px; 
            font-family: 'Courier New', Courier, monospace; 
            border: 1px solid #d4c5a3; 
            box-shadow: 5px 5px 20px rgba(0,0,0,0.15); 
            max-width: 520px; 
            margin: 0 auto; 
            line-height: 1.8;
            position: relative;
        ">
            
            <div style="text-align: center; margin-bottom: 45px; border-bottom: 3px double #8b4513; padding-bottom: 15px;">
                <h1 style="font-family: 'Times New Roman', serif; font-size: 24px; letter-spacing: 2px; color: #8b4513; margin: 0; text-transform: uppercase;">The Repulse Bay Hotel</h1>
                <p style="font-family: 'Times New Roman', serif; font-size: 11px; margin: 5px 0 0 0; letter-spacing: 4px; color: #555;">HONG KONG</p>
            </div>

            <div style="text-align: right; margin-bottom: 30px; font-weight: bold; font-size: 14px;">
                August 2nd, 1939
            </div>

            <div style="text-align: justify; font-size: 14px;">
                <p><strong>亲爱的 白小姐 (Miss Bai)：</strong></p>

                <p>数年前在跑马地的那次相遇，至今令我难以忘怀。</p>

                <p>彼时，您那<strong>[高尚的道德标准]</strong>与<strong>[坚定的原则]</strong>，如同一盏明灯，照亮了那间狭窄的教会公寓。在这个日益浮躁的殖民地，像您这样能够坚守传统、并不惜一切代价维护体面的女性，实在是凤毛麟角。</p>

                <p>如今，我在兵头洲购置了一处产业，打算经营一家只接待“正派人士”的家庭旅馆。但我发愁的是，若没有一位德高望重的人坐镇，恐怕很难立下规矩。</p>

                <p>因此，我冒昧致信，恳请您务必赏光来此度夏。我向您保证，这次邀请是<strong>[完全免费] (Free of Charge)</strong> 的。</p>

                <p>我知道，您一向生活简朴，为了维持那份身为淑女的体面，往往不得不精打细算。但在兵头洲，您不必再为此操心。这里有最好的厨师和最新鲜的食材，您完全可以卸下生活的重担，尽情享受您应得的优待。</p>

                <p>请把它当作老朋友的一点心意。我们需要您，正如这个堕落的世界需要道德的标尺。</p>
                <br>
            </div>

            <div style="margin-top: 40px; padding-left: 45%;">
                <p>您忠实的，</p>
                
                <div style="font-family: 'Brush Script MT', cursive; font-size: 28px; color: #000080; transform: rotate(-5deg); margin: 15px 0;">
                    U.N. Owen
                </div>
                
                <p style="font-size: 12px; font-weight: bold; text-transform: uppercase;">(MISS U.N. OWEN)</p>
            </div>

            <div style="position: absolute; bottom: 20px; left: 0; width: 100%; text-align: center; font-size: 10px; color: #bba; letter-spacing: 1px;">
                THE REPULSE BAY · HONG KONG
            </div>

        </div>
    `,
    // 在这里继续添加以 EVI- 开头的证物...





};