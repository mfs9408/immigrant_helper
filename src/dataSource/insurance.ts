import insurance_image from "../../assets/articleImages/insurance.jpeg";
import { ArticlesProperty } from "../types/types";
import { EItemType } from "../enums";

export const insurance: ArticlesProperty = {
  id: "057fb31d-3192-4019-ad54-e8e0ea4da1fc",
  image: insurance_image,
  tag: "New York",
  header: "Как и где получить страховку?",
  data: [
    {
      type: EItemType.TEXT,
      value: "Медицинская страховка – это невероятно важно в США.",
    },
  ],
};
