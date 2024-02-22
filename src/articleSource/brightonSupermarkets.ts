import shop from "../../assets/articleImages/shop.jpeg";
import { EItemType } from "../enums";
import netcost from "../../assets/articleImages/netcost.jpeg";
import tashkent from "../../assets/articleImages/tashkent.jpeg";
import aldi from "../../assets/articleImages/aldi.jpeg";

export const BrightonSupermarkets = {
  id: "a13e3b6a-a1e2e-4d95-af70-079809795897",
  image: shop,
  tag: "New York",
  header: "Популярные супермаркеты на Брайтоне и в округе",
  data: [
    {
      type: EItemType.TEXT,
      value:
        "Если вы только приехали, заселились на Брайтон-Бич или к окрестностях, то первое, что вам понадобится – это " +
        "магазин продуктов. В этой статье вы сможете найти самые популярные супермаркеты, которые можно посетить " +
        "пока не получится найти что-то под ваш бюджет.",
    },
    {
      type: EItemType.TEXT_SUBHEADER,
      value: "NetCost Market",
    },
    {
      type: EItemType.TEXT_TITLE_VALUE,
      title: "Address",
      value: "3100 Ocean Pkwy, Brooklyn, NY 11235",
    },
    {
      type: EItemType.TEXT_TITLE_VALUE,
      title: "Address",
      value: "1029 Brighton Beach Ave, Brooklyn, NY 11235",
    },
    {
      type: EItemType.TEXT_TITLE_VALUE,
      title: "Цены",
      value: "выше среднего",
    },
    {
      type: EItemType.TEXT,
      value:
        "NetCost Market — отличное место для начала. " +
        "Здесь вы найдете широкий выбор международных продуктов, которые вам будут хорошо знакомы. " +
        "NetCost предлагает разнообразный выбор: от специй до мясных деликатесов.",
    },
    {
      type: EItemType.IMAGE,
      value: netcost,
      comment: "NetСost Market на Ocean avenue",
    },
    {
      type: EItemType.TEXT_SUBHEADER,
      value: "Tashkent",
    },
    {
      type: EItemType.TEXT_TITLE_VALUE,
      title: "Address",
      value: "713 Brighton Beach Ave, Brooklyn, NY 11235",
    },
    {
      type: EItemType.TEXT_TITLE_VALUE,
      title: "Цены",
      value: "средние",
    },
    {
      type: EItemType.TEXT,
      value:
        "Если вы из Центральной Азии или России, Ташкентский рынок — идеальное место для покупки продуктов. " +
        "Этот супермаркет, специализирующийся на узбекских и российских продуктах, предлагает специи, чай и " +
        "деликатесы, которые могут напомнить вам о доме. В отделах свежего мяса и молочных продуктов представлены " +
        "разнообразные деликатесы из Центральной Азии и России, предоставляющие уникальный и культурно обогащающий " +
        "опыт покупок по доступным ценам.",
    },
    {
      type: EItemType.IMAGE,
      value: tashkent,
      comment: "Tashkent на углу Brighton и Coney island",
    },

    {
      type: EItemType.TEXT_SUBHEADER,
      value: "Aldi",
    },
    {
      type: EItemType.TEXT_TITLE_VALUE,
      title: "Address",
      value: "3785 Nostrand Ave, Brooklyn, NY 11235",
    },
    {
      type: EItemType.TEXT_TITLE_VALUE,
      title: "Цены",
      value: "низкие",
    },
    {
      type: EItemType.TEXT,
      value:
        "Aldi — ваш выбор для экономных покупок. Магазин с приемлемым качеством еды по очень низким ценам.",
    },
    {
      type: EItemType.IMAGE,
      value: aldi,
      comment: "Aldi",
    },
    // {
    //   type: "map",
    //   markers: [],
    //   initialRegion: {
    //     latitude: 40.58960851426045,
    //     longitude: -73.94589078045342,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421,
    //   },
    // },
  ],
};
