import { StyleSheet ,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient
    colors={['rgb(255,147,155)', 'rgb(239,42,57)']} 
    start={{ x: 0, y: 0 }} 
    end={{ x: 0, y: 1 }} 
    style={styles.container} 
  >
    <Image source={require('../assets/images/Foodgo.png')} style={styles.image} resizeMode='contain' />
    <Image source={require('../assets/images/lanche.png')} style={styles.imageHamburguer1} resizeMode='contain' />
    <Image source={require('../assets/images/lanche2.png')} style={styles.imageHamburguer2} resizeMode='contain' />
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container: {
       height: '100%',
       width: '100%',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: 'rgb(255,147,155)  linear-gradient(90deg, rgba(255,147,155,1) FF939B%, rgba(239,42,57,1) 67%)',
    },
    text: {
      fontSize: 20,
      color: '#fff',
    },
    image: {
        position: 'absolute', 
        top: 160,
        width: 172,  // Ajuste o tamanho da imagem
        height: 75,
    },
    imageHamburguer1: {

        position: 'absolute',
        bottom: 0,
        right: 180,
        width: 200,
        height: 250
    },
    imageHamburguer2: {
        position: 'absolute',
        top: 510,
        right: 120,
        width: 180,
        height: 180
    }
  });

