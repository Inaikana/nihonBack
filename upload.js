import { supabase } from "./src/config/supabase.ts";

// node upload.js

const data = [
  {
    jid: "3502", // 自製id 第幾集的第幾個 例:第1集第1個
    // episodeNumber: "35", // 集數
    order: "02", // 第幾個
    timestamp: 21, // 影片時間(秒)
    grammarPattern: "(小句) かどうか", // 日文文法公式
    grammarSummary: "かどうか", // 日文文法(簡式)"
    chineseMeaning: "( 詢問 (小句) 是否屬實 )", // 中文
    chineseSummary: "是不是、有沒有", // 中文(簡式)
    notes: ["小句為使用簡體形的句子"], // 備註
    examples: [
      {
        japanese: "|明日[あした]|雨[あめ]が|降[ふ]るかどうか|分[わ]かりません",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=-L-aHr-dxHU&t=21s", // 網址
    videoTitle:
      "日文教學_初級日語#35｜日語語法解釋 使用簡體形的兩種語法 小句＋かどうか、疑問詞小句＋か", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
    tags: [],
  },
];

const getThumbnail = (url) => {
  if (!url) return "";

  // 先嘗試從 ?v= 或 &v= 後面抓取 ID
  // 1. split("v=")[1] 會拿到 "3M1UOCKgVhs&t=288s"
  // 2. 再用 split("&")[0] 拿到的就是 "3M1UOCKgVhs"
  const videoId = url.split("v=")[1]?.split("&")[0];

  // 為了保險，增加一個處理短網址 (youtu.be) 的邏輯，防止你以後複製到這種格式
  if (!videoId && url.includes("youtu.be")) {
    return `https://img.youtube.com/vi/${url.split("/").pop().split("?")[0]}/mqdefault.jpg`;
  }

  return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : "";
};

const uploadData = async () => {
  const finalData = data.map((item) => ({
    ...item,
    thumbnail: getThumbnail(item.referenceUrl), // 自動補上 thumbnail 欄位
  }));

  // 3. 匯入加工後的資料
  const { data: result, error } = await supabase
    .from("grammars")
    .insert(finalData);

  if (error) {
    console.error("匯入失敗：", error);
  } else {
    console.log("匯入成功，共新增了", finalData.length, "筆資料");
  }
};

uploadData();

// node upload.js

/*
幫我依此公式給我日文的例句
並用以下這種格式打給我

若有漢字 前面要有|
漢字後面要有[]
[]裝個漢字的平假名發音
以一個完整單字為單為切割

例: |東京[とうきょう]|大学[だいがく]は|日本[にほん]の|大学[だいがく]ですか
*/

/*
【常用備註】
 "公式以ます形呈現 需依句意更換動詞形態"
 (動詞連用形)
 */

/*
【💛需特別做的集數】
5-1 數字 時間 念法
7全 動詞分類和ます形
17-1 17-2 量詞和唸法
33 は 和 が
34 簡體形 (動詞、い形容詞、な形容詞、名詞 每個都有【 現在 + 肯定 】【 現在 + 否定 】【 過去 + 肯定 】【 過去 + 否定 】)

*/

/*
【🩷動詞變化】
 7 ます形
 20-1 て形
 27-1 ない形
 29-1 辭書形
 30-1 た形


 【🩵形容詞】
 13 い形容詞 
 14 な形容詞
 26 形容詞的て形
 28 形容詞 + なります / します 表示變化

 【💙 因為~所以~】
 15-3 15-4 だから / ですから

【💜不可以、禁止】
21-2 いけません

 【💕💕💓💗💖💘💝】
 */

// node upload.js
