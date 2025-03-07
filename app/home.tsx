import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from '../styles/globalStyle';
import InputIcon from '@/components/InputSearch';
import Feather from "react-native-vector-icons/Feather";
import SlideFiltro from '@/components/SlideFiltros';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const router = useRouter()
  const [dataSlide, setDataSlider] = useState<NomesSlide[]>([])

  interface NomesSlide {
    id: number,
    name: string,
    select: boolean
  }

  useEffect(() => {
    setDataSlider(
      [
        { id: 1, name: "All", select: false },
        { id: 2, name: "Combos", select: false },
        { id: 3, name: "Sliders", select: false },
        { id: 4, name: "Classic", select: false },
      ]
    )
  }, [])
  
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, { width: width * 0.9 }]}>
        <Row>
          <View style={styles.col75}>
            <Text style={globalStyles.textTitle}>Foodgo</Text>
            <Text style={globalStyles.label}>Order your favourite food!</Text>
          </View>
          <View style={styles.col25}>
            <View style={styles.imgContainer}>
              <Image source={require('@/assets/images/woman.png')} style={styles.image} resizeMode='cover' />
            </View>
          </View>
        </Row>
        <View style={styles.containerSearch}>
          <InputIcon texto="Search" />
          <View style={[styles.containerSlider, { marginLeft: 10 }]}>
            <Feather name="sliders" size={25} color="white" />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <SlideFiltro data={dataSlide}></SlideFiltro>
        </View>
      </View>
    </View>

    
  );
}

interface RowProps {
  children: React.ReactNode;
}
const Row: React.FC<RowProps> = ({ children }) => (
  <View style={styles.row}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    flex: 2,
    marginHorizontal: 'auto',
    backgroundColor: "#fdfdfd",
    borderRadius: 10,
    padding: 15,
  },
  row: {
    flexDirection: "row",
    height: 100,
    marginTop: 10,
    flexWrap: 'wrap',  // Permite que o conteúdo se ajuste em dispositivos menores
  },
  col75: {
    flex: 13,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  col25: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2,
    width: '100%',
    height: '70%',
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  containerSearch: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center', // Alinha verticalmente o conteúdo
    justifyContent: 'flex-start', // Garante que os itens fiquem nas extremidades
  },
  containerSlider: {
    backgroundColor: "#EF2A39",
    width: 60,
    borderWidth: 1,
    height: 60,
    borderRadius: 25,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
