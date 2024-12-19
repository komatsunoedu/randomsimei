let items = ["1-1安藤　太陽","1-2岩地　壱晟","1-3岩本　留佳","1-4上野　涼真","1-5宇野　麻琴","1-6瓜﨑　大河","1-7惠木　結音","1-8岡田　璃子","1-9小川　裕大","1-10勝本　若葉","1-11嘉戸　唯南","1-12河井　さくら","1-13川野　夏姫","1-14川野　璃々花","1-15清本　あかり","1-16小谷　和奏","1-17小林　大晟","1-18佐久間　空","1-19佐々木　麻央","1-20品川　太陽","1-21新崎　寧央","1-22髙下　沙弥","1-23竹田　瑛太朗","1-24中村　乙葉","1-25中村　晴和","1-26新垣　晴己","1-27西村　澪海","1-28野上　泰志","1-29野見山　瑠偉","1-30長谷川　奏空","1-31畑　美紗妃","1-32深崎　亘","1-33藤原　結奈","1-34筆谷　悟士","1-35堀　彗碧","1-36松本　和","1-37三浦　紅葉","1-38宮里　莉央","1-39村上　澄空","1-40山内　悠央","1-41山崎　蕾","1-42山田　恵輔","1-43山田　玲","1-44山本　晏聖","1-45刘　宇航","1-46綿谷　日和","2-1飯田　隆志","2-2市元　暖","2-3今宮　美徳","2-4上野　栞愛","2-5大賀　紗花","2-6大舘　悠斗","2-7大屋　莉央","2-8岡﨑　美誉子","2-9岡田　想太","2-10岡田　瑠子","2-11奥迫　蒼太","2-12奥本　奏互","2-13加納　来実","2-14河野　那南","2-15古和　輝宙","2-16坂根　開","2-17笹岡　優衣","2-18佐々木　祈璃","2-19佐々木　大起","2-20下田　珠莉","2-21竹田　敢人","2-22田中　良弥","2-23堤　真依","2-24寺戸　美優","2-25中田　歩実","2-26西田　真菜","2-27西村　由良","2-28橋本　友紀","2-29濵野　一真","2-30日高　沙知","2-31平川　遼","2-32福田　里桜","2-33福間　臨太郎","2-34古井　快斗","2-35堀　雫","2-36又葉　公太郎","2-37三明　匠史","2-38森本　蒼依","2-39柳川　樹","2-40栁川　歌音","2-41山尾　祐斗","2-42山田　佳歩","2-43山本　凪紗","2-44山本　裕次郎","2-45横谷　星來","2-46吉原　大道","3-1荒木　陵汰","3-2飯田　翔空","3-3江川　侑杏","3-4大谷　来輝","3-5沖田　悠李","3-6小松　良慶","3-7佐々木　智哉","3-8佐々木　雄大","3-9新田　華茄","3-10田村　悠人","3-11寺戸　久乃","3-12中島　佑介","3-13中野　里南","3-14新留　貫太","3-15西川　陽翔","3-16古田　真拓","3-17盆子原　里桜","3-18前原　菜那","3-19松浦　玄人","3-20三浦　蔵之助","3-21湊　春姫","3-22宮家　遥生","3-23虫谷　架歩人","3-24湯浅　大吾","4-1有光　宏平","4-2上野　海音","4-3大地本　怜","4-4大田　和奈","4-5小川　凛人","4-6加藤　樹一","4-7佐々木　銀次郎","4-8佐々木　陸","4-9佐藤　陽香","4-10椎木　啓之","4-11重田　皓成","4-12武谷　美咲","4-13田中　瑛士","4-14田中　佑奈","4-15堤　哲哉","4-16中村　彩愛","4-17野上　響","4-18菱沼　悠大","4-19日野　愛里","4-20藤田　明日華","4-21松川　祥子","4-22森脇　悠斗","4-23山本　優介","4-24吉原　春樹"];
let kaisu=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let isGameStarted=false

function setup() {
  createCanvas(400, 200);
  background(220);

}

function draw(){
   // スタートボタンを作成
  button = createButton('Start Game'); // ボタンのラベルを設定
  button.position(150, 200); // ボタンの位置を指定
  button.mousePressed(choice); // ボタンが押されたときに呼び出す関数を指定

  if(isGameStarted){
    background(220);
    // ランダムに値を選択
  let i= int(random(0,139));
    kaisu[i]=kaisu[i]+1;

  // 選択した値を表示
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(0);
  text(items[i]+":"+String(kaisu[i])+"回目", width / 2, height / 2);
  isGameStarted=false;
  }
  
}

function choice(){
  isGameStarted = true; // ゲームを開始
  //button.hide(); // ボタンを非表示
}