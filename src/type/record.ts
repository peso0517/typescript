export {};

type Prefectures = "Tokyo" | "Chiba" | "Tottori" | "Shiga";

type Covid19 = {
  kanji_name: string;
  cases: number;
};

const japan: Record<Prefectures, Covid19> = {
  Tokyo: { kanji_name: "東京", cases: 100 },
  Chiba: { kanji_name: "千葉", cases: 50 },
  Tottori: { kanji_name: "鳥取", cases: 10 },
  Shiga: { kanji_name: "滋賀", cases: 12 },
};
