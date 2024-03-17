import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { ContextStore } from "../../components/StoreProvider/StoreProvider";
import Keyboard from "../../components/Keyboard";
import Converter from "../../components/Converter";
import Skeleton from "../../components/Skeleton";

const ConverterPage = () => {
  const { isLoading, data } = useContext(ContextStore);

  if (isLoading) return <Skeleton />;

  return (
    <Keyboard>
      <ScrollView
        style={[
          { height: "100%", paddingVertical: 20, backgroundColor: "#fff" },
        ]}
      >
        {data.converters.map((item, key) => (
          <Converter key={key} {...item} />
        ))}
      </ScrollView>
    </Keyboard>
  );
};

export default ConverterPage;
