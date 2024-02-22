import { ArticlesProperty } from "../types/articleInterface";
import { BrightonSupermarkets } from "./brightonSupermarkets";
import { DMV } from "./DMV";
import { englishCourse } from "./englishCourse";
import { shawarma } from "./shawarma";
import { insurance } from "./insurance";

export const ARTICLES: ArticlesProperty[] = [
  BrightonSupermarkets,
  DMV,
  englishCourse,
  shawarma,
  insurance,
];
