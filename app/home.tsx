import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from '../styles/globalStyle';
import { StyleSheet, Image } from 'react-native';
import InputIcon from '@/components/InputSearch';
import Feather from "react-native-vector-icons/Feather";
import SlideFiltro from '@/components/SlideFiltros';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const router = useRouter()
  const [dataSlide, setDataSlider] = useState<string[]>([])


  useEffect(() => {
    setDataSlider(["All","Combos","Sliders","Classic"])
  },[])
 

  return (

    <View style={{ backgroundColor: "#fff", height: '100%', flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <View style={styles.headerContainer}>
        <Row>
          <View style={styles.col75}>
            <Text style={globalStyles.textTitle} >Foodgo</Text>
            <label style={globalStyles.label}>Order your favourite food!</label>
          </View>
          <View style={styles.col25}>
            <View style={styles.imgContainer}>
              <Image source={require('@/assets/images/woman.png')} style={{ width: "100%", height: "100%", borderRadius: 10 }} resizeMode='cover' />
            </View>
          </View>
        </Row>
        <View style={styles.containerSearch}>
          <InputIcon texto="Search" />
          <View style={[styles.containerSlider, { marginLeft: 10 }]}>
            <Feather name="sliders" size={25} color="white" />
          </View>
        </View>

        <View>
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
  headerContainer: {
    flex: 2,
    marginHorizontal: "auto",
    width: 400,
    height: 200,
    backgroundColor: "#fdfdfd"
  },
  row: {
    flexDirection: "row",
    height: 100,
    marginTop: 10
  },
  col75: {
    borderColor: "#fff",
    borderWidth: 1,
    flex: 13,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  col25: {
    borderColor: "#fff",
    borderWidth: 1,
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    borderRadius: 10,
    borderColor: '#fff', 
    borderWidth: 2, 
    width: '50%',
    height: '70%',
  },
  containerSearch: {
    width: "100%", 
    padding: 10,
    flexDirection: 'row', 
    alignItems: 'center',  // Ajusta o alinhamento no eixo transversal
    marginTop: 20,
  },

  containerSlider: {
    backgroundColor: "#EF2A39",
    width: 60,
    padding: 10,
    borderWidth: 1,
    height: 60,
    borderRadius: 25,
    borderColor: '#fff',
    // Remover o flex: 1 para evitar que o botão ocupe o espaço restante
    alignItems: 'center',
    justifyContent: 'center',
  },


})



