import { StyleSheet, Text, View, Image } from "react-native";

const CurrencyRate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          style={styles.image}
          source={require('../../assets/assets/currency.png')}
        />
        <Text style={styles.text}>Currency Rate</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  subcontainer: {
    flexDirection: "row",
    alignItems: "center", 
  },
  image: {
    height: 60,
    width: 60,
  },
  text: {
    marginLeft: 10, 
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CurrencyRate;
