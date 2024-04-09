import {
  ArticlesProperty,
  CommonDataProperties,
  ConverterTypes,
} from "../types/types";
import { BrightonSupermarkets } from "./brightonSupermarkets";
import { englishCourse } from "./englishCourse";
import { littleGeorgia } from "./littleGeorgia";
import { insurance } from "./insurance";
import { DMV } from "./DMV";

export const ARTICLES: ArticlesProperty[] = [
  BrightonSupermarkets,
  DMV,
  englishCourse,
  littleGeorgia,
  insurance,
];

export const CONVERTERS: ConverterTypes[] = [
  {
    coefficient: 2.205,
    firstText: "Kg",
    secondText: "Lb",
    comparison: "1 kg ~ 2.2 lb",
  },
  {
    coefficient: 35.195,
    firstText: "Liter",
    secondText: "Oz",
    comparison: "1 liter ~ 35.2 oz",
  },
  {
    coefficient: 1.609,
    firstText: "Mile",
    secondText: "Km",
    comparison: "1 mile ~ 1.6 km",
  },
];
