import React from "react";
import ItemText from "./ItemComponents/ItemText";
import ItemImage from "./ItemComponents/ItemImage";
import ItemMap from "./ItemComponents/ItemMap";
import {
  DataProperty,
  ImageProperty,
  MapProperty,
  TextProperty,
} from "../../const";

const GetItem = (item: DataProperty) => {
  switch (item.type) {
    case "text":
      return <ItemText {...(item as TextProperty)} />;
    case "image":
      return <ItemImage {...(item as ImageProperty)} />;
    case "map":
      return <ItemMap {...(item as MapProperty)} />;
  }
};

export default GetItem;
