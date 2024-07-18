import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const CurrencyRate = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("USA");
  
  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch("https://macalistair1.github.io/scrap-data/currency.json");
        let data = await response.json();
        
        data.sort((a, b) => {
          if (a.code === 'USA') return -1;
          if (b.code === 'USA') return 1;
          return a.name.localeCompare(b.name);
        });

        setCurrencyData(data);
        setSelectedCountry('USA');
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
        Alert.alert("Error", "Failed to fetch currency data");
      }
    };
    fetchCurrencyData();
  }, []);

  const selectedCurrency = currencyData.find(item => item.code === selectedCountry) || {};

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          style={styles.image}
          source={require("../../assets/assets/currency.png")}
        />
        <Text style={styles.text}>Currency Rate</Text>
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.label}>Country</Text>
        <RNPickerSelect
          value={selectedCountry}
          onValueChange={(value) => setSelectedCountry(value)}
          items={currencyData.map((item) => ({
            label: item.name,
            value: item.code,
          }))}
          style={pickerSelectStyles}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.label}>Currency Code</Text>
        <Text>{selectedCurrency.code || "Select a country"}</Text>
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.label}>Buy Rate</Text>
        <Text>{selectedCurrency.buy ? `Rs. ${selectedCurrency.buy}` : "-"}</Text>
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.label}>Sell Rate</Text>
        <Text>{selectedCurrency.sell ? `Rs. ${selectedCurrency.sell}` : "-"}</Text>
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
    marginBottom: 10,
  },
  image: {
    height: 50,
    width: 50,
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    height: 100,
  },
});
export default CurrencyRate;
