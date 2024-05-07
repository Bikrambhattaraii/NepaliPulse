import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const CurrencyRate = () => {
  const [selectedCountry, setSelectedCountry] = useState("Nepal"); // Default country selection
  const [currencies, setCurrencies] = useState({
    Nepal: "NPR", 
    USA: "USD", 
    UK: "GBP", 
  });

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

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
          onValueChange={handleCountryChange}
          items={Object.keys(currencies).map((country) => ({
            label: country,
            value: country,
          }))}
          style={pickerSelectStyles}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.label}> Nepali Rate</Text>
        <Text>{currencies[selectedCountry]}</Text>
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
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default CurrencyRate;
