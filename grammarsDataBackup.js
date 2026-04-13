// jid 3501 以前的都沒 【tags】 這個key

const data = [
  {
    jid: "0202", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "2", // 集數
    order: "02", // 第幾個
    timestamp: 121, // 影片時間(秒)
    grammarPattern: "(名詞) はどれですか", // 日文文法公式
    grammarSummary: "～はどれですか", // 日文文法(簡式)
    chineseMeaning: "(名詞) 是哪個 ?", // 中文
    chineseSummary: "～是哪個 ?", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|日本[にほん]の|漫画[まんが]はどれですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=OrnbiMedefk&t=121s", // 網址
    videoTitle:
      "日文教学 _初級日語#2｜日語語法解釋 これ／それ／あれ、～はどれですか、～は何ですか、～は誰ですか", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0203", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "2", // 集數
    order: "03", // 第幾個
    timestamp: 214, // 影片時間(秒)
    grammarPattern: "(名詞) は何ですか", // 日文文法公式
    grammarSummary: "～は何ですか", // 日文文法(簡式)
    chineseMeaning: "(名詞) 是什麼 ?", // 中文
    chineseSummary: "～是什麼 ?", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "これは|何[なん]ですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=OrnbiMedefk&t=214s", // 網址
    videoTitle:
      "日文教学 _初級日語#2｜日語語法解釋 これ／それ／あれ、～はどれですか、～は何ですか、～は誰ですか", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0204", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "2", // 集數
    order: "04", // 第幾個
    timestamp: 248, // 影片時間(秒)
    grammarPattern: "(名詞) は誰ですか", // 日文文法公式
    grammarSummary: "～は誰ですか", // 日文文法(簡式)
    chineseMeaning: "(名詞) 是誰 ?", // 中文
    chineseSummary: "～是誰 ?", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|彼女[かのじょ]は|誰[だれ]ですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=OrnbiMedefk&t=248s", // 網址
    videoTitle:
      "日文教学 _初級日語#2｜日語語法解釋 これ／それ／あれ、～はどれですか、～は何ですか、～は誰ですか", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0205", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "2", // 集數
    order: "05", // 第幾個
    timestamp: 293, // 影片時間(秒)
    grammarPattern: "(某大人物) はどなたですか", // 日文文法公式
    grammarSummary: "～はどなたですか", // 日文文法(簡式)
    chineseMeaning: "(某大人物) 是誰 ?", // 中文
    chineseSummary: "～是誰 ?", // 中文(簡式)
    notes: ["屬於尊敬的詢問語法"], // 備註
    examples: [
      {
        japanese: "あの|方[かた]はどなたですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=OrnbiMedefk&t=293s", // 網址
    videoTitle:
      "日文教学 _初級日語#2｜日語語法解釋 これ／それ／あれ、～はどれですか、～は何ですか、～は誰ですか", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0301", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "3", // 集數
    order: "01", // 第幾個
    timestamp: 15, // 影片時間(秒)
    grammarPattern: "ここ / そこ / あそこ + は (地點) です(か)", // 日文文法公式
    grammarSummary: "ここ / そこ / あそこ は ～ です(か)", // 日文文法(簡式)
    chineseMeaning: "這裡 / 那裡 / (更遠的) 那裡 是 (地點) (嗎?)", // 中文
    chineseSummary: "這裡 / 那裡 / (更遠的) 那裡 是 ～ (嗎?)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "ここは|食堂[しょくどう]です",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=jbcq_HlCVQ4&t=15s", // 網址
    videoTitle:
      "日文教学 _初級日語#3｜日語語法解釋 ここ／そこ／あそこは～です、～は～（場所）です、～はどこですか、～も～", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0302", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "3", // 集數
    order: "02", // 第幾個
    timestamp: 100, // 影片時間(秒)
    grammarPattern: "(名詞) は (地點) です(か)", // 日文文法公式
    grammarSummary: "は ～ です(か)", // 日文文法(簡式)
    chineseMeaning: "(名詞) 在 (地點) (嗎?)", // 中文
    chineseSummary: "～在～ (嗎?)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "お|手[て]|洗[あら]いは|三階[さんかい]です",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=jbcq_HlCVQ4&t=100s", // 網址
    videoTitle:
      "日文教学 _初級日語#3｜日語語法解釋 ここ／そこ／あそこは～です、～は～（場所）です、～はどこですか、～も～", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0303", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "3", // 集數
    order: "03", // 第幾個
    timestamp: 236, // 影片時間(秒)
    grammarPattern: "(名詞) はどこですか", // 日文文法公式
    grammarSummary: "どこですか", // 日文文法(簡式)
    chineseMeaning: "(名詞) 在哪裡?", // 中文
    chineseSummary: "～在哪裡?", // 中文(簡式)
    notes: ["尊敬的說法 可用こちら / そちら / あちら / どちら"], // 備註
    examples: [
      {
        japanese: "すみません、|会議室[かいぎしつ]はどちらですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=jbcq_HlCVQ4&t=236s", // 網址
    videoTitle:
      "日文教学 _初級日語#3｜日語語法解釋 ここ／そこ／あそこは～です、～は～（場所）です、～はどこですか、～も～", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0304", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "3", // 集數
    order: "04", // 第幾個
    timestamp: 302, // 影片時間(秒)
    grammarPattern: "(名詞A) も (名詞A)です", // 日文文法公式
    grammarSummary: "も", // 日文文法(簡式)
    chineseMeaning: "A是B也是", // 中文
    chineseSummary: "也是", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese:
          "|図書館[としょかん]は|一階[いっかい]です。お|手[て]|洗[あら]いも|一階[いっかい]です",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=jbcq_HlCVQ4&t=302s", // 網址
    videoTitle:
      "日文教学 _初級日語#3｜日語語法解釋 ここ／そこ／あそこは～です、～は～（場所）です、～はどこですか、～も～", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0401", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "4", // 集數
    order: "01", // 第幾個
    timestamp: 12, // 影片時間(秒)
    grammarPattern: "(名詞A) の (名詞B)", // 日文文法公式
    grammarSummary: "の", // 日文文法(簡式)
    chineseMeaning: "A的B", // 中文
    chineseSummary: "的", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "これは|田中[たなか]さんのパソコン",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=c1Mc-GJHe5k&t=12s", // 網址
    videoTitle:
      "日文教學_初級日語#4 ｜日語語法解釋 ～の～（所属）、この／その／あの～は～です、どれ／どの～、～はいくらですか", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0402", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "4", // 集數
    order: "02", // 第幾個
    timestamp: 64, // 影片時間(秒)
    grammarPattern: "この / その / あの (名詞A) の (名詞B) です", // 日文文法公式
    grammarSummary: "この / その / あの ～ の", // 日文文法(簡式)
    chineseMeaning: "這個 / 那個 / (更遠的那個) A 是 B", // 中文
    chineseSummary: "這個 / 那個 / (更遠的那個) 是 ～ ", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "この|本[ほん]は|大学[だいがく]の|教科書[きょうかしょ]です",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=c1Mc-GJHe5k&t=64s", // 網址
    videoTitle:
      "日文教學_初級日語#4 ｜日語語法解釋 ～の～（所属）、この／その／あの～は～です、どれ／どの～、～はいくらですか", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0403", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "4", // 集數
    order: "03", // 第幾個
    timestamp: 183, // 影片時間(秒)
    grammarPattern: "どれ / どの", // 日文文法公式
    grammarSummary: "どれ / どの", // 日文文法(簡式)
    chineseMeaning: "哪個 / 哪一個", // 中文
    chineseSummary: "哪個 / 哪一個", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese:
          "|日本[にほん]|料理[りょうり]の|中[なか]にどれが|好[す]きですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=c1Mc-GJHe5k&t=183s", // 網址
    videoTitle:
      "日文教學_初級日語#4 ｜日語語法解釋 ～の～（所属）、この／その／あの～は～です、どれ／どの～、～はいくらですか", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0404", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "4", // 集數
    order: "04", // 第幾個
    timestamp: 288, // 影片時間(秒)
    grammarPattern: "(名詞) はいくらですか", // 日文文法公式
    grammarSummary: "いくらですか", // 日文文法(簡式)
    chineseMeaning: "(名詞) 多少錢 ?", // 中文
    chineseSummary: "多少錢", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "この|漫画[まんが]はいくらですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=c1Mc-GJHe5k&t=288s", // 網址
    videoTitle:
      "日文教學_初級日語#4 ｜日語語法解釋 ～の～（所属）、この／その／あの～は～です、どれ／どの～、～はいくらですか", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0502", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "5", // 集數
    order: "02", // 第幾個
    timestamp: 227, // 影片時間(秒)
    grammarPattern: "今何時ですか", // 日文文法公式
    grammarSummary: "今何時ですか", // 日文文法(簡式)
    chineseMeaning: "現在幾點?", // 中文
    chineseSummary: "現在幾點?", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|今[いま]|何[なん]|時[じ]ですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=oiIUGOwQhmY&t=227s", // 網址
    videoTitle:
      "日文教学_初級日語#5｜日語語法解釋 何時何分、今何時ですか、〔時間〕に～、〔時間〕から〔時間〕まで", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0503", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "5", // 集數
    order: "03", // 第幾個
    timestamp: 325, // 影片時間(秒)
    grammarPattern: "(時間)に", // 日文文法公式
    grammarSummary: "(時間)に", // 日文文法(簡式)
    chineseMeaning: "在(時間)～", // 中文
    chineseSummary: "在(時間)", // 中文(簡式)
    notes: ["に作為特定的時間點的助詞 為其中一種用法"], // 備註
    examples: [
      {
        japanese: "|午後[ごご]|一[いち]|時[じ]に|休[やす]みます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=oiIUGOwQhmY&t=325s", // 網址
    videoTitle:
      "日文教学_初級日語#5｜日語語法解釋 何時何分、今何時ですか、〔時間〕に～、〔時間〕から〔時間〕まで", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0504", // 自製id 第幾集的第幾個 例:第1集第1個
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
  {
    jid: "0601", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "6", // 集數
    order: "01", // 第幾個
    timestamp: 13, // 影片時間(秒)
    grammarPattern: "何月何日", // 日文文法公式
    grammarSummary: "何月何日", // 日文文法(簡式)
    chineseMeaning: "幾月幾號", // 中文
    chineseSummary: "幾月幾號", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese:
          "|誕生日[たんじょうび]は|何[なん]|月[がつ]|何[なん]|日[にち]ですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=qWKItLmn_3g&t=13s", // 網址
    videoTitle:
      "日文教學 初級日語#6｜日語語法解釋 何月何日、何曜日、〔名詞〕はいつですか／いつ～、〔名詞〕と〔名詞〕", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0602", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "6", // 集數
    order: "02", // 第幾個
    timestamp: 413, // 影片時間(秒)
    grammarPattern: "何曜日", // 日文文法公式
    grammarSummary: "何曜日", // 日文文法(簡式)
    chineseMeaning: "星期幾", // 中文
    chineseSummary: "星期幾", // 中文(簡式)
    notes: [
      "星期一 月曜日 げつようび",
      "星期二 火曜日 かようび",
      "星期三 水曜日 すいようび",
      "星期四 木曜日 もくようび",
      "星期五 金曜日 きんようび",
      "星期六 土曜日 どようび",
      "星期日 日曜日 にちようび",
      "前天 一昨日 おととい",
      "昨天 昨日 きのう",
      "今天 今日 きょう",
      "明天 明日 あした",
      "後天 明後日 あさって",
    ], // 備註
    examples: [
      {
        japanese: "|今日[きょう]は|何曜日[なんようび]ですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=qWKItLmn_3g&t=413s", // 網址
    videoTitle:
      "日文教學 初級日語#6｜日語語法解釋 何月何日、何曜日、〔名詞〕はいつですか／いつ～、〔名詞〕と〔名詞〕", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0603", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "6", // 集數
    order: "03", // 第幾個
    timestamp: 557, // 影片時間(秒)
    grammarPattern: "(名詞) はいつですか", // 日文文法公式
    grammarSummary: "～ いつですか", // 日文文法(簡式)
    chineseMeaning: "(名詞) 是什麼時候?", // 中文
    chineseSummary: "～ 是什麼時候?", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|叶[かな]えられる|日[ひ]はいつですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=qWKItLmn_3g&t=557s", // 網址
    videoTitle:
      "日文教學 初級日語#6｜日語語法解釋 何月何日、何曜日、〔名詞〕はいつですか／いつ～、〔名詞〕と〔名詞〕", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0604", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "6", // 集數
    order: "04", // 第幾個
    timestamp: 668, // 影片時間(秒)
    grammarPattern: "いつ (動詞)", // 日文文法公式
    grammarSummary: "いつ～", // 日文文法(簡式)
    chineseMeaning: "何時做 (動詞)", // 中文
    chineseSummary: "何時～", // 中文(簡式)
    notes: ["可加入から～まで～變成 : 從什麼時候到什麼時候"], // 備註
    examples: [
      {
        japanese: "いつ|寝[ね]ますか",
        chinese: "",
      },
      {
        japanese: "いつからいつまで|休[やす]みます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=qWKItLmn_3g&t=668s", // 網址
    videoTitle:
      "日文教學 初級日語#6｜日語語法解釋 何月何日、何曜日、〔名詞〕はいつですか／いつ～、〔名詞〕と〔名詞〕", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0605", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "6", // 集數
    order: "05", // 第幾個
    timestamp: 763, // 影片時間(秒)
    grammarPattern: "と", // 日文文法公式
    grammarSummary: "と", // 日文文法(簡式)
    chineseMeaning: "和", // 中文
    chineseSummary: "和", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|土曜日[どようび]と|日曜日[にちようび]に|休[やす]みます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=qWKItLmn_3g&t=763s", // 網址
    videoTitle:
      "日文教學 初級日語#6｜日語語法解釋 何月何日、何曜日、〔名詞〕はいつですか／いつ～、〔名詞〕と〔名詞〕", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0801", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "8", // 集數
    order: "01", // 第幾個
    timestamp: 128, // 影片時間(秒)
    grammarPattern: "(場所) に (人 / 物) が + あります / います", // 日文文法公式
    grammarSummary: "が + あります / います", // 日文文法(簡式)
    chineseMeaning: "在 (場所) 有 (人 / 物)", // 中文
    chineseSummary: "有～", // 中文(簡式)
    notes: [
      "あります : 用於不具自我意志、不能自主移動的東西",
      "例 : 花、草、家具",
      "います : 用於有自我意志、能主動移動的生物",
      "例 : 人、動物、蟲",
      "模糊地帶 : 機器人、死掉的動物、飛奔過來的汽車",
      "公式以ます形呈現 需依句意更換動詞形態",
    ], // 備註
    examples: [
      {
        japanese: "|部屋[へや]に|妹[いもうと]がいます",
        chinese: "",
      },
      {
        japanese: "|教室[きょうしつ]に|何[なに]がありますか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=zTFa-yUqkbU&t=128s", // 網址
    videoTitle:
      "日文教學_初級日語#8 ｜日語語法解釋 あります／います、位置を表す言葉", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0802", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "8", // 集數
    order: "02", // 第幾個
    timestamp: 320, // 影片時間(秒)
    grammarPattern: "(人 / 物) は (場所) に + あります / います", // 日文文法公式
    grammarSummary: "に + あります / います", // 日文文法(簡式)
    chineseMeaning: "(人 / 物) 在 (場所)", // 中文
    chineseSummary: "在～", // 中文(簡式)
    notes: [
      "あります : 用於不具自我意志、不能自主移動的東西",
      "例 : 花、草、家具",
      "います : 用於有自我意志、能主動移動的生物",
      "例 : 人、動物、蟲",
      "模糊地帶 : 機器人、死掉的動物、飛奔過來的汽車",
      "公式以ます形呈現 需依句意更換動詞形態",
    ], // 備註
    examples: [
      {
        japanese: "パソコンは|部屋[へや]にあります",
        chinese: "",
      },
      {
        japanese: "|猫[ねこ]はどこにいますか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=zTFa-yUqkbU&t=320s", // 網址
    videoTitle:
      "日文教學_初級日語#8 ｜日語語法解釋 あります／います、位置を表す言葉", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0803", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "8", // 集數
    order: "03", // 第幾個
    timestamp: 466, // 影片時間(秒)
    grammarPattern: "(名詞) の (方位)", // 日文文法公式
    grammarSummary: "(方位)", // 日文文法(簡式)
    chineseMeaning: "(名詞) 的 (方位)", // 中文
    chineseSummary: "(方位)", // 中文(簡式)
    notes: [
      "上面 上 うえ",
      "下面 下 した",
      "旁邊 隣 となり",
      "前面 前 まえ",
      "後面 後ろ うしろ",
      "側邊 側 そば",
      "裡面 中 なか",
      "外面 外 そと",
    ], // 備註
    examples: [
      {
        japanese: "|机[つくえ]の|上[うえ]に|手紙[てがみ]があります",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=zTFa-yUqkbU&t=466s", // 網址
    videoTitle:
      "日文教學_初級日語#8 ｜日語語法解釋 あります／います、位置を表す言葉", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0901", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "9", // 集數
    order: "01", // 第幾個
    timestamp: 14, // 影片時間(秒)
    grammarPattern: "(場所) へ", // 日文文法公式
    grammarSummary: "へ", // 日文文法(簡式)
    chineseMeaning: "(表示方向的助詞)", // 中文
    chineseSummary: "(表示方向的助詞)", // 中文(簡式)
    notes: ["【へ】在此用法讀音會變成【え】"], // 備註
    examples: [
      {
        japanese: "|森[もり]さんは|北海道[ほっかいど]へ|行[い]きます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=4PSBJXCGyc0&t=14s", // 網址
    videoTitle:
      "日文教學_初級日語#9 ｜日語語法解釋 方向的助詞へ、表示移動的起点から、表示交通工具的助詞で、表示共同做某事的対象と", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0902", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "9", // 集數
    order: "02", // 第幾個
    timestamp: 152, // 影片時間(秒)
    grammarPattern: "(場所) から", // 日文文法公式
    grammarSummary: "～から", // 日文文法(簡式)
    chineseMeaning: "從 (場所) ", // 中文
    chineseSummary: "從～", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "あの|方[かた]はどこから|来[き]ましたか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=4PSBJXCGyc0&t=152s", // 網址
    videoTitle:
      "日文教學_初級日語#9 ｜日語語法解釋 方向的助詞へ、表示移動的起点から、表示交通工具的助詞で、表示共同做某事的対象と", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0903", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "9", // 集數
    order: "03", // 第幾個
    timestamp: 304, // 影片時間(秒)
    grammarPattern: "(交通工具) で", // 日文文法公式
    grammarSummary: "～で", // 日文文法(簡式"
    chineseMeaning: "(表示透過 (交通工具) 移動) ", // 中文
    chineseSummary: "(表示透過 (交通工具) 移動)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|函館[はこだて]まで|飛行機[ひこうき]で|行[い]きます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=4PSBJXCGyc0&t=304s", // 網址
    videoTitle:
      "日文教學_初級日語#9 ｜日語語法解釋 方向的助詞へ、表示移動的起点から、表示交通工具的助詞で、表示共同做某事的対象と", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "0904", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "9", // 集數
    order: "04", // 第幾個
    timestamp: 468, // 影片時間(秒)
    grammarPattern: "(人A) は (人B) と", // 日文文法公式
    grammarSummary: "と～", // 日文文法(簡式"
    chineseMeaning: "A和B一起", // 中文
    chineseSummary: "一起～", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese:
          "|山田[やまだ]さんは|誰[だれ]と|学校[がっこう]へ|来[き]ましたか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=4PSBJXCGyc0&t=468s", // 網址
    videoTitle:
      "日文教學_初級日語#9 ｜日語語法解釋 方向的助詞へ、表示移動的起点から、表示交通工具的助詞で、表示共同做某事的対象と", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1001", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "10", // 集數
    order: "01", // 第幾個
    timestamp: 17, // 影片時間(秒)
    grammarPattern: "(名詞) を (動詞)", // 日文文法公式
    grammarSummary: "を", // 日文文法(簡式"
    chineseMeaning: "對 (名詞) 做 (動詞)", // 中文
    chineseSummary: "( (動詞) 的助詞 )", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|名前[なまえ]を|書[か]きます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=4bSohkWDT1Q&t=17s", // 網址
    videoTitle:
      "日文教学_初級日語#10｜日語語法解釋 基本動詞的用法、表示動作進行的地方で、表示邀請／提議的說法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1002", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "10", // 集數
    order: "02", // 第幾個
    timestamp: 238, // 影片時間(秒)
    grammarPattern: "(場所) で (動詞)", // 日文文法公式
    grammarSummary: "(場所) で～", // 日文文法(簡式"
    chineseMeaning: "在 (場所) 做 (動詞)", // 中文
    chineseSummary: "在 (場所) 做 ～", // 中文(簡式)
    notes: ["表示動作進行的地方"], // 備註
    examples: [
      {
        japanese: "|浅草[あさくさ]で|遊[あそ]びます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=4bSohkWDT1Q&t=238s", // 網址
    videoTitle:
      "日文教学_初級日語#10｜日語語法解釋 基本動詞的用法、表示動作進行的地方で、表示邀請／提議的說法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1003", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "10", // 集數
    order: "03", // 第幾個
    timestamp: 355, // 影片時間(秒)
    grammarPattern: "(動詞連用形) + ませんか", // 日文文法公式
    grammarSummary: "ませんか", // 日文文法(簡式"
    chineseMeaning: "做 (動詞) 好嗎?", // 中文
    chineseSummary: "做 (動詞) 好嗎?", // 中文(簡式)
    notes: ["動詞連用形為動詞ます形 去掉ます", "表示邀約、提議"], // 備註
    examples: [
      {
        japanese: "|一緒[いっしょ]に|昼[ひる]ご|飯[はん]を|食[た]べませんか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=4bSohkWDT1Q&t=355s", // 網址
    videoTitle:
      "日文教学_初級日語#10｜日語語法解釋 基本動詞的用法、表示動作進行的地方で、表示邀請／提議的說法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1004", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "10", // 集數
    order: "04", // 第幾個
    timestamp: 456, // 影片時間(秒)
    grammarPattern: "(動詞連用形) + ましょう", // 日文文法公式
    grammarSummary: "ましょう", // 日文文法(簡式"
    chineseMeaning: "做 (動詞) 吧?", // 中文
    chineseSummary: "做 (動詞) 吧?", // 中文(簡式)
    notes: ["動詞連用形為動詞ます形 去掉ます", "表示提議 也可用於被邀請的回答"], // 備註
    examples: [
      {
        japanese: "ちょっと|休[やす]みましょう",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=4bSohkWDT1Q&t=456s", // 網址
    videoTitle:
      "日文教学_初級日語#10｜日語語法解釋 基本動詞的用法、表示動作進行的地方で、表示邀請／提議的說法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1101", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "11", // 集數
    order: "01", // 第幾個
    timestamp: 17, // 影片時間(秒)
    grammarPattern: "( 工具 / 方法 ) で + (動詞)", // 日文文法公式
    grammarSummary: "( 工具 / 方法 ) で～", // 日文文法(簡式"
    chineseMeaning: "用 ( 工具 / 方法 ) 做 (動詞)", // 中文
    chineseSummary: "用 ( 工具 / 方法 ) ～", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|日本[にほん]|語[ご]でサイトを|作[つく]ります",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=2lziJ1gE1rU&t=17s", // 網址
    videoTitle:
      "日文教學_初級日語#11 ｜日語語法解釋 表示手段的助詞で、～をください、～か～", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1102", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "11", // 集數
    order: "02", // 第幾個
    timestamp: 137, // 影片時間(秒)
    grammarPattern: "(名詞A) か (名詞B)", // 日文文法公式
    grammarSummary: "か～", // 日文文法(簡式"
    chineseMeaning: "A或B", // 中文
    chineseSummary: "或", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|毎朝[まいあさ]パンかおにぎりを|食[た]べます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=2lziJ1gE1rU&t=137s", // 網址
    videoTitle:
      "日文教學_初級日語#11 ｜日語語法解釋 表示手段的助詞で、～をください、～か～", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1103", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "11", // 集數
    order: "03", // 第幾個
    timestamp: 210, // 影片時間(秒)
    grammarPattern: "(名詞) をください", // 日文文法公式
    grammarSummary: "～ください", // 日文文法(簡式"
    chineseMeaning: "請給我 (名詞)", // 中文
    chineseSummary: "請～", // 中文(簡式)
    notes: ["無論取得物品時有沒有消費 都可以使用"], // 備註
    examples: [
      {
        japanese: "|水[みず]をください",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=2lziJ1gE1rU&t=210s", // 網址
    videoTitle:
      "日文教學_初級日語#11 ｜日語語法解釋 表示手段的助詞で、～をください、～か～", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1201", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "12", // 集數
    order: "01", // 第幾個
    timestamp: 146, // 影片時間(秒)
    grammarPattern: "(人A) は (人B) に (名詞) をあげます", // 日文文法公式
    grammarSummary: "あげます", // 日文文法(簡式"
    chineseMeaning: "A給B (名詞)", // 中文
    chineseSummary: "給", // 中文(簡式)
    notes: [
      "建議先於片頭了解「內人」、「外人」概念",
      "公式以ます形呈現 需依句意更換動詞形態",
    ], // 備註
    examples: [
      {
        japanese: "|姉[あね]は|森[もり]さんにチョコレートをあげました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=_3kopk4sRn8&t=146s", // 網址
    videoTitle:
      "日文教學_初級日語#12 ｜日語語法解釋 あげます／もらいます／くれます", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1202", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "12", // 集數
    order: "02", // 第幾個
    timestamp: 231, // 影片時間(秒)
    grammarPattern: "(人A) は (人B) に (名詞) をもらいます", // 日文文法公式
    grammarSummary: "もらいます", // 日文文法(簡式"
    chineseMeaning: "A從B那邊得到 (名詞)", // 中文
    chineseSummary: "得到", // 中文(簡式)
    notes: [
      "建議先於片頭了解「內人」、「外人」概念",
      "公式以ます形呈現 需依句意更換動詞形態",
      "用於從企業、機構、學校得到東西時 會用「から」代替「に」",
    ], // 備註
    examples: [
      {
        japanese: "|母[はは]は|先生[せんせい]に|本[ほん]をもらいました",
        chinese: "",
      },
      {
        japanese:
          "|妹[いもうと]は|学校[がっこう]から|記念品[きねんひん]をもらいました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=_3kopk4sRn8&t=231s", // 網址
    videoTitle:
      "日文教學_初級日語#12 ｜日語語法解釋 あげます／もらいます／くれます", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1203", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "12", // 集數
    order: "03", // 第幾個
    timestamp: 356, // 影片時間(秒)
    grammarPattern: "(人A) は (人B) に (名詞) をくれます", // 日文文法公式
    grammarSummary: "くれます", // 日文文法(簡式"
    chineseMeaning: "A給B (名詞)", // 中文
    chineseSummary: "給", // 中文(簡式)
    notes: [
      "建議先於片頭了解「內人」、「外人」概念",
      "公式以ます形呈現 需依句意更換動詞形態",
    ], // 備註
    examples: [
      {
        japanese:
          "|昨日[きのう]|先生[せんせい]は|娘[むすめ]に|飴[あめ]をくれました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=_3kopk4sRn8&t=356s", // 網址
    videoTitle:
      "日文教學_初級日語#12 ｜日語語法解釋 あげます／もらいます／くれます", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1301", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "13", // 集數
    order: "01", // 第幾個
    timestamp: 101, // 影片時間(秒)
    grammarPattern: "【 現在 + 肯定 】(名詞) は (い形容詞) です ", // 日文文法公式
    grammarSummary: "(い形容詞) です", // 日文文法(簡式)"
    chineseMeaning: "( 表示 (名詞) 帶有 (形容詞) 的感覺 )", // 中文
    chineseSummary: "(帶有 (形容詞) 的感覺 )", // 中文(簡式)
    notes: ["建議先於片頭了解「い形容詞」、「な形容詞」"], // 備註
    examples: [
      {
        japanese: "|妹[いもうと]の|友達[ともだち]は|可愛[かわい]いです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=0Z_H_cpEA9k&t=101s", // 網址
    videoTitle:
      "日文教學_初級日語#13｜日語語法解釋 「可愛的人」不是「可愛いの人」!!! い形容詞的用法（否定形、過去形、＋名詞）", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1302", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "13", // 集數
    order: "02", // 第幾個
    timestamp: 194, // 影片時間(秒)
    grammarPattern:
      "【 現在 + 否定 】(名詞) は (い形容詞 <去除い> ) + くないです / くありません ", // 日文文法公式
    grammarSummary: "(い形容詞 <去除い> ) + くないです / くありません", // 日文文法(簡式)"
    chineseMeaning: "( 表示 (名詞) 不具有 (形容詞) 的感覺 )", // 中文
    chineseSummary: "(不具有  (形容詞) 的感覺 )", // 中文(簡式)
    notes: [
      "建議先於片頭了解「い形容詞」、「な形容詞」",
      "特例 : 良い ⭢ よくないです / よくありません",
    ], // 備註
    examples: [
      {
        japanese: "|抹茶[まっちゃ]は|甘[あま]くないです",
        chinese: "",
      },
      {
        japanese: "|試験[しけん]の結果[けっか]はあまりよくないです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=0Z_H_cpEA9k&t=194s", // 網址
    videoTitle:
      "日文教學_初級日語#13｜日語語法解釋 「可愛的人」不是「可愛いの人」!!! い形容詞的用法（否定形、過去形、＋名詞）", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1303", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "13", // 集數
    order: "03", // 第幾個
    timestamp: 334, // 影片時間(秒)
    grammarPattern:
      "【 過去 + 肯定 】(名詞) は (い形容詞 <去除い> ) + かったです ", // 日文文法公式
    grammarSummary: "(い形容詞 <去除い> ) + かったです", // 日文文法(簡式)"
    chineseMeaning: "(【 過去式 】表示 (名詞) 帶有 (形容詞) 的感覺 )", // 中文
    chineseSummary: "(【 過去式 】帶有 (形容詞) 的感覺 )", // 中文(簡式)
    notes: ["建議先於片頭了解「い形容詞」、「な形容詞」"], // 備註
    examples: [
      {
        japanese: "|旅行[りょこう]は|楽[たの]しかったです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=0Z_H_cpEA9k&t=334s", // 網址
    videoTitle:
      "日文教學_初級日語#13｜日語語法解釋 「可愛的人」不是「可愛いの人」!!! い形容詞的用法（否定形、過去形、＋名詞）", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1304", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "13", // 集數
    order: "04", // 第幾個
    timestamp: 398, // 影片時間(秒)
    grammarPattern:
      "【 過去 + 否定 】(名詞) は (い形容詞 <去除い> ) + くなかったです / くありませんでした ", // 日文文法公式
    grammarSummary:
      "(い形容詞 <去除い> ) + くなかったです / くありませんでした ", // 日文文法(簡式)"
    chineseMeaning: "(【 過去式 】表示 (名詞) 不具有 (形容詞) 的感覺  )", // 中文
    chineseSummary: "(【 過去式 】不具有 (形容詞) 的感覺 )", // 中文(簡式)
    notes: ["建議先於片頭了解「い形容詞」、「な形容詞」"], // 備註
    examples: [
      {
        japanese: "ホテルの部屋へやは|広[ひろ]くなっかです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=0Z_H_cpEA9k&t=398s", // 網址
    videoTitle:
      "日文教學_初級日語#13｜日語語法解釋 「可愛的人」不是「可愛いの人」!!! い形容詞的用法（否定形、過去形、＋名詞）", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1305", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "13", // 集數
    order: "05", // 第幾個
    timestamp: 507, // 影片時間(秒)
    grammarPattern: "(い形容詞) + (名詞)", // 日文文法公式
    grammarSummary: "(い形容詞) + (名詞)", // 日文文法(簡式)"
    chineseMeaning: "(形容詞) 的 (名詞)", // 中文
    chineseSummary: "(形容詞) 的 (名詞)", // 中文(簡式)
    notes: ["不需要加「の」"], // 備註
    examples: [
      {
        japanese: "|美[うつく]しい|景色[けしき]",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=0Z_H_cpEA9k&t=507s", // 網址
    videoTitle:
      "日文教學_初級日語#13｜日語語法解釋 「可愛的人」不是「可愛いの人」!!! い形容詞的用法（否定形、過去形、＋名詞）", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1401", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "14", // 集數
    order: "01", // 第幾個
    timestamp: 30, // 影片時間(秒)
    grammarPattern: "【 現在 + 肯定 】(名詞) は (な形容詞) です ", // 日文文法公式
    grammarSummary: "(な形容詞) です", // 日文文法(簡式)"
    chineseMeaning: "( 表示 (名詞) 帶有 (形容詞) 的感覺 )", // 中文
    chineseSummary: "(帶有 (形容詞) 的感覺 )", // 中文(簡式)
    notes: ["建議先於第13集片頭了解「い形容詞」、「な形容詞」"], // 備註
    examples: [
      {
        japanese: "|明日[あした]は|暇[ひま]です",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=s6ALcATJT-I&t=30s", // 網址
    videoTitle:
      "日文教學_初級日語#14 ｜日語語法 な形容詞的用法（否定形、過去形、＋名詞）", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1402", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "14", // 集數
    order: "02", // 第幾個
    timestamp: 128, // 影片時間(秒)
    grammarPattern:
      "【 現在 + 否定 】(名詞) は (な形容詞) + じゃないです / じゃありません / ではありません", // 日文文法公式
    grammarSummary:
      "(な形容詞) + じゃないです / じゃありません / ではありません", // 日文文法(簡式)"
    chineseMeaning: "( 表示 (名詞) 不具有 (形容詞) 的感覺 )", // 中文
    chineseSummary: "(不具有  (形容詞) 的感覺 )", // 中文(簡式)
    notes: ["建議先於第13集片頭了解「い形容詞」、「な形容詞」"], // 備註
    examples: [
      {
        japanese: "この|問題[もんだい]は|簡単[かんたん]じゃないです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=s6ALcATJT-I&t=128s", // 網址
    videoTitle:
      "日文教學_初級日語#14 ｜日語語法 な形容詞的用法（否定形、過去形、＋名詞）", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1403", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "14", // 集數
    order: "03", // 第幾個
    timestamp: 253, // 影片時間(秒)
    grammarPattern: "【 過去 + 肯定 】(名詞) は (な形容詞) + でした", // 日文文法公式
    grammarSummary: "(な形容詞) + でした", // 日文文法(簡式)"
    chineseMeaning: "(【 過去式 】表示 (名詞) 帶有 (形容詞) 的感覺 )", // 中文
    chineseSummary: "(【 過去式 】帶有 (形容詞) 的感覺 )", // 中文(簡式)
    notes: ["建議先於第13集片頭了解「い形容詞」、「な形容詞」"], // 備註
    examples: [
      {
        japanese:
          "|子供[こども]の|時[とき]、|日本[にほん]|語[ご]が|下手[へた]でした",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=s6ALcATJT-I&t=253s", // 網址
    videoTitle:
      "日文教學_初級日語#14 ｜日語語法 な形容詞的用法（否定形、過去形、＋名詞）", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1404", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "14", // 集數
    order: "04", // 第幾個
    timestamp: 349, // 影片時間(秒)
    grammarPattern:
      "【 過去 + 否定 】(名詞) は (な形容詞) + じゃなかったです / じゃありませんでした / ではありませんでした", // 日文文法公式
    grammarSummary:
      "(な形容詞) + じゃなかったです / じゃありませんでした / ではありませんでした", // 日文文法(簡式)"
    chineseMeaning: "(【 過去式 】表示 (名詞) 不具有 (形容詞) 的感覺  )", // 中文
    chineseSummary: "(【 過去式 】不具有 (形容詞) 的感覺 )", // 中文(簡式)
    notes: ["建議先於第13集片頭了解「い形容詞」、「な形容詞」"], // 備註
    examples: [
      {
        japanese:
          "|昨日[きのう]、|図書館[としょかん]は|静[しず]かじゃなかったです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=s6ALcATJT-I&t=349s", // 網址
    videoTitle:
      "日文教學_初級日語#14 ｜日語語法 な形容詞的用法（否定形、過去形、＋名詞）", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1405", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "14", // 集數
    order: "05", // 第幾個
    timestamp: 419, // 影片時間(秒)
    grammarPattern: "(な形容詞) + な + (名詞)", // 日文文法公式
    grammarSummary: "(な形容詞) + な + (名詞)", // 日文文法(簡式)"
    chineseMeaning: "(形容詞) 的 (名詞)", // 中文
    chineseSummary: "(形容詞) 的 (名詞)", // 中文(簡式)
    notes: ["不需要加「の」"], // 備註
    examples: [
      {
        japanese: "ユカさんは|有名[ゆうめい]な|先生[せんせい]です",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=s6ALcATJT-I&t=419s", // 網址
    videoTitle:
      "日文教學_初級日語#14 ｜日語語法 な形容詞的用法（否定形、過去形、＋名詞）", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1406", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "14", // 集數
    order: "06", // 第幾個
    timestamp: 460, // 影片時間(秒)
    grammarPattern: "どんな + (名詞)", // 日文文法公式
    grammarSummary: "どんな～", // 日文文法(簡式)"
    chineseMeaning: "什麼樣的 (名詞)", // 中文
    chineseSummary: "什麼樣的～", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "どんな|女子[じょし]が|好[す]きですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=s6ALcATJT-I&t=460s", // 網址
    videoTitle:
      "日文教學_初級日語#14 ｜日語語法 な形容詞的用法（否定形、過去形、＋名詞）", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1501", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "15", // 集數
    order: "01", // 第幾個
    timestamp: 47, // 影片時間(秒)
    grammarPattern: "(名詞A) は (名詞B) が (形容詞) です", // 日文文法公式
    grammarSummary: "(名詞A) は (名詞B) が (形容詞) です", // 日文文法(簡式)"
    chineseMeaning: " ( A對B有 (形容詞) 的感覺 )", // 中文
    chineseSummary: " ( A對B有 (形容詞) 的感覺 )", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|私[わたし]は|日本[にほん]が|好[す]きです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=i80wLVNCGeg&t=47s", // 網址
    videoTitle:
      "日文教學 初級日語#15 ｜日語語法解釋 表示理由的だから和から的用法，～は～が好きです／怖いです／わかります／できます／上手です", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1502", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "15", // 集數
    order: "02", // 第幾個
    timestamp: 220, // 影片時間(秒)
    grammarPattern:
      "(名詞A) は (名詞B) が + わかります / できます / 上手です / 下手です", // 日文文法公式
    grammarSummary: "わかります / できます / 上手です / 下手です", // 日文文法(簡式)"
    chineseMeaning: "A理解B / A會做B / A擅長B / A不擅長B", // 中文
    chineseSummary: "理解 / 可以做到 / 擅長 / 不擅長", // 中文(簡式)
    notes: [
      "為第15集的第1個文法的衍生用法 在後面加常用的動詞或形容詞",
      "公式以ます形呈現 需依句意更換動詞形態",
    ], // 備註
    examples: [
      {
        japanese: "|佐藤[さとう]さんは|日本[にほん]|語[ご]がわかります",
        chinese: "",
      },
      {
        japanese: "|田中[たなか]さんは|料理[りょうり]ができます",
        chinese: "",
      },
      {
        japanese: "|妹[いもうと]は|歌[うた]が|上手[じょうず]です",
        chinese: "",
      },
      {
        japanese: "|弟[おとうと]は|運動[うんどう]が|下手[へた]です",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=i80wLVNCGeg&t=220s", // 網址
    videoTitle:
      "日文教學 初級日語#15 ｜日語語法解釋 表示理由的だから和から的用法，～は～が好きです／怖いです／わかります／できます／上手です", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1503", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "15", // 集數
    order: "03", // 第幾個
    timestamp: 382, // 影片時間(秒)
    grammarPattern: "だから、 / ですから、", // 日文文法公式
    grammarSummary: "だから、 / ですから、", // 日文文法(簡式)"
    chineseMeaning: "所以～", // 中文
    chineseSummary: "所以～", // 中文(簡式)
    notes: ["為獨立使用", "「ですから」屬於禮貌的說法"], // 備註
    examples: [
      {
        japanese:
          "|雨[あめ]が|降[ふ]っています。だから、|買[か]い|物[もの]に|行[い]きません",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=i80wLVNCGeg&t=382s", // 網址
    videoTitle:
      "日文教學 初級日語#15 ｜日語語法解釋 表示理由的だから和から的用法，～は～が好きです／怖いです／わかります／できます／上手です", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1504", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "15", // 集數
    order: "04", // 第幾個
    timestamp: 468, // 影片時間(秒)
    grammarPattern: "(原因) から", // 日文文法公式
    grammarSummary: "～から", // 日文文法(簡式)"
    chineseMeaning: "因為(原因) ", // 中文
    chineseSummary: "因為～", // 中文(簡式)
    notes: ["不能獨立使用"], // 備註
    examples: [
      {
        japanese:
          "|佐藤[さとう]さんは|日本[にほん]|語[ご]がわかりますから、|通訳[つうやく]ができます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=i80wLVNCGeg&t=468s", // 網址
    videoTitle:
      "日文教學 初級日語#15 ｜日語語法解釋 表示理由的だから和から的用法，～は～が好きです／怖いです／わかります／できます／上手です", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1601", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "16", // 集數
    order: "01", // 第幾個
    timestamp: 36, // 影片時間(秒)
    grammarPattern: "(人) に会います ", // 日文文法公式
    grammarSummary: "会います", // 日文文法(簡式)"
    chineseMeaning: "和 (人) 見面 ", // 中文
    chineseSummary: "見面", // 中文(簡式)
    notes: ["公式以ます形呈現 需依句意更換動詞形態"], // 備註
    examples: [
      {
        japanese: "|明日[あした]、|友達[ともだち]に|会[あ]います",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=IIMeVmUbM5M&t=36s", // 網址
    videoTitle:
      "日文教學_初級日語#16｜日語語法解釋 表示頻率的副詞いつも、よく、時々、たまに、あまり、全然，～に会います，もう～", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1602", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "16", // 集數
    order: "02", // 第幾個
    timestamp: 162, // 影片時間(秒)
    grammarPattern: "もう (動詞) / (名詞)", // 日文文法公式
    grammarSummary: "もう～", // 日文文法(簡式)"
    chineseMeaning: "已經～", // 中文
    chineseSummary: "已經～", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|今日[きょう]の|新聞[しんぶん]をもう|読[よ]みました",
        chinese: "",
      },
      {
        japanese:
          "もう|三月[さんがつ]ですね。|少[すこ]し|暖[あたた]かく|なりました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=IIMeVmUbM5M&t=162s", // 網址
    videoTitle:
      "日文教學_初級日語#16｜日語語法解釋 表示頻率的副詞いつも、よく、時々、たまに、あまり、全然，～に会います，もう～", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1603", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "16", // 集數
    order: "03", // 第幾個
    timestamp: 308, // 影片時間(秒)
    grammarPattern:
      "いつも / よく / 時々 / たまに / あまり + (動詞否定形) / 全然 + (動詞否定形)", // 日文文法公式
    grammarSummary:
      "いつも / よく / 時々 / たまに / あまり + (動詞否定形) / 全然 + (動詞否定形)", // 日文文法(簡式)"
    chineseMeaning: "總是 / 經常 / 有時候 / 偶爾 / 不太 / 完全不", // 中文
    chineseSummary: "總是 / 經常 / 有時候 / 偶爾 / 不太 / 完全不", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|私[わたし]はいつも|朝[あさ]|御飯[ごはん]を|食[た]べます",
        chinese: "",
      },
      {
        japanese: "|休[やす]みの|日[ひ]はよく|運動[うんどう]をします",
        chinese: "",
      },
      {
        japanese: "|時々[ときどき]、|公園[こうえん]を|散歩[さんぽ]します",
        chinese: "",
      },
      {
        japanese: "たまに|一人[ひとり]で|映画[えいが]を|見[み]に|行[い]きます",
        chinese: "",
      },
      {
        japanese: "|最近[さいきん]、あまり|本[ほん]を|読[よ]みません",
        chinese: "",
      },
      {
        japanese: "|昨日[きのう]は|全然[ぜんぜん]|寝[ね]ませんでした",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=IIMeVmUbM5M&t=308s", // 網址
    videoTitle:
      "日文教學_初級日語#16｜日語語法解釋 表示頻率的副詞いつも、よく、時々、たまに、あまり、全然，～に会います，もう～", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1703", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "17", // 集數
    order: "03", // 第幾個
    timestamp: 731, // 影片時間(秒)
    grammarPattern: "(量詞) + (動詞)", // 日文文法公式
    grammarSummary: "(量詞) + (動詞)", // 日文文法(簡式)"
    chineseMeaning: "(表示執行動作的數量)", // 中文
    chineseSummary: "(表示執行動作的數量)", // 中文(簡式)
    notes: ["句構先後和中文相反"], // 備註
    examples: [
      {
        japanese: "|本[ほん]を|二[に]|冊[さつ]|買[か]いました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=F5pchaZBzOA&t=731s", // 網址
    videoTitle:
      "日文教學_初級日語#17 ｜日語語法解釋 量詞、数字＋量詞的読音、〔名詞（数量）〕＋動詞、〔名詞（数量）〕＋で～", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1704", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "17", // 集數
    order: "04", // 第幾個
    timestamp: 834, // 影片時間(秒)
    grammarPattern: "(量詞) で", // 日文文法公式
    grammarSummary: "(量詞) で", // 日文文法(簡式)"
    chineseMeaning: "(量詞) 合計共～ / 在(量詞)之內 / 用(量詞)～", // 中文
    chineseSummary: "合計共～ / 在(量詞)之內 / 用(量詞)～", // 中文(簡式)
    notes: [
      "表示數量的總結或限制 或 限定在某個數量範圍內完成動作",
      "量詞為一個的時候 不用加で",
    ], // 備註
    examples: [
      {
        japanese:
          "りんごを|三[みっ]つで|五百[ごひゃく]|円[えん]払[はら]いました",
        chinese: "",
      },
      {
        japanese:
          " |一[いっ]|日[にち]|三[さん]|回[かい]|薬[くすり]を|飲[の]みます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=F5pchaZBzOA&t=834s", // 網址
    videoTitle:
      "日文教學_初級日語#17 ｜日語語法解釋 量詞、数字＋量詞的読音、〔名詞（数量）〕＋動詞、〔名詞（数量）〕＋で～", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1801", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "18", // 集數
    order: "01", // 第幾個
    timestamp: 28, // 影片時間(秒)
    grammarPattern: "(時間) + (動詞)", // 日文文法公式
    grammarSummary: "(時間) + (動詞)", // 日文文法(簡式)"
    chineseMeaning: "(表示花費 (時間) 執行 (動詞) )", // 中文
    chineseSummary: "(表示花費 (時間) 執行 (動詞) )", // 中文(簡式)
    notes: ["句構先後和中文相反"], // 備註
    examples: [
      {
        japanese: "|三[さん]|時間[じかん]|勉強[べんきょう]しました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=Pom3oj50vgI&t=28s", // 網址
    videoTitle:
      "日文教學 初級日語#18｜日語語法解釋 〔時間〕＋動詞、〔時間〕に〔次数〕＋動詞、〔場所〕へ〔動詞〕に行きます／来ます", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1802", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "18", // 集數
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
  {
    jid: "1803", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "18", // 集數
    order: "03", // 第幾個
    timestamp: 212, // 影片時間(秒)
    grammarPattern: "(地方) へ (動詞連用形) に + 行きます / 来ます", // 日文文法公式
    grammarSummary: "(地方) へ (動詞連用形) に + 行きます / 来ます", // 日文文法(簡式)"
    chineseMeaning: "去 / 來 (地方) 執行 (動詞) ", // 中文
    chineseSummary: "去 / 來 (地方) 執行 (動詞) ", // 中文(簡式)
    notes: ["公式以ます形呈現 需依句意更換動詞形態"], // 備註
    examples: [
      {
        japanese: "|公園[こうえん]へ|散歩[さんぽ]しに|行[い]きます",
        chinese: "",
      },
      {
        japanese: "|日本[にほん]へ|勉強[べんきょう]しに|来[き]ました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=Pom3oj50vgI&t=212s", // 網址
    videoTitle:
      "日文教學 初級日語#18｜日語語法解釋 〔時間〕＋動詞、〔時間〕に〔次数〕＋動詞、〔場所〕へ〔動詞〕に行きます／来ます", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1901", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "19", // 集數
    order: "01", // 第幾個
    timestamp: 21, // 影片時間(秒)
    grammarPattern: "(名詞A) は (名詞B) より (形容詞)", // 日文文法公式
    grammarSummary: "より (形容詞)", // 日文文法(簡式)"
    chineseMeaning: "( 表示A比B更有 (形容詞) 的感覺 )", // 中文
    chineseSummary: "( 更有 (形容詞) 的感覺 )", // 中文(簡式)
    notes: ["A > B"], // 備註
    examples: [
      {
        japanese: "|日本[にほん]は|台湾[たいわん]より|広[ひろ]いです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=gMphEHt-EQc&t=21s", // 網址
    videoTitle:
      "日文教學_初級日語#19｜日語語法解釋 表示比较的表达方法~は~より、~のほうが~、~ほど~ない、いちばん~、どち らが~", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1902", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "19", // 集數
    order: "02", // 第幾個
    timestamp: 124, // 影片時間(秒)
    grammarPattern: "(名詞A) より (名詞B) のほうが (形容詞)", // 日文文法公式
    grammarSummary: "のほうが (形容詞)", // 日文文法(簡式)"
    chineseMeaning: "( 表示和A相比 B更有 (形容詞) 的感覺 )", // 中文
    chineseSummary: "( 更有 (形容詞) 的感覺 )", // 中文(簡式)
    notes: ["B > A"], // 備註
    examples: [
      {
        japanese: "|昨日[きのう]より|今日[きょう]のほうが|暑[あつ]いです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=gMphEHt-EQc&t=124s", // 網址
    videoTitle:
      "日文教學_初級日語#19｜日語語法解釋 表示比较的表达方法~は~より、~のほうが~、~ほど~ない、いちばん~、どち らが~", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1903", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "19", // 集數
    order: "03", // 第幾個
    timestamp: 264, // 影片時間(秒)
    grammarPattern: "(名詞A) は (名詞B) ほど (形容詞否定形)", // 日文文法公式
    grammarSummary: "ほど (形容詞否定形)", // 日文文法(簡式)"
    chineseMeaning: "( 表示A沒有B那麼具有 (形容詞) 的感覺 )", // 中文
    chineseSummary: "( 沒有那麼具有 (形容詞) 的感覺 )", // 中文(簡式)
    notes: ["A < B"], // 備註
    examples: [
      {
        japanese: "|漢字[かんじ]は|仮名[かな]ほど|簡単[かんたん]ではありません",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=gMphEHt-EQc&t=264s", // 網址
    videoTitle:
      "日文教學_初級日語#19｜日語語法解釋 表示比较的表达方法~は~より、~のほうが~、~ほど~ない、いちばん~、どち らが~", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1904", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "19", // 集數
    order: "04", // 第幾個
    timestamp: 348, // 影片時間(秒)
    grammarPattern: "(名詞A) の中で (名詞B) が一番 (形容詞)", // 日文文法公式
    grammarSummary: "一番 (形容詞)", // 日文文法(簡式)"
    chineseMeaning: "在A之中 B最具 (形容詞) 的感覺", // 中文
    chineseSummary: "最具 (形容詞) 的感覺", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese:
          "|果物[くだもの]の|中[なか]で|苺[いちご]が|一番[いちばん]|好[す]きです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=gMphEHt-EQc&t=348s", // 網址
    videoTitle:
      "日文教學_初級日語#19｜日語語法解釋 表示比较的表达方法~は~より、~のほうが~、~ほど~ない、いちばん~、どち らが~", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "1905", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "19", // 集數
    order: "05", // 第幾個
    timestamp: 459, // 影片時間(秒)
    grammarPattern: "(名詞A) と (名詞B) と + どちら + が (形容詞) ですか", // 日文文法公式
    grammarSummary: "どちら + が (形容詞) ですか", // 日文文法(簡式)"
    chineseMeaning: "A和B哪個具有 (形容詞) 的感覺", // 中文
    chineseSummary: "哪個具有 (形容詞) 的感覺", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|犬[いぬ]と|猫[ねこ]とどちらが|好[す]きですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=gMphEHt-EQc&t=459s", // 網址
    videoTitle:
      "日文教學_初級日語#19｜日語語法解釋 表示比较的表达方法~は~より、~のほうが~、~ほど~ない、いちばん~、どち らが~", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2002", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "20", // 集數
    order: "02", // 第幾個
    timestamp: 301, // 影片時間(秒)
    grammarPattern: "(動詞て形) + ください", // 日文文法公式
    grammarSummary: "(動詞て形) + ください", // 日文文法(簡式)"
    chineseMeaning: "請做 (動詞)", // 中文
    chineseSummary: "請做 (動詞)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|名前[なまえ]を|書[か]いてください",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=0ruMrORyCuQ&t=301s", // 網址
    videoTitle:
      "日文教學 初級日語#20｜日語語法 動詞て形的變形規則、て形＋ください、て形＋動詞", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2003", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "20", // 集數
    order: "03", // 第幾個
    timestamp: 374, // 影片時間(秒)
    grammarPattern: "(動詞て形) + (動詞)", // 日文文法公式
    grammarSummary: "(動詞て形) + (動詞)", // 日文文法(簡式)"
    chineseMeaning: "(表示動作依序相繼發生)", // 中文
    chineseSummary: "(表示動作依序相繼發生)", // 中文(簡式)
    notes: [
      "可用多個(動詞て形)接續 : (動詞て形) + (動詞て形)+ (動詞て形) +...+ (動詞)",
    ], // 備註
    examples: [
      {
        japanese: "|朝[あさ]|起[お]きて|顔[かお]を|洗[あら]います",
        chinese: "",
      },
      {
        japanese:
          "|駅[えき]で|友達[ともだち]に|会[あ]って、|映画[えいが]を|見[み]て、お|茶[ちゃ]を|飲[の]んで|帰[かえ]りました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=0ruMrORyCuQ&t=374s", // 網址
    videoTitle:
      "日文教學 初級日語#20｜日語語法 動詞て形的變形規則、て形＋ください、て形＋動詞", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2101", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "21", // 集數
    order: "01", // 第幾個
    timestamp: 30, // 影片時間(秒)
    grammarPattern: "(動詞て形) + もいいです(か)", // 日文文法公式
    grammarSummary: "もいいです(か)", // 日文文法(簡式)"
    chineseMeaning: "可以做 (動詞) (嗎)", // 中文
    chineseSummary: "可以做 (動詞) (嗎)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|写真[しゃしん]を|撮[と]ってもいいですか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=ACg2v-mjN1o&t=30s", // 網址
    videoTitle: "日文教學_初級日語#21｜日語語法 使用動詞て形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2102", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "21", // 集數
    order: "02", // 第幾個
    timestamp: 201, // 影片時間(秒)
    grammarPattern: "(動詞て形)はいけません", // 日文文法公式
    grammarSummary: "～いけません", // 日文文法(簡式)"
    chineseMeaning: "不可以做 (動詞) ", // 中文
    chineseSummary: "不可以～", // 中文(簡式)
    notes: ["公式以ます形呈現 需依句意更換動詞形態"], // 備註
    examples: [
      {
        japanese: "|写真[しゃしん]を|撮[と]ってはいけません",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=ACg2v-mjN1o&t=201s", // 網址
    videoTitle: "日文教學_初級日語#21｜日語語法 使用動詞て形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2103", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "21", // 集數
    order: "03", // 第幾個
    timestamp: 377, // 影片時間(秒)
    grammarPattern: "(動詞て形) います", // 日文文法公式
    grammarSummary: "(動詞て形) います", // 日文文法(簡式)"
    chineseMeaning: "正在做 (動詞) ", // 中文
    chineseSummary: "正在～", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|雨[あめ]が|降[ふ]っています",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=ACg2v-mjN1o&t=377s", // 網址
    videoTitle: "日文教學_初級日語#21｜日語語法 使用動詞て形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2201", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "22", // 集數
    order: "01", // 第幾個
    timestamp: 23, // 影片時間(秒)
    grammarPattern: "(動詞て形) + から + (動詞)", // 日文文法公式
    grammarSummary: "(動詞て形) + から + (動詞)", // 日文文法(簡式)"
    chineseMeaning: "(表示兩個動作接連發生)", // 中文
    chineseSummary: "(表示兩個動作接連發生)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|手[て]を|洗[あら]ってからご|飯[はん]を|食[た]べます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=aRsDHZ1zxXk&t=23s", // 網址
    videoTitle:
      "日文教學_初級日語#22｜日語語法 使用動詞て形的語法｜て形＋から、て形＋あげます／もらいます／くれます", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2202", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "22", // 集數
    order: "02", // 第幾個
    timestamp: 330, // 影片時間(秒)
    grammarPattern: "(人A) は (人B) に (動詞て形) あげます", // 日文文法公式
    grammarSummary: "(動詞て形) あげます", // 日文文法(簡式)"
    chineseMeaning: "A為B做(動詞)", // 中文
    chineseSummary: "為～做(動詞)", // 中文(簡式)
    notes: [
      "建議先於第12集片頭了解「內人」、「外人」概念",
      "公式以ます形呈現 需依句意更換動詞形態",
    ], // 備註
    examples: [
      {
        japanese:
          "|私[わたし]は|友達[ともだち]に|日本語[にほんご]を|教[おし]えてあげました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=aRsDHZ1zxXk&t=330s", // 網址
    videoTitle:
      "日文教學_初級日語#22｜日語語法 使用動詞て形的語法｜て形＋から、て形＋あげます／もらいます／くれます", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2203", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "22", // 集數
    order: "03", // 第幾個
    timestamp: 378, // 影片時間(秒)
    grammarPattern: "(人A) は (人B) に (動詞て形) もらいます", // 日文文法公式
    grammarSummary: "(動詞て形) もらいます", // 日文文法(簡式)"
    chineseMeaning: "(表示A得到 B為A 執行動作)", // 中文
    chineseSummary: "(表示得到某人執行動作的幫助)", // 中文(簡式)
    notes: [
      "建議先於第12集片頭了解「內人」、「外人」概念",
      "公式以ます形呈現 需依句意更換動詞形態",
    ], // 備註
    examples: [
      {
        japanese:
          "|私[わたし]は|先生[せんせい]に|日本語[にほんご]を|教[おし]えてもらいました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=aRsDHZ1zxXk&t=378s", // 網址
    videoTitle:
      "日文教學_初級日語#22｜日語語法 使用動詞て形的語法｜て形＋から、て形＋あげます／もらいます／くれます", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2204", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "22", // 集數
    order: "04", // 第幾個
    timestamp: 408, // 影片時間(秒)
    grammarPattern: "(人A) は (人B) に (動詞て形) くれます", // 日文文法公式
    grammarSummary: "(動詞て形) くれます", // 日文文法(簡式)"
    chineseMeaning: "A為B做(動詞)", // 中文
    chineseSummary: "為～做(動詞)", // 中文(簡式)
    notes: [
      "建議先於第12集片頭了解「內人」、「外人」概念",
      "公式以ます形呈現 需依句意更換動詞形態",
    ], // 備註
    examples: [
      {
        japanese:
          "|田中[たなか]さんは|私[わたし]に|傘[かさ]を|貸[か]してくれました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=aRsDHZ1zxXk&t=408s", // 網址
    videoTitle:
      "日文教學_初級日語#22｜日語語法 使用動詞て形的語法｜て形＋から、て形＋あげます／もらいます／くれます", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2301", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "23", // 集數
    order: "01", // 第幾個
    timestamp: 17, // 影片時間(秒)
    grammarPattern: "(地方) を (動詞)", // 日文文法公式
    grammarSummary: "(地方) を (動詞)", // 日文文法(簡式)"
    chineseMeaning: "(表示經過、離開的助詞)", // 中文
    chineseSummary: "(表示經過、離開的助詞)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|空[そら]を|飛[と]びます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=-AUMCivPZgc&t=17s", // 網址
    videoTitle:
      "日文教學_初級日語#23｜日語語法解釋 表示離開/經過的を、表示附著點的に、表示移動行為的目的地的に", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2302", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "23", // 集數
    order: "02", // 第幾個
    timestamp: 143, // 影片時間(秒)
    grammarPattern: "(附著點) に (動詞)", // 日文文法公式
    grammarSummary: "(附著點) に (動詞)", // 日文文法(簡式)"
    chineseMeaning: "(表示附著在 (名詞) 上、內執行 (動詞))", // 中文
    chineseSummary: "(表示附著在 (名詞) 上、內執行 (動詞))", // 中文(簡式)
    notes: ["人或物體停留在特定物體上 (例:交通工具、椅子) 時使用"], // 備註
    examples: [
      {
        japanese: "|椅子[いす]に|座[すわ]ります",
        chinese: "",
      },
      {
        japanese: "|電車[でんしゃ]に|乗[の]ります",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=-AUMCivPZgc&t=143s", // 網址
    videoTitle:
      "日文教學_初級日語#23｜日語語法解釋 表示離開/經過的を、表示附著點的に、表示移動行為的目的地的に", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2303", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "23", // 集數
    order: "03", // 第幾個
    timestamp: 253, // 影片時間(秒)
    grammarPattern: "(目的地) に (動詞)", // 日文文法公式
    grammarSummary: "(目的地) に (動詞)", // 日文文法(簡式)"
    chineseMeaning: "(表示去、在 (目的地) 執行 (動詞))", // 中文
    chineseSummary: "(表示去、在 (目的地) 執行 (動詞))", // 中文(簡式)
    notes: ["表示去目的地的動機時 也可用「へ」代替「に」"], // 備註
    examples: [
      {
        japanese: "|日本[にほん]に|行[い]きます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=-AUMCivPZgc&t=253s", // 網址
    videoTitle:
      "日文教學_初級日語#23｜日語語法解釋 表示離開/經過的を、表示附著點的に、表示移動行為的目的地的に", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2401", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "24", // 集數
    order: "01", // 第幾個
    timestamp: 22, // 影片時間(秒)
    grammarPattern: "(名詞) が 欲しいです", // 日文文法公式
    grammarSummary: "～欲しいです", // 日文文法(簡式)"
    chineseMeaning: "想要 (名詞)", // 中文
    chineseSummary: "想要～", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|銀河[ぎんが]の|輝[かがや]きが|欲[ほ]しいです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=YSSc01xAOa4&t=22s", // 網址
    videoTitle:
      "日文教學_初級日語#23｜日語語法解釋 表示離開/經過的を、表示附著點的に、表示移動行為的目的地的に", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2402", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "24", // 集數
    order: "02", // 第幾個
    timestamp: 127, // 影片時間(秒)
    grammarPattern: " (動詞連用形) + たいです", // 日文文法公式
    grammarSummary: "～たいです", // 日文文法(簡式)"
    chineseMeaning: "想要做 (動詞)", // 中文
    chineseSummary: "想要做～", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|未来[みらい]を|見[み]たいです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=YSSc01xAOa4&t=127s", // 網址
    videoTitle:
      "日文教學 初級日語#24｜日語語法解釋 表示願望時使用的～がほしい以及～たい／たくない的用法，全面否定的表達方法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2403", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "24", // 集數
    order: "03", // 第幾個
    timestamp: 255, // 影片時間(秒)
    grammarPattern: " (動詞連用形) + たくないです", // 日文文法公式
    grammarSummary: "～たくないです", // 日文文法(簡式)"
    chineseMeaning: "不想做 (動詞)", // 中文
    chineseSummary: "不想做～", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|現実[げんじつ]に|戻[もど]りたくないです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=YSSc01xAOa4&t=255s", // 網址
    videoTitle:
      "日文教學 初級日語#24｜日語語法解釋 表示願望時使用的～がほしい以及～たい／たくない的用法，全面否定的表達方法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2404", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "24", // 集數
    order: "04", // 第幾個
    timestamp: 454, // 影片時間(秒)
    grammarPattern: "(疑問詞) も (否定形式)", // 日文文法公式
    grammarSummary: "(疑問詞) も (否定形式)", // 日文文法(簡式)"
    chineseMeaning: "什麼都不～", // 中文
    chineseSummary: "什麼都不～", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|何[なに]も|見[み]えません",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=YSSc01xAOa4&t=454s", // 網址
    videoTitle:
      "日文教學 初級日語#24｜日語語法解釋 表示願望時使用的～がほしい以及～たい／たくない的用法，全面否定的表達方法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2405", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "24", // 集數
    order: "05", // 第幾個
    timestamp: 518, // 影片時間(秒)
    grammarPattern: "(疑問詞) + にも / からも / とも + (否定形式)", // 日文文法公式
    grammarSummary: "(疑問詞) + にも / からも / とも + (否定形式)", // 日文文法(簡式)"
    chineseMeaning: "對誰也不、對哪也不 / 從誰也不、從哪也不 / 和誰也不", // 中文
    chineseSummary: "對誰也不、對哪也不 / 從誰也不、從哪也不 / 和誰也不", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|誰[だれ]にも|教[おし]えません",
        chinese: "",
      },
      {
        japanese: "どこからも|連絡[れんらく]が|来[こ]ないです",
        chinese: "",
      },
      {
        japanese: "|誰[だれ]とも|会[あ]いたくないです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=YSSc01xAOa4&t=518s", // 網址
    videoTitle:
      "日文教學 初級日語#24｜日語語法解釋 表示願望時使用的～がほしい以及～たい／たくない的用法，全面否定的表達方法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2406", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "24", // 集數
    order: "06", // 第幾個
    timestamp: 600, // 影片時間(秒)
    grammarPattern: "(疑問詞) + も / へも + (否定形式)", // 日文文法公式
    grammarSummary: "(疑問詞) + も / へも + (否定形式)", // 日文文法(簡式)"
    chineseMeaning: "(表示哪裡都不想前往)", // 中文
    chineseSummary: "(表示哪裡都不想前往)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "どこへも|行[い]きません",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=YSSc01xAOa4&t=600s", // 網址
    videoTitle:
      "日文教學 初級日語#24｜日語語法解釋 表示願望時使用的～がほしい以及～たい／たくない的用法，全面否定的表達方法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2501", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "25", // 集數
    order: "01", // 第幾個
    timestamp: 52, // 影片時間(秒)
    grammarPattern: " (動詞連用形) + ましょうか", // 日文文法公式
    grammarSummary: " ～ましょうか", // 日文文法(簡式)"
    chineseMeaning: "要幫忙做 (動詞) 嗎", // 中文
    chineseSummary: "要幫忙嗎", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|荷物[にもつ]を|持[も]ちましょうか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=xk4-IJPH080&t=52s", // 網址
    videoTitle:
      "日文教學_初級日語#25｜日語語法解釋 主動幫忙時使用的ましょうか、ませんか／ましょう／ましょうか的區別、〔疑問詞〕＋でも", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2502", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "25", // 集數
    order: "02", // 第幾個
    timestamp: 368, // 影片時間(秒)
    grammarPattern: " (疑問句) でも", // 日文文法公式
    grammarSummary: " ～でも", // 日文文法(簡式)"
    chineseMeaning: "～都可以", // 中文
    chineseSummary: "～都可以", // 中文(簡式)
    notes: ["表示任何情況都相同"], // 備註
    examples: [
      {
        japanese: "いつでも|大丈夫[だいじょうぶ]ですよ",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=xk4-IJPH080&t=368s", // 網址
    videoTitle:
      "日文教學_初級日語#25｜日語語法解釋 主動幫忙時使用的ましょうか、ませんか／ましょう／ましょうか的區別、〔疑問詞〕＋でも", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2601", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "26", // 集數
    order: "01", // 第幾個
    timestamp: 31, // 影片時間(秒)
    grammarPattern: " (い形容詞て形) + (形容詞)", // 日文文法公式
    grammarSummary: " (い形容詞て形) + (形容詞)", // 日文文法(簡式)"
    chineseMeaning: "(接續兩個形容詞)", // 中文
    chineseSummary: "(接續兩個形容詞)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese:
          "|今日[きょう]は|暖[あたた]かくて|良[い]い|天気[てんき]ですね",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=Ota7XXduEvo&t=31s", // 網址
    videoTitle:
      "日文教學 初級日語#26｜日語語法 い／な形容詞的て形、い／な形容詞和名詞並列時使用的語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2602", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "26", // 集數
    order: "02", // 第幾個
    timestamp: 182, // 影片時間(秒)
    grammarPattern: " (な形容詞て形) + (形容詞)", // 日文文法公式
    grammarSummary: " (な形容詞て形) + (形容詞)", // 日文文法(簡式)"
    chineseMeaning: "(接續兩個形容詞)", // 中文
    chineseSummary: "(接續兩個形容詞)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese:
          "この|店[みせ]の|店員[てんいん]さんは|親切[しんせつ]で|丁寧[ていねい]ですよ",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=Ota7XXduEvo&t=182s", // 網址
    videoTitle:
      "日文教學 初級日語#26｜日語語法 い／な形容詞的て形、い／な形容詞和名詞並列時使用的語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2603", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "26", // 集數
    order: "03", // 第幾個
    timestamp: 293, // 影片時間(秒)
    grammarPattern: " (名詞A) で、(名詞B)", // 日文文法公式
    grammarSummary: " (名詞A) で、(名詞B)", // 日文文法(簡式)"
    chineseMeaning: "(用兩個名詞說明主詞)", // 中文
    chineseSummary: "(用兩個名詞說明主詞)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese:
          "|彼女[かのじょ]は|日本人[にほんじん]で、|大学生[だいがくせい]です",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=Ota7XXduEvo&t=293s", // 網址
    videoTitle:
      "日文教學 初級日語#26｜日語語法 い／な形容詞的て形、い／な形容詞和名詞並列時使用的語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2702", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "27", // 集數
    order: "02", // 第幾個
    timestamp: 233, // 影片時間(秒)
    grammarPattern: " (動詞ない形) + でください", // 日文文法公式
    grammarSummary: " (動詞ない形) + でください", // 日文文法(簡式)"
    chineseMeaning: "請不要做 (動詞)", // 中文
    chineseSummary: "請不要做 (動詞)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|写真[しゃしん]を|撮[と]らないでください",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=yMJ4naogPoM&t=233s", // 網址
    videoTitle:
      "日文教學 初級日語#27｜日語語法 動詞的ない形、使用ない形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2703", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "27", // 集數
    order: "03", // 第幾個
    timestamp: 352, // 影片時間(秒)
    grammarPattern: " (動詞ない形 <去掉ない> ) + なければなりません", // 日文文法公式
    grammarSummary: " ～なければなりません", // 日文文法(簡式)"
    chineseMeaning: "必須做 (動詞)", // 中文
    chineseSummary: "必須做～", // 中文(簡式)
    notes: ["公式以ます形呈現 需依句意更換動詞形態"], // 備註
    examples: [
      {
        japanese: "|明日[あした]|早[はや]く|起[お]きなければなりません",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=yMJ4naogPoM&t=352s", // 網址
    videoTitle:
      "日文教學 初級日語#27｜日語語法 動詞的ない形、使用ない形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2704", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "27", // 集數
    order: "04", // 第幾個
    timestamp: 454, // 影片時間(秒)
    grammarPattern: " (動詞ない形 <去掉ない> ) + なくてもいいです", // 日文文法公式
    grammarSummary: " ～なくてもいいです", // 日文文法(簡式)"
    chineseMeaning: "不做 (動詞) 也可以", // 中文
    chineseSummary: "不做～也可以", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "その|質問[しつもん]に|今[いま]|答[こた]えなくてもいいです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=yMJ4naogPoM&t=454s", // 網址
    videoTitle:
      "日文教學 初級日語#27｜日語語法 動詞的ない形、使用ない形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2801", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "28", // 集數
    order: "01", // 第幾個
    timestamp: 51, // 影片時間(秒)
    grammarPattern: " (い形容詞 <去掉い> ) + くなります ", // 日文文法公式
    grammarSummary: " (い形容詞 <去掉い> ) + くなります ", // 日文文法(簡式)"
    chineseMeaning: "( 表示自然的變成 (形容詞) 的感覺 )", // 中文
    chineseSummary: "( 表示自然的變成 (形容詞) 的感覺 )", // 中文(簡式)
    notes: [
      "公式以ます形呈現 需依句意更換動詞形態",
      "なります : 表示性質和狀態的變化",
    ], // 備註
    examples: [
      {
        japanese: "|値段[ねだん]が|安[やす]くなりました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=xyLIs4l6PfY&t=51s", // 網址
    videoTitle:
      "日文教學_初級日語#28｜日語語法 い／な形容詞和名詞的變化 ～なります／します", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2802", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "28", // 集數
    order: "02", // 第幾個
    timestamp: 130, // 影片時間(秒)
    grammarPattern: " (い形容詞 <去掉い> ) + くします ", // 日文文法公式
    grammarSummary: " (い形容詞 <去掉い> ) + くします ", // 日文文法(簡式)"
    chineseMeaning: "( 設法變成 (形容詞) 的感覺 )", // 中文
    chineseSummary: "( 設法變成 (形容詞) 的感覺 )", // 中文(簡式)
    notes: [
      "公式以ます形呈現 需依句意更換動詞形態",
      "します : 表示因主詞自我意志的動作或作用而產生的改變",
    ], // 備註
    examples: [
      {
        japanese: "テレビの|音[おと]を|小[ちい]さくしてください",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=xyLIs4l6PfY&t=130s", // 網址
    videoTitle:
      "日文教學_初級日語#28｜日語語法 い／な形容詞和名詞的變化 ～なります／します", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2803", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "28", // 集數
    order: "03", // 第幾個
    timestamp: 198, // 影片時間(秒)
    grammarPattern: " (な形容詞) + になります ", // 日文文法公式
    grammarSummary: " (な形容詞) + になります ", // 日文文法(簡式)"
    chineseMeaning: "( 表示自然的變成 (形容詞) 的感覺 )", // 中文
    chineseSummary: "( 表示自然的變成 (形容詞) 的感覺 )", // 中文(簡式)
    notes: [
      "公式以ます形呈現 需依句意更換動詞形態",
      "なります : 表示性質和狀態的變化",
    ], // 備註
    examples: [
      {
        japanese: "|静[しず]かになりました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=xyLIs4l6PfY&t=198s", // 網址
    videoTitle:
      "日文教學_初級日語#28｜日語語法 い／な形容詞和名詞的變化 ～なります／します", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2804", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "28", // 集數
    order: "04", // 第幾個
    timestamp: 282, // 影片時間(秒)
    grammarPattern: " (な形容詞) + にします ", // 日文文法公式
    grammarSummary: " (な形容詞) + にします ", // 日文文法(簡式)"
    chineseMeaning: "( 設法變成 (形容詞) 的感覺 )", // 中文
    chineseSummary: "( 設法變成 (形容詞) 的感覺 )", // 中文(簡式)
    notes: [
      "公式以ます形呈現 需依句意更換動詞形態",
      "します : 表示因主詞自我意志的動作或作用而產生的改變",
    ], // 備註
    examples: [
      {
        japanese: "|部屋[へや]を|綺麗[きれい]にしてください",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=xyLIs4l6PfY&t=282s", // 網址
    videoTitle:
      "日文教學_初級日語#28｜日語語法 い／な形容詞和名詞的變化 ～なります／します", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2805", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "28", // 集數
    order: "05", // 第幾個
    timestamp: 351, // 影片時間(秒)
    grammarPattern: " (名詞) + になります ", // 日文文法公式
    grammarSummary: " (名詞) + になります ", // 日文文法(簡式)"
    chineseMeaning: "( 表示自然的變成 (名詞) )", // 中文
    chineseSummary: "( 表示自然的變成 (名詞) )", // 中文(簡式)
    notes: [
      "公式以ます形呈現 需依句意更換動詞形態",
      "なります : 表示性質和狀態的變化",
    ], // 備註
    examples: [
      {
        japanese: "もう|春[はる]になりました",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=xyLIs4l6PfY&t=351s", // 網址
    videoTitle:
      "日文教學_初級日語#28｜日語語法 い／な形容詞和名詞的變化 ～なります／します", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2806", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "28", // 集數
    order: "06", // 第幾個
    timestamp: 430, // 影片時間(秒)
    grammarPattern: " (名詞) + にします ", // 日文文法公式
    grammarSummary: " (名詞) + にします ", // 日文文法(簡式)"
    chineseMeaning: "( 設法變成 (名詞) )", // 中文
    chineseSummary: "( 設法變成 (名詞) )", // 中文(簡式)
    notes: [
      "公式以ます形呈現 需依句意更換動詞形態",
      "します : 表示因主詞自我意志的動作或作用而產生的改變",
      "可用於把自己的決定告訴對方  例 : 點餐、買東西",
    ], // 備註
    examples: [
      {
        japanese: "|予定[よてい]を|明日[あした]にします",
        chinese: "",
      },
      {
        japanese: "|昼[ひる]ご|飯[はん]はラーメンにします",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=xyLIs4l6PfY&t=430s", // 網址
    videoTitle:
      "日文教學_初級日語#28｜日語語法 い／な形容詞和名詞的變化 ～なります／します", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2902", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "29", // 集數
    order: "02", // 第幾個
    timestamp: 267, // 影片時間(秒)
    grammarPattern: " (動詞辭書形) + ことができます ", // 日文文法公式
    grammarSummary: " ～ことができます ", // 日文文法(簡式)"
    chineseMeaning: "會做 (動詞)", // 中文
    chineseSummary: "會～", // 中文(簡式)
    notes: ["公式以ます形呈現 需依句意更換動詞形態"], // 備註
    examples: [
      {
        japanese: "|日本語[にほんご]を|話[はな]すことができます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=DyIBuF-IEdg&t=267s", // 網址
    videoTitle:
      "日文教學 初級日語#29｜日語語法 動詞的辭書形（基本形）＋使用辭書形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2903", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "29", // 集數
    order: "03", // 第幾個
    timestamp: 341, // 影片時間(秒)
    grammarPattern: " (名詞) + ができます ", // 日文文法公式
    grammarSummary: " ～ができます ", // 日文文法(簡式)"
    chineseMeaning: "會做 (名詞)", // 中文
    chineseSummary: "會～", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|彼女[かのじょ]は|料理[りょうり]ができます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=DyIBuF-IEdg&t=341s", // 網址
    videoTitle:
      "日文教學 初級日語#29｜日語語法 動詞的辭書形（基本形）＋使用辭書形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2904", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "29", // 集數
    order: "04", // 第幾個
    timestamp: 373, // 影片時間(秒)
    grammarPattern: " (名詞) は (動詞辭書形) + ことです ", // 日文文法公式
    grammarSummary: " (動詞辭書形) + ことです ", // 日文文法(簡式)"
    chineseMeaning: "(名詞) 是做(動詞)", // 中文
    chineseSummary: "會是做(動詞)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese:
          "|将来[しょうらい]の|夢[ゆめ]は|日本[にほん]で|働[はたら]くことです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=DyIBuF-IEdg&t=373s", // 網址
    videoTitle:
      "日文教學 初級日語#29｜日語語法 動詞的辭書形（基本形）＋使用辭書形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2905", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "29", // 集數
    order: "05", // 第幾個
    timestamp: 481, // 影片時間(秒)
    grammarPattern: " (動詞辭書形) + 前に ", // 日文文法公式
    grammarSummary: " (動詞辭書形) + 前に ", // 日文文法(簡式)"
    chineseMeaning: "在做(動詞)之前", // 中文
    chineseSummary: "在做(動詞)之前", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese:
          "|誰[だれ]かを|愛[あい]する|前[まえ]に|自分[じぶん]のことを|好[す]きと|言[い]えるようになれましたか",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=DyIBuF-IEdg&t=481s", // 網址
    videoTitle:
      "日文教學 初級日語#29｜日語語法 動詞的辭書形（基本形）＋使用辭書形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "2906", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "29", // 集數
    order: "06", // 第幾個
    timestamp: 578, // 影片時間(秒)
    grammarPattern: " (名詞) + の前に ", // 日文文法公式
    grammarSummary: " (名詞) + の前に ", // 日文文法(簡式)"
    chineseMeaning: "在 (名詞) 這件事之前", // 中文
    chineseSummary: "在 (名詞) 這件事之前", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|食事[しょくじ]の|前[まえ]に、|手[て]を|洗[あら]います",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=DyIBuF-IEdg&t=578s", // 網址
    videoTitle:
      "日文教學 初級日語#29｜日語語法 動詞的辭書形（基本形）＋使用辭書形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "3002", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "30", // 集數
    order: "02", // 第幾個
    timestamp: 321, // 影片時間(秒)
    grammarPattern: " (動詞た形) ことが + あります / ありません ", // 日文文法公式
    grammarSummary: " (動詞た形) ことが + あります / ありません ", // 日文文法(簡式)"
    chineseMeaning: "曾經做過 (動詞) / 不曾做過 (動詞)", // 中文
    chineseSummary: "曾經做過 (動詞) / 不曾做過 (動詞)", // 中文(簡式)
    notes: ["公式以ます形呈現 需依句意更換動詞形態"], // 備註
    examples: [
      {
        japanese: "|日本[にほん]へ|行[い]ったことがあります",
        chinese: "",
      },
      {
        japanese: "|刺身[さしみ]を|食[た]べたことがありません",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=hl7dlevQg_4&t=321s", // 網址
    videoTitle: "日文教學_初級日語#30｜日語語法 動詞的た形變形規則以及用法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "3101", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "31", // 集數
    order: "01", // 第幾個
    timestamp: 31, // 影片時間(秒)
    grammarPattern: " (動詞た形) 後で", // 日文文法公式
    grammarSummary: " ～後で ", // 日文文法(簡式)"
    chineseMeaning: "做完 (動詞)之後", // 中文
    chineseSummary: "～之後", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese:
          "|仕事[しごと]が|終[お]わった|後[あと]で、|友達[ともだち]と|食事[しょくじ]をします",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=VidjZAS3kpY&t=31s", // 網址
    videoTitle: "日文教學_初級日語#31｜日語語法解釋 使用動詞た形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "3102", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "31", // 集數
    order: "02", // 第幾個
    timestamp: 107, // 影片時間(秒)
    grammarPattern: " (名詞) の後で", // 日文文法公式
    grammarSummary: " ～の後で ", // 日文文法(簡式)"
    chineseMeaning: "做完 (名詞)之後", // 中文
    chineseSummary: "～之後", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese:
          "|授業[じゅぎょう]の|後[あと]で、|図書館[としょかん]へ|行[い]きます",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=VidjZAS3kpY&t=107s", // 網址
    videoTitle: "日文教學_初級日語#31｜日語語法解釋 使用動詞た形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "3103", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "31", // 集數
    order: "03", // 第幾個
    timestamp: 140, // 影片時間(秒)
    grammarPattern: " (動詞た形) ほうがいいです", // 日文文法公式
    grammarSummary: " ～ほうがいいです", // 日文文法(簡式)"
    chineseMeaning: "做 (動詞) 比較好", // 中文
    chineseSummary: "～比較好", // 中文(簡式)
    notes: ["表示建議別人做事"], // 備註
    examples: [
      {
        japanese: "|雨[あめ]ですから、|傘[かさ]を|持[も]ったほうがいいです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=VidjZAS3kpY&t=140s", // 網址
    videoTitle: "日文教學_初級日語#31｜日語語法解釋 使用動詞た形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "3104", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "31", // 集數
    order: "04", // 第幾個
    timestamp: 160, // 影片時間(秒)
    grammarPattern: " (動詞ない形) ほうがいいです", // 日文文法公式
    grammarSummary: " (動詞ない形) ほうがいいです", // 日文文法(簡式)"
    chineseMeaning: "別做 (動詞) 比較好", // 中文
    chineseSummary: "別做 (動詞) 比較好", // 中文(簡式)
    notes: ["表示建議別人別做某事"], // 備註
    examples: [
      {
        japanese: "|無理[むり]をしないほうがいいです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=VidjZAS3kpY&t=160s", // 網址
    videoTitle: "日文教學_初級日語#31｜日語語法解釋 使用動詞た形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "3105", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "31", // 集數
    order: "05", // 第幾個
    timestamp: 268, // 影片時間(秒)
    grammarPattern: " (動詞た形) り + (動詞た形) り + ... + します", // 日文文法公式
    grammarSummary: " (動詞た形) り + (動詞た形) り + ... + します", // 日文文法(簡式)"
    chineseMeaning: "(列舉多個動詞說明)", // 中文
    chineseSummary: "(列舉多個動詞說明)", // 中文(簡式)
    notes: ["公式以ます形呈現 需依句意更換動詞形態"], // 備註
    examples: [
      {
        japanese:
          "|週末[しゅうまつ]は、|本[ほん]を|読[よ]んだり、ゲームをしたりします",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=VidjZAS3kpY&t=268s", // 網址
    videoTitle: "日文教學_初級日語#31｜日語語法解釋 使用動詞た形的三種語法", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "3201", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "32", // 集數
    order: "01", // 第幾個
    timestamp: 11, // 影片時間(秒)
    grammarPattern: "(名詞) に + よって / よります", // 日文文法公式
    grammarSummary: "(名詞) に + よって / よります", // 日文文法(簡式)"
    chineseMeaning: "根據(名詞)", // 中文
    chineseSummary: "根據(名詞)", // 中文(簡式)
    notes: ["若為句末 使用よります", "公式以ます形呈現 需依句意更換動詞形態"], // 備註
    examples: [
      {
        japanese: "|国[くに]によって、|文化[ぶんか]が|違[ちが]います",
        chinese: "",
      },
      {
        japanese: "|考[かんが]え|方[かた]は、|人[ひと]によります",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=V_W3vT87KPQ&t=11s", // 網址
    videoTitle:
      "日文教學_初級日語#32｜日語語法解釋 表示情況・狀態有多種可能性的語法～り～り、～によって", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "3202", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "32", // 集數
    order: "02", // 第幾個
    timestamp: 89, // 影片時間(秒)
    grammarPattern: "(形容詞過去簡體形)り(形容詞過去簡體形)り", // 日文文法公式
    grammarSummary: "(形容詞過去簡體形)り(形容詞過去簡體形)り", // 日文文法(簡式)"
    chineseMeaning: "(用數個形容詞描述)", // 中文
    chineseSummary: "(用數個形容詞描述)", // 中文(簡式)
    notes: ["結尾用「です」或「します」都可以"], // 備註
    examples: [
      {
        japanese:
          "|最近[さいきん]の|天気[てんき]は|暑[あつ]かったり|寒[さむ]かったりです",
        chinese: "",
      },
      {
        japanese: "|道[みち]は|静[しず]かだったり|賑[にぎ]やかだったりします",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=V_W3vT87KPQ&t=89s", // 網址
    videoTitle:
      "日文教學_初級日語#32｜日語語法解釋 表示情況・狀態有多種可能性的語法～り～り、～によって", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "3203", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "32", // 集數
    order: "03", // 第幾個
    timestamp: 359, // 影片時間(秒)
    grammarPattern: "(名詞A)だったり(名詞B)だったり", // 日文文法公式
    grammarSummary: "(名詞A)だったり(名詞B)だったり", // 日文文法(簡式)"
    chineseMeaning: "(用數個名詞描述)", // 中文
    chineseSummary: "(用數個名詞描述)", // 中文(簡式)
    notes: [], // 備註
    examples: [
      {
        japanese: "|昼[ひる]ごはんは|弁当[べんとう]だったりパンだったりです",
        chinese: "",
      },
    ],
    referenceUrl: "https://www.youtube.com/watch?v=V_W3vT87KPQ&t=359s", // 網址
    videoTitle:
      "日文教學_初級日語#32｜日語語法解釋 表示情況・狀態有多種可能性的語法～り～り、～によって", // 影片標題
    quizs: [{ question: "", options: [], answer: "" }],
  },
  {
    jid: "3501", // 自製id 第幾集的第幾個 例:第1集第1個
    episodeNumber: "35", // 集數
    order: "01", // 第幾個
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
