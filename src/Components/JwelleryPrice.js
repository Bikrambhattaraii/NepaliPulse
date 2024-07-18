import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

const JwelleryPrice = () => {
  const [goldPrice, setGoldPrice] = useState(null);
  const [silverData, setSilverData] = useState(null);

  useEffect(() => {
    // Fetch gold price
    fetch("https://macalistair1.github.io/scrap-data/gold.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setGoldPrice(data[0].price);
        }
      })
      .catch((error) => console.error("Error fetching gold price:", error));

    // Fetch silver data
    fetch("https://github.com/MacAlistair1/scrap-data/blob/main/silver.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setSilverData(data[0]);
        }
      })
      .catch((error) => console.error("Error fetching silver data:", error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image source={require("../../assets/assets/tola.png")} />
        <Text style={styles.text}>
          Live price of gold {"\n"} Per Tola NPR
        </Text>
      </View>
      <Text style={styles.price}>
        Gold Price: {goldPrice ? `Rs ${goldPrice}` : "Loading..."}
      </Text>
      <View style={styles.subcontainer}>
        <Image source={require("../../assets/assets/tola.png")} />
        <Text style={styles.text}>
          Live price of silver {"\n"} Per Tola NPR
        </Text>
      </View>
      {silverData && (
        <View>
          <Text style={styles.price}>
            Silver Spot Price: {silverData.spotPrice} NPR
          </Text>
          <Text style={styles.price}>
            Silver Price per Gram: {silverData.perGramPrice} NPR
          </Text>
          <Text style={styles.price}>
            Silver Price per Kilogram: {silverData.perKgPrice} NPR
          </Text>
          <Text style={styles.price}>
            Silver Price per Tola: {silverData.perTolaPrice} NPR
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    height: 400,
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
    marginBottom: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    fontSize: 20,
    color: "green",
  },
});

export default JwelleryPrice;
