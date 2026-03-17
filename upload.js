import { supabase } from "./src/config/supabase.ts";

// node upload.js

const data = [
  {
    jid: "0601" // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "5", // 集數
    order: "04", // 第幾個
    timestamp: 424, // 影片時間(秒)
    grammarPattern: "(時間1)から(時間2)まで", // 日文文法公式
    grammarSummary: "～から～まで", // 日文文法(簡式)
    chineseMeaning: "從(時間1)到(時間2)", // 中文
    chineseSummary: "從～到～", // 中文(簡式)
    notes: ["加入「何時」變成 : 從幾點到幾點"], // 備註
    examples: [
      {
        japanese:
          "|朝[あさ]|八[はち]|時[じ]から|夜[よる]|七[しち]|時[じ]まで|日本[にほん]|語[ご]を|勉強[べんきょう]します",
        chinese: "",
      },
      {
        japanese:
          "|銀行[ぎんこう]は|何時[なんじ]から|何時[なんじ]まで|働[はたら]きますか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=oiIUGOwQhmY&t=424s", // 網址
    videoTitle:
      "日文教学_初級日語#5｜日語語法解釋 何時何分、今何時ですか、〔時間〕に～、〔時間〕から〔時間〕まで", // 影片標題
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

/*
幫我想三個初學日文等級的例句
並用以下這種格式打給我

若有漢字 前面要有|
漢字後面要有[]
[]裝個漢字的平假名發音

例: "|東京[とうきょう]|大学[だいがく]は|日本[にほん]の|大学[だいがく]ですか"
*/

/*
【需特別做的集數】
5-1 數字 時間 念法
*/

// node upload.js
