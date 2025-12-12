// === 模块 3: 警方档案 (Police) ===
const db_police = {
"DOC-WITNESS-STATEMENT": `
        <p><strong>档案:</strong> 西贡村民询问笔录 (HK-CID-1939-0814-W01)</p>
        <p><strong>来源:</strong> 香港皇家警察刑事侦缉处 / 西贡分区警署</p>
        
        <div class="myDiv" style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; color: #333; padding: 15px; border: 1px solid #333;">
            <div style="text-align: center; border-bottom: 2px solid #000; margin-bottom: 10px; color: #000;">
                <h4 style="margin: 0;">ROYAL HONG KONG POLICE FORCE</h4>
                <h5 style="margin: 5px 0;">WITNESS STATEMENT / 证人供词</h5>
            </div>
            <p style="color: #333;"><strong>日期/地点：</strong> 1939年8月14日 / 西贡警署</p>
            <p style="color: #333;"><strong>证人：</strong> 林有财 (Lam Yau-choi) | “七星记”茶居老板</p>
            <p style="color: #333;"><strong>负责警官：</strong> 李探目 (Det. Sgt. Lee)</p>
            <hr style="border-top: 1px dashed #999;">
            
            <p style="color: #333;"><strong>[李探目]：</strong> 林老板，关于兵头洲的新东家，你到底知道多少？</p>
            <p style="color: #333;"><strong>[证人]：</strong> 阿Sir冤枉啊！我只知道那个岛前阵子被一个叫<strong>欧文 (Mr. Owen)</strong> 的大老板买下了。</p>
            <p style="color: #333;"><strong>[李探目]：</strong> 你见过欧文吗？</p>
            <p style="color: #333;"><strong>[证人]：</strong> 没见过！都是那个尖沙咀姓莫的（莫立士）矮胖子来办的。他给钱让我们别多嘴，说是有大人物要来搞“荒野生存比赛”。</p>
            <p style="color: #333;"><strong>[李探目]：</strong> 8月9号到12号岛上发求救信号，为什么视而不见？</p>
            <p style="color: #333;"><strong>[证人]：</strong> 阿Sir，那时候挂八号风球啊！龙王爷发脾气，浪比屋顶还高！而且那个姓莫的千叮咛万嘱咐，说不管岛上有什么动静——哪怕是放火——都别当真。我们哪知道真的会死这么多人啊！</p>
            <p style="color: #333;"><strong>[李探目]：</strong> 除了“欧文”这个名字，还有什么？</p>
            <p style="color: #333;"><strong>[证人]：</strong> 真的没了。只知道幕后大老板叫欧文。</p>
            
            <hr style="border-top: 1px dashed #999;">
            <p style="color: #333;"><strong>【备注】：</strong> 证人极力撇清关系。除<strong>“欧文”</strong>之名外，无法提供关于岛主外貌或行踪的线索。</p>
        </div>
    `,
    "DOC-BOATMAN-TESTIMONY": `
        <div class="evidence-doc" style="font-family: 'Courier New', Courier, '宋体', monospace; background-color: #f0f0e8; color: #222; padding: 25px; border: 2px solid #444; box-shadow: 4px 4px 0px rgba(0,0,0,0.2); max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; border-bottom: 3px double #333; margin-bottom: 20px; padding-bottom: 10px;">
                <h3 style="margin: 0; font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #222;">ROYAL HONG KONG POLICE FORCE</h3>
                <h3 style="margin: 5px 0; font-size: 1.1em; text-transform: uppercase; color: #222;">MARINE REGION / 水警总部</h3>
                <h2 style="margin: 10px 0; font-size: 1.5em; font-weight: bold; color: #222;">RECORD OF TESTIMONY</h2>
                <h4 style="margin: 0; font-weight: normal; color: #222;">口供记录 / 档案编号: HK-MP-1939-0814-S03</h4>
            </div>
            
            <div style="font-size: 0.9em; line-height: 1.6; margin-bottom: 20px; color: #222;">
                <p style="margin: 5px 0;"><strong>日期：</strong> 1939年8月14日</p>
                <p style="margin: 5px 0;"><strong>地点：</strong> 西贡水警基地</p>
                <p style="margin: 5px 0;"><strong>证人：</strong> 陈阿水 (Chan Ah-shui)，人称“水叔” | 58岁 | 疍家船民</p>
                <p style="margin: 5px 0;"><strong>负责警官：</strong> 梅因探长 (Insp. Maine)</p>
            </div>

            <hr style="border: 0; border-top: 1px dashed #666; margin: 15px 0;">
            
            <div style="font-size: 0.95em; line-height: 1.8; text-align: justify; color: #222;">
                <p><strong>[梅因探长]：</strong> 陈先生，你是最后一个见到那些活着的人。关于8月8日那天送他们上岛的情形，你有什么觉得不寻常的地方吗？</p>
                
                <p><strong>[水叔]：</strong> 有，太有了！以前那个美国阔佬<strong>罗布森 (Mr. Robson)</strong> 还在的时候，来的都是穿金戴银的洋行大班。可这次这帮人……太“奇怪了。那个教书的女仔看起来就像是去打工的，那个老兵头一脸晦气。他们根本不像去开派对的，倒像是去奔丧的。</p>
                
                <p><strong>[梅因探长]：</strong> 正因为他们看起来很奇怪，所以当你看到信号时，你才决定违抗命令？</p>
                
                <p><strong>[水叔]：</strong> 是啊。那个姓莫的之前千叮咛万嘱咐，说岛上在搞“生存游戏”。但我心里不踏实。那些人不像是玩得起这种游戏的人。</p>
                
                <p><strong>[梅因探长]：</strong> 说说你们是什么时候发现不对劲的？</p>
                
                <p><strong>[水叔]：</strong> 是11号早上。那时候还挂着九号风球，浪头比天高。岸边有一队<strong>童子军 (Boy Scouts)</strong> 在避雨，说是看到岛上升起了求救的烟火，好像还有人在挥布条。但那时候真的没办法出海啊，阿Sir！</p>
                
                <p><strong>[梅因探长]：</strong> 有没有可能，在你们到达之前，有人游水逃走了？或者有其他的船接应？</p>
                
                <p><strong>[水叔]：</strong> 绝对不可能！兵头洲离岸边足足有一英里，平时水流就急。那天台风刚过，那个浪涌，哪怕是奥运冠军下水也得淹死。而且岸上那帮童子军一直盯着呢。我敢打包票，直到我们上去收尸，连只苍蝇都没飞出来过。</p>
            </div>
            
            <hr style="border: 0; border-top: 1px dashed #666; margin: 15px 0;">

            <div style="background-color: #e0e0d8; padding: 10px; border-left: 4px solid #8b0000; font-style: italic; font-size: 0.9em; color: #222;">
                <p style="margin: 0;"><strong>【探长结案备注】：</strong> 证词可信。综合气象局报告与童子军的观察记录，可以确认在案发期间（8月8日晚至8月12日下午），兵头洲处于完全的物理隔绝状态。这是一起发生在大自然制造的“密室”中的屠杀。</p>
            </div>
            
            <div style="margin-top: 30px; display: flex; justify-content: space-between; color: #222;">
                <div style="width: 40%; border-top: 1px solid #000; padding-top: 5px;">
                    <p style="margin: 0; font-size: 0.8em;">口供记录员: PC 2213</p>
                </div>
                <div style="width: 40%; border-top: 1px solid #000; padding-top: 5px; text-align: right;">
                    <p style="margin: 0; font-size: 0.8em;">陈阿水 (画押)</p>
                </div>
            </div>
        </div>
    `
    ,
     // 档案 4：唱片定制单据 (新加入)
    "DOC-RECORD-RECEIPT": `
        <div class="evidence-doc" style="font-family: 'Courier New', Courier, '楷体', 'Songti SC', serif; background-color: #fcfcf4; color: #2d2d2d; padding: 20px; border: 1px solid #8b7d6b; box-shadow: 3px 3px 6px rgba(0,0,0,0.15); max-width: 550px; margin: 0 auto; position: relative;">
            
            <div style="position: absolute; top: 20px; right: 20px; border: 2px solid #c00; color: #c00; padding: 5px 10px; transform: rotate(-15deg); font-weight: bold; opacity: 0.7; font-size: 1.2em;">
                已付讫 (PAID)
            </div>

            <div style="text-align: center; border-bottom: 2px solid #444; margin-bottom: 15px; padding-bottom: 5px;">
                <h2 style="margin: 5px 0; letter-spacing: 3px; color: #2d2d2d;">百代影音制作公司</h2>
                <h4 style="margin: 0; font-family: sans-serif; font-weight: normal; color: #2d2d2d;">PATHE ORIENT (HK) LTD. - CUSTOM SERVICE</h4>
                <p style="margin: 5px 0; font-size: 0.8em; color: #444;">地址：香港中环德辅道中 24 号 (24 Des Voeux Road C.)</p>
            </div>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 0.9em; color: #2d2d2d;">
                <div><strong>单号 (No.):</strong> 390725-B</div>
                <div><strong>日期 (Date):</strong> 1939年7月25日</div>
            </div>

            <div style="border: 1px solid #999; padding: 10px; margin-bottom: 15px; background-color: #f8f8f8; color: #2d2d2d;">
                <p style="margin: 5px 0;"><strong>客户姓名：</strong> 莫立士 先生 (Mr. Mo Lishi)</p>
                <p style="margin: 5px 0;"><strong>联络地址：</strong> 尖沙咀 么地道 荣华贸易行</p>
                <p style="margin: 5px 0;"><strong>用途说明：</strong> 业余话剧社排演道具 (Amateur Theatrical Props)</p>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 0.9em; margin-bottom: 20px; color: #2d2d2d;">
                <thead style="background-color: #ddd;">
                    <tr>
                        <th style="border: 1px solid #666; padding: 5px; text-align: left;">项目 (Item)</th>
                        <th style="border: 1px solid #666; padding: 5px; text-align: center;">规格</th>
                        <th style="border: 1px solid #666; padding: 5px; text-align: right;">费用 (HKD)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border: 1px solid #666; padding: 5px;">
                            <strong>人声录制服务</strong><br>
                            内容：《天鹅之死》判词<br>
                            <em>(Swan Song - Indictment)</em>
                        </td>
                        <td style="border: 1px solid #666; padding: 5px; text-align: center;">10英寸<br>双面虫胶</td>
                        <td style="border: 1px solid #666; padding: 5px; text-align: right;">$15.00</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #666; padding: 5px;">
                            <strong>配音员劳务费</strong><br>
                            指定配音：李先生 (电台播音员)
                        </td>
                        <td style="border: 1px solid #666; padding: 5px; text-align: center;">--</td>
                        <td style="border: 1px solid #666; padding: 5px; text-align: right;">$10.00</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #666; padding: 5px;">
                            <strong>加急制作费</strong>
                        </td>
                        <td style="border: 1px solid #666; padding: 5px; text-align: center;">24小时</td>
                        <td style="border: 1px solid #666; padding: 5px; text-align: right;">$5.00</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2" style="border: 1px solid #666; padding: 5px; text-align: right;"><strong>总计 (Total):</strong></td>
                        <td style="border: 1px solid #666; padding: 5px; text-align: right; font-weight: bold;">$30.00</td>
                    </tr>
                </tfoot>
            </table>

            <div style="font-size: 0.85em; font-style: italic; color: #555; border-top: 1px dotted #666; padding-top: 10px;">
                <p style="margin: 0;"><strong>内部备注：</strong></p>
                <ul style="margin: 5px 0; padding-left: 20px;">
                    <li>原稿台词已随成品唱片一并寄回客户指定地址（半岛酒店 304房 转 欧文先生）。</li>
                    <li>客户要求声音必须“冷酷、像法官宣判”，已做后期处理。</li>
                </ul>
            </div>

            <div style="margin-top: 20px; text-align: right;">
                <p style="margin: 0; font-size: 0.8em; color: #2d2d2d;">经手人：<em>W.K. Chan</em></p>
            </div>
        </div>
    `,


    // 档案 5：法医验尸总结报告
    "DOC-AUTOPSY-SUMMARY": `
        <div class="evidence-doc" style="font-family: 'Courier New', Courier, '宋体', monospace; background-color: #f4f4f4; color: #111; padding: 30px; border: 1px solid #999; box-shadow: 2px 2px 8px rgba(0,0,0,0.15); max-width: 600px; margin: 0 auto; position: relative;">
            
            <div style="position: absolute; top: 15px; right: 15px; border: 2px solid #b00; color: #b00; padding: 2px 8px; font-weight: bold; font-size: 1.1em; transform: rotate(-8deg); letter-spacing: 2px;">
                CONFIDENTIAL / 机密
            </div>

            <div style="text-align: center; border-bottom: 2px solid #000; margin-bottom: 20px; padding-bottom: 10px;">
                <h3 style="margin: 0; font-size: 1.1em;">MEDICAL DEPARTMENT, HONG KONG</h3>
                <h2 style="margin: 8px 0; font-size: 1.4em; font-weight: bold;">SUMMARY OF POST-MORTEM EXAMINATIONS</h2>
                <h4 style="margin: 0; font-weight: normal;">验尸结果摘要 / Ref: HK-MD-39-0815</h4>
            </div>
            
            <div style="font-size: 0.9em; margin-bottom: 15px;">
                <p style="margin: 5px 0;"><strong>致 (To):</strong> 助理警务处长 托马斯·莱格爵士</p>
                <p style="margin: 5px 0;"><strong>自 (From):</strong> 首席法医官</p>
                <p style="margin: 5px 0;"><strong>日期 (Date):</strong> 1939年8月15日</p>
                <p style="margin: 5px 0; color: #c00;"><strong>注意:</strong> 死者身份尚未经家属正式认领。</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #666; margin: 15px 0;">
            
            <div style="font-size: 0.95em; line-height: 1.6;">
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.9em;">
                    <thead style="background-color: #ddd;">
                        <tr>
                            <th style="border: 1px solid #666; padding: 5px; text-align: center; width: 15%;">编号</th>
                            <th style="border: 1px solid #666; padding: 5px; text-align: center; width: 25%;">特征</th>
                            <th style="border: 1px solid #666; padding: 5px; text-align: left;">死因及病理特征</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;"><strong>No. 01</strong></td>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;">男性<br>中年</td>
                            <td style="border: 1px solid #666; padding: 5px;"><strong>劈伤。</strong> 头部被重型利器（现场发现一把沾血的斧头）从后脑劈开，脑组织严重破坏。</td>
                        </tr>
                        
                        <tr>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;"><strong>No. 02</strong></td>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;">女性<br>中年</td>
                            <td style="border: 1px solid #666; padding: 5px;"><strong>药物过量。</strong> 血液中含有致死剂量的曲砜那 (Sulphonal)，于睡眠中呼吸衰竭而死。</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;"><strong>No. 03</strong></td>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;">男性<br>壮年</td>
                            <td style="border: 1px solid #666; padding: 5px;"><strong>砸伤。</strong> 头部及肩部被高空坠落之重物（大理石钟）彻底砸烂，甚至无法辨认面部。</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;"><strong>No. 04</strong></td>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;">女性<br>老年</td>
                            <td style="border: 1px solid #666; padding: 5px;"><strong>注射中毒。</strong> 颈部静脉发现针孔，皮下组织残留氰化物成分。</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;"><strong>No. 05</strong></td>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;">男性<br>老年</td>
                            <td style="border: 1px solid #666; padding: 5px;"><strong>枪伤 (Gunshot)。</strong> 前额正中中弹，子弹贯穿脑部。死者身着红色法袍，戴假发。</td>
                        </tr>
                        
                        <tr>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;"><strong>No. 06</strong></td>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;">女性<br>青年</td>
                            <td style="border: 1px solid #666; padding: 5px;"><strong>缢死 (Hanging)。</strong> 颈部有明显索沟，颈椎断裂。脚下有被踢倒的椅子。</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;"><strong>No. 07</strong></td>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;">男性<br>青年</td>
                            <td style="border: 1px solid #666; padding: 5px;"><strong>枪伤。</strong> 子弹直接射穿心脏。子弹型号与现场发现的左轮手枪吻合。</td>
                        </tr>
                        
                        <tr>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;"><strong>No. 08</strong></td>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;">男性<br>老年</td>
                            <td style="border: 1px solid #666; padding: 5px;"><strong>重击 (Blunt Force)。</strong> 后脑枕骨遭重物猛烈击打，致颅骨粉碎性骨折，即时死亡。</td>
                        </tr>
                        
                        <tr>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;"><strong>No. 09</strong></td>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;">男性<br>青年</td>
                            <td style="border: 1px solid #666; padding: 5px;"><strong>中毒 (Poisoning)。</strong> 胃容物检测出高浓度氰化物，推测混入酒精饮品中摄入。无挣扎痕迹。</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;"><strong>No. 10</strong></td>
                            <td style="border: 1px solid #666; padding: 5px; text-align: center;">男性<br>中年</td>
                            <td style="border: 1px solid #666; padding: 5px;"><strong>溺毙 (Drowning)。</strong> 肺部充满海水，身体多处有死后撞击礁石造成的擦伤。</td>
                        </tr>
                        
                        
                        
                    </tbody>
                </table>
            </div>

            <hr style="border: 0; border-top: 1px solid #666; margin: 15px 0;">

            <div style="margin-top: 20px;">
                <p style="margin: 0;"><strong>结论 (Conclusion):</strong> 岛上无一生还。</p>
                <div style="text-align: right; margin-top: 20px;">
                    <p style="margin: 0; font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.2em;">Dr. J.K. Pousong</p>
                    <p style="margin: 0; border-top: 1px solid #000; display: inline-block; padding-top: 2px;">Government Pathologist / 政府法医官</p>
                </div>
            </div>
        </div>
    `,
    // 档案 6：出租车司机吴阿彪口供 (新加入)
    "DOC-DRIVER-TESTIMONY": `
        <div class="evidence-doc" style="font-family: 'Courier New', Courier, '宋体', monospace; background-color: #fdfdf8; color: #333; padding: 25px; border: 1px solid #777; box-shadow: 3px 3px 0px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto;">
            
            <div style="text-align: center; border-bottom: 2px solid #000; margin-bottom: 20px; padding-bottom: 10px;">
                <h3 style="margin: 0;">ROYAL HONG KONG POLICE FORCE</h3>
                <h4 style="margin: 5px 0;">WITNESS TESTIMONY / 证人供词</h4>
                <p style="font-size: 0.8em; margin: 0;">档案编号：HK-CID-1939-0814-T02</p>
            </div>
            
            <div style="font-size: 0.9em; margin-bottom: 15px; background-color: #eee; padding: 10px;">
                <p style="margin: 3px 0;"><strong>证人：</strong> 吴阿彪 (Ng Ah-biao)</p>
                <p style="margin: 3px 0;"><strong>职业：</strong> 出租汽车司机 (尖沙咀车行)</p>
                <p style="margin: 3px 0;"><strong>事由：</strong> 关于8月8日接载乘客前往西贡码头的回忆</p>
            </div>

            <hr style="border: 0; border-top: 1px dashed #666; margin: 15px 0;">
            
            <div style="font-size: 0.95em; line-height: 1.7; text-align: justify;">
                <p>阿Sir，我是个粗人，但我记性好。那天的事我记得很清楚，因为去兵头洲的客确实不多见。</p>

                <p>那天在尖沙咀钟楼下面，日头毒得很。那群人站在出口，一看就是外地来的。忽然人群里有人喊了一声：<strong>“阿强！”</strong></p>

                <p>那是喊我的同事，戴鸭舌帽、开第一辆车的那个家伙。阿强走过去，我看他跟那几个人搭话：</p>
                <blockquote>
                “几位是去西贡码头，转船去兵头洲的吧？”
                </blockquote>

                <p>那四个人异口同声地回答了是。然后阿强就按之前那个姓莫的中介交代的说：</p>
                <blockquote>
                “这边安排了两辆出租汽车。不过我们得留下一辆，等一等从粉岭那边开过来的慢车，要接一位搭那趟车来的老先生。”
                </blockquote>

                <p>那个看起来挺年轻、像是教书先生的女仔先开口了：</p>
                <blockquote>
                “我留下来等吧。各位是不是可以先走一步？”
                </blockquote>

                <p>那个摆着大家闺秀架子的老女人冷冷地说了句<strong>“有劳了”</strong>，就钻进了阿强的车。那个被称为爵士的老洋人也跟了上去。</p>

                <p>这时候，那个看起来带点江湖气的年轻男人说话了，这人眼神很利，一看就不好惹：</p>
                <blockquote>
                “我和这位小姐一起等吧。”
                </blockquote>

                <p>那个女仔说：<strong>“我叫韦若兰。”</strong></p>
                <p>那男人回道：<strong>“陆伯达。”</strong></p>

                <p>那时候苦力们正忙着往阿强那辆车顶上堆行李。我离得近，听见车里那两位大人物的对话：</p>
                <blockquote>
                [爵士]： 今天的日头真毒啊！<br>
                [老女人]： 确实，热得让人心烦。<br>
                [爵士]： 阁下对西贡这一带熟悉吗？<br>
                [老女人]： 我去过太平山顶和浅水湾，新界这种乡下地方倒是第一次来。
                </blockquote>

                <p>阿强那辆车喷着黑烟开走了。我就看着留下来的这一男一女，走过去招呼他们。后来那列老式慢车进站了，从月台出来的，是个身材高大、很有军人派头的老人，穿着旧式中山装，留着寸头。</p>

                <p>之后，这三个人终于上了我的车。阿Sir，我开车往西贡走的时候，听到他们在车上闲聊，那时候气氛还算正常：</p>
                <blockquote>
                [老军人]： 我对新界这一带很不熟悉。我以前住在九龙塘，很少往这深山老林里跑。<br>
                [韦若兰]： 这里真漂亮。青山绿水，红土坡，看着让人心里亮堂。<br>
                [陆伯达]： 就是太闭塞了，树林太密。我喜欢开阔的地方——<br>
                [老军人]： 听口音，你去过不少地方吧？<br>
                [陆伯达]： 为了讨生活，南边北边都跑过。您呢？
                </blockquote>

                <p>后面的我记得不是很清楚了，因为那个老将军没怎么接话，一直看着窗外发呆，好像心事重重的样子。我就把他们拉到了西贡码头，那个“七星记”茶居门口，我就回九龙了。</p>
            </div>
            
            <hr style="border: 0; border-top: 1px dashed #666; margin: 15px 0;">
            
            <div style="margin-top: 20px; text-align: right;">
                <p style="margin: 0; font-size: 0.8em;">口供记录员: PC 6681</p>
                <p style="margin: 0; font-size: 0.8em;">证人签署: 吴阿彪</p>
            </div>
        </div>
    `,

    // 档案 7：向导水叔回忆笔录 (新加入 - 详细回忆版)
    "DOC-BOATMAN-TESTIMONY(2)": `
        <div class="evidence-doc" style="font-family: 'Courier New', Courier, '宋体', monospace; background-color: #fdfdf8; color: #333; padding: 25px; border: 1px solid #777; box-shadow: 3px 3px 0px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto;">
            
            <div style="text-align: center; border-bottom: 2px solid #000; margin-bottom: 20px; padding-bottom: 10px;">
                <h3 style="margin: 0;">ROYAL HONG KONG POLICE FORCE</h3>
                <h4 style="margin: 5px 0;">WITNESS STATEMENT / 证人供词</h4>
                <p style="font-size: 0.8em; margin: 0;">档案编号：HK-CID-1939-0814-T03</p>
            </div>
            
            <div style="font-size: 0.9em; margin-bottom: 15px; background-color: #eee; padding: 10px;">
                <p style="margin: 3px 0;"><strong>证人：</strong> 陈阿水 (Chan Ah-shui)</p>
                <p style="margin: 3px 0;"><strong>职业：</strong> 西贡机动舢舨船主</p>
                <p style="margin: 3px 0;"><strong>事由：</strong> 关于8月8日傍晚运送访客登岛的详细回忆</p>
            </div>

            <hr style="border: 0; border-top: 1px dashed #666; margin: 15px 0;">
            
            <div style="font-size: 0.95em; line-height: 1.7; text-align: justify;">
                <p>阿Sir，那天傍晚的事情我记得很清楚。那时候太阳快落山了，海面上金光闪闪的。</p>

                <p>那辆出租车把人拉到码头的时候，下来了三个人。</p>


                <p>那时候，“七星记”茶居门口还坐着三个人。那个满脸堆笑、自称南洋客商的中年胖子看到新车来了，就走了过去，还是那副自来熟的样子：</p>
                <blockquote>
                [戴老板]： 我们觉得还是等等你们比较好，大家都是一条船上的客。自我介绍一下，鄙人姓戴，叫戴伟，刚从南洋新加坡回来，那是我的第二故乡。哈哈！
                </blockquote>
                <p>我看大家都挺嫌弃他的，那个爵士老爷更是正眼都不瞧他一下。</p>
                <blockquote>
                [戴老板]： 上船之前有人想先吃点儿东西吗？这家的云吞面还凑合。<br>
                ...<br>
                [戴老板]： 好，那就不再耽误时间了，好客的东家和他太太正等着我们呢！
                </blockquote>

                <p>然后他朝我钩了钩手指。我走过去招呼：</p>
                <blockquote>
                [水叔]： 各位老板，小姐，都准备好了吗？艇早就备好了。听说还有两位先生要自己开车来，欧文先生嘱咐说不必等他们了。大家跟着我走上栈桥，我的哗啦哇（机动舢舨）就停在那儿。
                </blockquote>

                <p>那个很难伺候的老女人看了一眼我的船，嫌弃地说：</p>
                <blockquote>
                [老女人]： 这船可真小。
                </blockquote>
                <p>我赶紧解释：</p>
                <blockquote>
                [水叔]： 太太，这船很稳的！装了进口马达，开起来快极了！开着它从这儿去维多利亚港，一眨眼的工夫就到了，没得顶（棒极了）。
                </blockquote>
                <p>那个看起来很威严的老头也发话了：</p>
                <blockquote>
                [老头]： 我们这儿人可不少，还有这么多行李。<br>
                [水叔]： 比你们多一倍的人也坐得下，爵士。
                </blockquote>
                <p>另外一个新到的男人倒是挺爽快：</p>
                <blockquote>
                [陆伯达]： 没问题。今天天气好，风平浪静，这船够用了。
                </blockquote>

                <p>就在我要解缆绳的时候，一辆红色的敞篷跑车沿着土路冲了下来，那声音震得耳朵嗡嗡响。那车真漂亮，红得像团火，在我们西贡从来没见过。车上的那个阔少爷跳下来，也跟着上了船。</p>

                <p>之后，我就坐在船尾拉动马达，载着这一船怪人向兵头洲开去。</p>

                <p>到了之后，</p>

                <p>那个新到的男人看了一眼周围的地势，说了一句挺奇怪的话：</p>
                <blockquote>
                [男人]： 这种鬼地方，易守难攻啊。要是赶上打风，想上岸恐怕比登天还难！
                </blockquote>
                <p>我当时顺嘴就回了他：</p>
                <blockquote>
                [水叔]： 老板眼力好！只要挂起三号风球，或者刮起东南风，兵头洲就成了个绝地，神仙也难飞进来。有时候风大浪急，交通一断就是个把星期。
                </blockquote>
                <p>我要是早知道后来真的打大风，死也不送他们上来。</p>

                <p>我在码头上停稳，率先跳上岸，把缆绳系在大铁环上。随后，我领着这帮人上了台阶。那个一直没怎么说话的老军官到了这儿，忽然感叹了一句：</p>
                <blockquote>
                [马国豪将军]： 哈哈！背山面海，真是个风水宝地！
                </blockquote>

                <p>到了上面的露台，那个管家已经在那儿等着了。我把人送到，帮着把行李卸下来，就开船回去了。那时候天已经快黑了。</p>
                
                <p>阿Sir，这就是我最后一次见到他们活着时候的样子。</p>
            </div>
            
            <hr style="border: 0; border-top: 1px dashed #666; margin: 15px 0;">
            
            <div style="margin-top: 20px; text-align: right;">
                <p style="margin: 0; font-size: 0.8em;">口供记录员: PC 6681</p>
                <p style="margin: 0; font-size: 0.8em;">证人签署: 陈阿水 (画押)</p>
            </div>
        </div>
    `,
    "DOC-BOATMAN-TESTIMONY(3)": `
        <div class="evidence-doc" style="font-family: 'Courier New', Courier, '宋体', monospace; background-color: #fdfdf8; color: #333; padding: 25px; border: 1px solid #777; box-shadow: 3px 3px 0px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto;">
            
            <div style="text-align: center; border-bottom: 2px solid #000; margin-bottom: 20px; padding-bottom: 10px;">
                <h3 style="margin: 0;">ROYAL HONG KONG POLICE FORCE</h3>
                <h4 style="margin: 5px 0;">SUPPLEMENTARY WITNESS STATEMENT / 补充供词</h4>
                <p style="font-size: 0.8em; margin: 0;">档案编号：HK-CID-1939-0814-T05 (Re: Dr. An)</p>
            </div>
            
            <div style="font-size: 0.9em; margin-bottom: 15px; background-color: #eee; padding: 10px;">
                <p style="margin: 3px 0;"><strong>证人：</strong> 陈阿水 (Chan Ah-shui)</p>
                <p style="margin: 3px 0;"><strong>笔录次序：</strong> 第五次询问 (5th Interview)</p>
                <p style="margin: 3px 0;"><strong>针对对象：</strong> 第十名登岛者（安世昌）</p>
            </div>

            <hr style="border: 0; border-top: 1px dashed #666; margin: 15px 0;">
            
            <div style="font-size: 0.95em; line-height: 1.7; text-align: justify;">
                <p>阿Sir，我是想起一点说一点。关于那个医生……对，医生。他是自己开车来的，比之前那一帮人稍微晚一点。</p>

                <p>那时候日头已经偏西了，正好挂在海面上。那天夕阳红得吓人，照在海浪上，把整个水面染成了一片血红。现在回想起来，那真不是什么好兆头，像是海里流了血一样。</p>

                <p>他那辆福特车停在村口的土路边。之后他上了我的艇，我拉动马达，那时候船上只有我们两个人。</p>

                <blockquote>
                [医生]： 船家，这船开得挺稳啊。<br>
                [水叔]： 混口饭吃罢了，老板。
                </blockquote>

                <p>看得出来，他有点紧张，想跟我套近乎：</p>
                <blockquote>
                [医生]： 哎，跟你打听个事。这位欧文先生……他是做什么生意的？在这边置业很久了吗？<br>
                [水叔]： 我不知道，老板。我就是个开船的。<br>
                [v]： 别这样嘛，老人家。你们本地人消息最灵通了。这么大一笔买卖，这兵头洲换了主人，村里总该有点风声吧？
                </blockquote>

                <p>阿Sir，你也知道我这张嘴有时候严有时候松，但这事我是真不知道。我就回他：</p>
                <blockquote>
                [水叔]： 真的不知道。有人给钱，我就开船，就这么简单。
                </blockquote>

                <p>过了一会儿，我看他一直盯着天边看，那是起风的方向。</p>
                <blockquote>
                [医生]： 咳……这天气，看着像是有台风啊？<br>
                [水叔]： 还没到时候。不过要是真来了，咱们现在这小船可就成树叶了。
                </blockquote>

                <blockquote>
                [安世昌]： 是啊，是啊……最近渔获怎么样？西贡这边的海鲜很有名的。
                </blockquote>
                
                <p>我没接话茬，专心把舵。快到岸边的时候，我听见他小声嘀咕了一句，声音很轻，但我没听清。</p>

                <p>船靠岸了。我看他文质彬彬的，就扶了他一把上码头。他就那样提着皮包，一个人上了台阶，背影看起来挺孤单的。那时候，太阳刚好完全落下去了。</p>
            </div>
            
            <hr style="border: 0; border-top: 1px dashed #666; margin: 15px 0;">
            
            <div style="background-color: #e0e0d8; padding: 10px; border-left: 4px solid #8b0000; font-style: italic; font-size: 0.9em;">
                <p style="margin: 0;"><strong>【警官备注】：</strong> 证词显示医生在登岛前已表现出明显的焦虑和不安，并试图通过非正式渠道获取关于“欧文”的信息，这与他自称是受邀出诊的身份相符，但也暗示了他对这次行程存有疑虑。</p>
            </div>

            <div style="margin-top: 20px; text-align: right;">
                <p style="margin: 0; font-size: 0.8em;">口供记录员: PC 6681</p>
                <p style="margin: 0; font-size: 0.8em;">证人签署: 陈阿水 (画押)</p>
            </div>
        </div>
    `


    // 在这里继续添加以 DOC- 开头的档案...
};