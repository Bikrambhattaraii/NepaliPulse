import { View, StyleSheet, Text, Image } from "react-native";
const Sharemarket = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/assets/share.png")}
        />
        <Text style={styles.header}>Sharemarket</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "auto",
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
  image: {
    height: 70,
    width: 90,
    
  },
  header:{
fontSize:18,
marginTop:10,
  },
});
export default Sharemarket;
