import shop from "../assets/articleImages/shop.jpeg";
import dmv from "../assets/articleImages/dmv.jpeg";

export const ARTICLES: ArticlesProperty[] = [
  {
    id: "a13e3b6a-ae2e-4d95-af70-079809795897",
    image: shop,
    tag: "New York",
    header: "Популярные супермаркеты на Брайтоне и в округе",
    data: [
      {
        type: "text",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "image",
        value: shop,
        comment: "One of the shop",
      },
      {
        type: "map",
        markers: [],
        initialRegion: {
          latitude: 40.58960851426045,
          longitude: -73.94589078045342,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      },
    ],
  },
  {
    id: "057fb31d-3192-4019-ad54-e8e0ea4da1fc",
    image: dmv,
    tag: "New York",
    header: "Как и где получить Driver license?",
    data: [
      {
        type: "text",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        type: "image",
        value: dmv,
        comment: "Department of motor vehicles",
      },
      {
        type: "map",
        markers: [],
        initialRegion: {
          latitude: 40.58960851426045,
          longitude: -73.94589078045342,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      },
    ],
  },
];

export type ArticlesProperty = {
  id: string;
  image: any;
  tag: string;
  header: string;
  data: DataProperty[];
};

export type DataProperty = TextProperty | ImageProperty | MapProperty;

export interface TextProperty {
  type: string;
  value: string;
}

export interface ImageProperty {
  type: string;
  value: any;
  comment?: string;
}

export interface MapProperty {
  type: string;
  markers: [];
  initialRegion: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}
