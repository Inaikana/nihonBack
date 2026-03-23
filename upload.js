import { supabase } from "./src/config/supabase.ts";

// node upload.js

const data = [
  {
    jid: "1901", // 自製id 第幾集的第幾個 例:第1集第1個
    // episodeNumber: "18", // 集數
    order: "02", // 第幾個
    timestamp: 107, // 影片時間(秒)
    grammarPattern: "(時間) に (次數) + (動詞)", // 日文文法公式
    grammarSummary: "(時間) に (次數) + (動詞)", // 日文文法(簡式)"
    chineseMeaning: "(在 (時間) 內執行(動詞)(次數) )", // 中文
    chineseSummary: "(在 (時間) 內執行(動詞)(次數)  )", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese:
          "|一[いち]|年[ねん]に|一回[いっかい]|旅行[りょこう]に|行[い]きます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=Pom3oj50vgI&t=107s", // 網址
    videoTitle:
      "日文教學 初級日語#18｜日語語法解釋 〔時間〕＋動詞、〔時間〕に〔次数〕＋動詞、〔場所〕へ〔動詞〕に行きます／来ます", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
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

例: "|東京[とうきょう]|大学[だいがく]は|日本[にほん]の|大学[だいがく]ですか"
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

*/

/*
【🩷動詞變化】
 7 ます形

 【🩵形容詞】
 13 い形容詞 

 【💙 因為~所以~】
 15-3 15-4 だから / ですから

 【💜💕💕💓💗💖💘💝】
 */

// node upload.js
