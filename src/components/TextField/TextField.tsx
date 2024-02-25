import React, { useState } from "react";
import { StyleSheet, Text, TextInput, ViewStyle } from "react-native";
import { commonColors, commonStyles } from "../../theme";

interface ITextFieldProps {
  value: string;
  onChange?: any;
  placeholder?: string;
  label?: string;
  styles?: ViewStyle | ViewStyle[];
  numeric?: boolean;
  error?: boolean;
  onPress?: () => void;
  editable?: boolean;
  multiline?: boolean;
}

const TextField = ({
  styles,
  onChange,
  value,
  placeholder,
  error,
  onPress,
  label,
  multiline,
  numeric,
  editable = true,
}: ITextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      {label && <Text style={[commonStyles.p1, style.label]}>{label}</Text>}
      <TextInput
        keyboardType={numeric ? "numeric" : undefined}
        placeholder={placeholder}
        value={value}
        onChangeText={(e) => onChange(e)}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        editable={editable}
        onPressIn={onPress}
        placeholderTextColor="#aaaaaa"
        style={[
          commonStyles.h2,
          style.input,
          isFocused && style.isFocused,
          multiline && { paddingTop: 10.5, height: "auto" },
          !editable && { backgroundColor: "#ccc" },
          styles,
        ]}
        multiline={multiline}
      />
    </>
  );
};

const style = StyleSheet.create({
  label: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    color: "#fff",
    // borderColor: error
    //   ? commonColors.error.color
    //   : commonColors.lightPrimary.color,
    // backgroundColor: "red",
    width: 160,
    // backgroundColor: "rgba(217, 214, 218, 0.20)",
  },
  isFocused: {
    borderColor: commonColors.primary.color,
  },
});

export default TextField;
