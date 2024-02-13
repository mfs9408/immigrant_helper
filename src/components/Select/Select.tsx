import React from "react";
import RNPickerSelect from "react-native-picker-select";

interface IValueProps {
  label: string;
  value: any;
}

interface ISelectProps {
  placeholder?: IValueProps;
  value: IValueProps | null | undefined;
  items: IValueProps[];
  onValueChange: any;
}

const Select = ({ value, onValueChange, items }: ISelectProps) => {
  return (
     <RNPickerSelect
      value={value}
      items={items}
      placeholder={{}}
      onValueChange={(value) => {
        onValueChange(value);
      }}
    />
  );
};

export default Select;
