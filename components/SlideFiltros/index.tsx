import { View , StyleSheet, Text } from "react-native";

interface Props {
    data: string[]; 
 }

const SlideFiltro: React.FC<Props> = ({ data }) => {

    console.log(data)

    return ( 

        <>
            <View  style={styles.main}>
                {data.map((item, index) => (
                <View style={index === 0  ? styles.divButtonSelect : styles.divButtons}> 
                    <Text style={{color: index === 0 ? '#fff' : '#383636'}} key={index}>{item}</Text>
                </View>
                ))}
            </View>
        </>
    )
}

const styles = StyleSheet.create({

main: {

    display: 'flex',
    flexDirection: 'row',
    gap: 8
},

divButtons: {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebe3e3',
    flex: 1,
    minHeight: 50,
    maxHeight: 'auto',
    borderRadius: 30
},

divButtonSelect: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 75,
    minHeight: 50,
    maxHeight: 'auto',
    borderRadius: 30
}



})


export default SlideFiltro