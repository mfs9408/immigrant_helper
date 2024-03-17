import littlegeorgia1 from "../../assets/articleImages/littlegeorgia1.jpeg";
import { EItemType } from "../enums";
import { ArticlesProperty } from "../types/types";

export const littleGeorgia: ArticlesProperty = {
  id: "057fb31d-32192-4019-ad544а-e8e0ea4da1fc",
  image: littlegeorgia1,
  tag: "New York",
  header: "Самая вкусная шаурма",
  data: [
    {
      type: EItemType.TEXT,
      value:
        "Это будет самая вкусная шаурма в вашей жизни. Можно выбрать с курицей или свининой. В неё кладут перец, поэтому она острая, но можно попросить без перца.",
    },
    {
      type: EItemType.TEXT,
      value:
        "Она очень большая и очень сытная. На одного человека хватит маленькой, чтобы оставшуюся часть дня ходить сытым. Если вас двое, то большой хватит на двоих. Можно попросить, чтобы её порезали пополам.",
    },
    {
      type: EItemType.TEXT,
      value:
        "Помимо шаурмы в магазине продаются хачапури, грузинские приправы, торты.",
    },
    {
      type: EItemType.TEXT_TITLE_VALUE,
      title: "Цена",
      value: "10 долларов за маленькую и 14 долларов за большую.",
    },
    {
      type: EItemType.TEXT_TITLE_VALUE,
      title: "Address",
      value: "3089 Brighton Sixth St, Brooklyn, NY 11235, United States",
    },
    {
      type: EItemType.IMAGE,
      value: littlegeorgia1,
      comment: "Little Georgia",
    },
  ],
};
