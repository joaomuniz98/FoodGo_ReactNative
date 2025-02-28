import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from '../styles/globalStyle';
import { StyleSheet, Image } from 'react-native';
export default function HomeScreen() {
  const router = useRouter()

  return (
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

})



