import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { MapProperty } from "../../../const";

const ItemMap = ({ initialRegion, markers }: MapProperty) => {
  return (
    <MapView style={{ height: 200 }} initialRegion={initialRegion}>
      {/*{markers.map((marker) => {*/}
      {/*  <Marker*/}
      {/*    coordinate={{*/}
      {/*      latitude: 40.58960851426045,*/}
      {/*      longitude: -73.94589078045342,*/}
      {/*    }}*/}
      {/*  />;*/}
      {/*})}*/}
    </MapView>
  );
};

export default ItemMap;
