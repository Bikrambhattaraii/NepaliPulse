import { Image,StyleSheet,Text,View } from "react-native";
const TopMusic=()=>{
    return(
        <>
        <View style={styles.container}>
        <Image
          style={styles.image}
          
          source={require("../../assets/assets/top.png")}
        />
        <Text style={styles.header}>Top Music</Text>
      </View>
        </>
    )
}
const styles=StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#e3dddc",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image:{
height:100,
width:100,
    },
    header:{
marginTop:10,
    },
})
export default TopMusic;