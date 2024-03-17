import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import openMap from "react-native-open-maps";
import { commonStyles } from "../../../theme";
import { MapProperty } from "../../../types/types";

const ItemMap = ({ initialRegion, markers }: MapProperty) => {
  // const [mapLink, setMapLink] = useState("");
  const { height, width } = Dimensions.get("window");

  const LATITUDE_DELTA = 0.05;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

  return (
    <View style={{ flex: 15 }}>
      <View style={commonStyles.articlePartWrapper}>
        <Text style={commonStyles.h2}>Карта</Text>
      </View>
      <MapView
        style={{ height: 400 }}
        initialRegion={{
          ...initialRegion,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        altitude={20}
      >
        {markers.map((item, key) => (
          <Marker
            key={key}
            coordinate={item.coordinate}
            onPress={() => openMap({ ...item.coordinate, zoom: 18 })}
          >
            <Image
              source={item.img}
              style={{ height: 60, width: 60, borderRadius: 50 }}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default ItemMap;
