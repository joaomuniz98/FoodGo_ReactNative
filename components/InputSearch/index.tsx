import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

interface Props {
  texto: string;
}

const InputIcon: React.FC<Props> = ({ texto }) => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <Feather name="search" size={20} color="gray" style={styles.icon} />
      <TextInput
        placeholder={texto}
        style={styles.textInput}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "rgb(255, 255, 255)",
     boxShadow: "2px 1px 6px rgba(136, 136, 136, 0.3);",
    paddingHorizontal: 10,
    height: "100%",
    width: "80%",
  },
  icon: {
    marginRight: 10, 
  },
  textInput: {
    fontFamily: 'Poppins-Regular',
    flex: 1,
    paddingVertical: 10,
    height: 50
  },
});

export default InputIcon;
