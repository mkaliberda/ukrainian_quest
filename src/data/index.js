import { QUEST_POINT_TYPES } from "const";

import imgUkraine from "assets/img-header-ukraine.jpg";
import imgKyiv from "assets/img-header-kyiv.jpg";
import imgKharkiv from "assets/img-header-kharkiv.jpg";
import imgLviv from "assets/img-header-lviv.jpg";
import imgCrimea from "assets/img-header-crimea.jpg";

import imgSymbolTryzub from "assets/img-symbol-tyzub.png";
import imgSymbolBorsch from "assets/img-symbol-borsch.png";
import imgSymbolVyshyvanka from "assets/img-symbol-vyshyvanka.png";
import imgSymbolKorovai from "assets/img-symbol-korovai.png";
import imgSymbolKalyna from "assets/img-symbol-kalyna.png";

const data = {
  home: {
    rules: [
      "Choose the button with the name of your current station.",
      "After the successful completion of the game, you will get your symbol.",
      "Collect all 5 symbols and come to the “Ukraine” station to get your final prizes.",
    ],
  },
  points: [
    {
      lookup: "ukraine",
      name: "Ukraine",
      img: imgUkraine,
      type: QUEST_POINT_TYPES.QUIZ,
      rules: [
        "Choose the button with the name of your current station.",
        "After the successful completion of the game, you will get your symbol.",
        "Collect all 5 symbols and come to the “Ukraine” station to get your final prizes.",
      ],
      form: [
        {
          question: "What is the color on Ukrainian flag?",
          options: [
            { label: "Blue", value: "blue" },
            { label: "Orange", value: "orange" },
            { label: "Purple", value: "purple" },
            { label: "Green", value: "green" },
          ],
          name: "ukrainian_flag",
          answer: "blue",
        },
        {
          question: "What is the capital of Ukraine?",
          options: [
            { label: "Kyiv", value: "kyiv" },
            { label: "Lviv", value: "lviv" },
            { label: "Odesa", value: "odesa" },
            { label: "Kharkiv", value: "kharkiv" },
          ],
          name: "capital",
          answer: "kyiv",
        },
        {
          question: "What is the highest Ukrainian mountain?",
          options: [
            { label: "Kazbek", value: "kazbek" },
            { label: "Mont Blanc", value: "mont_blanc" },
            { label: "Hoverla", value: "hoverla" },
            { label: "Drahobrat", value: "drahobrat" },
          ],
          name: "mountain",
          answer: "hoverla",
        },
        {
          question: "What is the longesr river in Ukraine?",
          options: [
            { label: "Southern Bug", value: "bug" },
            { label: "Desna", value: "desna" },
            { label: "Dniester", value: "dniesterbug" },
            { label: "Dnipro", value: "dnipro" },
          ],
          answer: "dnipro",
          name: "river",
        },
        {
          question: "What is the Ukrainian currency?",
          options: [
            { label: "Hryvnia ₴", value: "hryvnia" },
            { label: "Zloty zł", value: "zloty" },
            { label: "Dollar $", value: "dollar" },
            { label: "Euro €", value: "euro" },
          ],
          answer: "hryvnia",
          name: "currency",
        },
      ],
      symbol: "tryzub",
    },
    {
      lookup: "kyiv",
      name: "Kyiv",
      img: imgKyiv,
      type: QUEST_POINT_TYPES.KEYWORD,
      rules: [
        "Put together a puzzle with Kyiv views",
        "Find the hidden word in the puzzle",
        "Enter this name into the field and click 'Submit'",
        "Receive your final symbol",
        "Mix puzzle before leaving",
      ],
      form: {
        question: "What is the word that you found on puzzle?",
        answer: "home",
      },
      symbol: "borsch",
    },
    {
      lookup: "kharkiv",
      name: "Kharkiv",
      img: imgKharkiv,
      type: QUEST_POINT_TYPES.KEYWORD,
      rules: [
        "Unscramble the word using help sheet",
        "Each symbol matches a letter in the alphabet. Find the matching letters and put them together to unscramble the word",
        "Enter this word into the field and click 'Submit'",
        "Receive your final symbol",
      ],
      form: {
        question: "What is the word that you unscrambled?",
        answer: "culture",
      },
      symbol: "vyshyvanka",
    },
    {
      lookup: "lviv",
      name: "Lviv",
      img: imgLviv,
      type: QUEST_POINT_TYPES.KEYWORD,
      rules: [
        "Bean bags toss game: each team member should toss the bean bag to the hole to reveal the word.",
        "Enter this word into the field and click 'Submit'",
        "Receive your final symbol",
      ],
      form: {
        question: "What is the word that you found?",
        answer: "happiness",
      },
      symbol: "korovai",
    },
    {
      lookup: "crimea",
      name: "Crimea",
      img: imgCrimea,
      type: QUEST_POINT_TYPES.KEYWORD,
      rules: [
        "Connect the events with the dates when they happened",
        "Put the word from the highlighted letters",
        "Enter this word into the field and click 'Submit'",
        "Receive your final symbol",
        "Mix events before leaving",
      ],
      form: {
        question: "What is the word that you found?",
        answer: "freedom",
      },
      symbol: "kalyna",
    },
  ],
  symbols: [
    {
      lookup: "tryzub",
      name: "Tryzub",
      translate: "Trident",
      img: imgSymbolTryzub,
      description:
        "The Ukrainian coat of arms – trident, or tryzub – has a long history (over a thousand years, if not more), but at the same time, it is a symbol of a modern country. It reflects heroic events of the past – and it is a stripe of Ukrainian warriors protecting the sovereignty and territorial integrity of Ukraine today. As perhaps any sign, the Ukrainian trident has its hidden symbolism. Still, with over 40 (!) theories about its actual meaning, it’s hardly possible to find the real roots of the symbol. The theories vary from referring to the trinity, bow with arrows, and candlestick to pointing out its similarity with anchor and even falcon’s wings.",
    },
    {
      lookup: "borsch",
      name: "Borsch",
      translate: "beetroot soup",
      img: imgSymbolBorsch,
      description:
        "Borsch is not just a traditional Ukrainian daily meal, it’s a symbol of unity. Borsch is a dish with a national character. It is primarily associated with Ukraine. When Ukrainians choose to cook borsch as their everyday main dish - they express their patriotism and show their love for Ukraine. In Ukraine, borsch has long been considered a symbol of a strong family: all the ingredients are cooked in a clay pot, transferring their flavors to each other, and as a result become one whole – a rich, hearty, and filling borsch.",
    },
    {
      lookup: "vyshyvanka",
      name: "Vyshyvanka",
      translate: "embroidered shirt",
      img: imgSymbolVyshyvanka,
      description:
        "Vyshyvanka is used as a talisman to protect the person wearing it and to tell a story. A geometric pattern woven in the past by adding red or black threads into the light thread was later imitated by embroidery and believed to have the power to protect a person from all harm. There is a saying in Ukrainian when someone is especially lucky and thrives in any situation: they were born wearing a vyshyvanka. The vyshyvanka not only speaks of its Ukrainian origin but also of the particular region in which it was made. The knowing eye could detect where a person hailed from by the clothes on their back.",
    },
    {
      lookup: "korovai",
      name: "Korovai",
      translate: "wedding bread",
      img: imgSymbolKorovai,
      description:
        "Korovai symbolized the unity of two loving hearts. The round shape of this treatment was associated with the Sun. The bread was the symbol of wealth. Each element of decoration should be chosen properly. The wedding korovai has to be garnished with symbols of unity and inseparability. These may be two rings, swans, sun and moon, or bounded hearts. It is of big significance that any birds come in pairs.",
    },
    {
      lookup: "kalyna",
      name: "Kalyna",
      translate: "guelder rose",
      img: imgSymbolKalyna,
      description:
        "For Ukrainians, the kalyna has special significance of popular resistance to political oppression and foreign occupation. Kalyna is now  represented on the official emblem of independent Ukraine’s Armed Forces. Kalyna is also celebrated in scores of Ukrainian folk songs about romantic love and about longing for the homeland. In national Ukrainian symbolism, the kalyna represents girlish beauty and grace, femininity, family well-being, and prosperity.",
    },
  ],
};

export default data;
