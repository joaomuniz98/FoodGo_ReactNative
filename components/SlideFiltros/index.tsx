import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  data: NomesSlide[];
}

interface NomesSlide {
  id: number;
  name: string;
  select: boolean;
}

const SlideFiltro: React.FC<Props> = ({ data }) => {

    
  const [items, setItems] = useState<NomesSlide[]>(data);

  useEffect(() => {
    setItems(data);
  }, [data]);
  

  function handleSelect(index: number) {
    const newData = items.map((item, i) =>
      i === index ? { ...item, select: true } : { ...item, select: false }
    );
    setItems(newData);
  }
  

  return (
    <View style={styles.main}>
      {items.map((item, index) => (
        <TouchableOpacity key={item.id} onPress={() => handleSelect(index)}>
          <View style={item.select ? styles.divButtonSelect : styles.divButtons}>
            <Text style={{ color: item.select ? "#fff" : "#383636" }}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  divButtons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ebe3e3",
    minHeight: 50,
    borderRadius: 30,
    paddingHorizontal: 10, 
    minWidth: 80
  },
  divButtonSelect: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: 75,
    minWidth: 100,
    minHeight: 50,
    borderRadius: 30,
    paddingHorizontal: 10,
  },
});

export default SlideFiltro;
