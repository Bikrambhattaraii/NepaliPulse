import { StyleSheet, Text, Image, View } from "react-native";
const JwelleryPrice = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
        <Image source={require("../../assets/assets/tola.png")} />
        <Text style={styles.text}>live price of gold {"\n"} Per Tola NPR</Text>
      </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    height:300,
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
  subcontainer:{
display:'flex',
flexDirection:"row",
gap:20,
  },
  text:{
    fontSize:20,
    fontWeight:'500'
  },
});
export default JwelleryPrice;
