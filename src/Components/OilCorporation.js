import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const OilCorporation = () => {
  const [data, setData] = useState({
    date: '',
    time: '',
    petrol: '',
    diesel: '',
    kerosene: '',
    lpg: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://macalistair1.github.io/scrap-data/oil.json');
        const json = await response.json();
        setData({
          date: json[0].date,
          time: json[0].time,
          petrol: json[0].petrol,
          diesel: json[0].diesel,
          kerosene: json[0].kerosene,
          lpg: json[0].lpg
        });
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.noc}>
        <Image
          style={styles.icon}
          source={require("../../assets/assets/noc.png")}
        />
        <View style={styles.noctext}>
          <Text style={styles.corporation}>Nepal Oil Corporation</Text>
          <Text style={styles.corporation}>Effective From: {data.date} {data.time}</Text>
        </View>
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <View style={styles.item}>
            <Text style={styles.itemtext}>Petrol</Text>
            <Text style={styles.itemprice}>Rs. {data.petrol}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemtext}>Diesel</Text>
            <Text style={styles.itemprice}>Rs. {data.diesel}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <Text style={styles.itemtext}>Kerosene</Text>
            <Text style={styles.itemprice}>Rs. {data.kerosene}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemtext}>LPG Gas</Text>
            <Text style={styles.itemprice}>Rs. {data.lpg}</Text>
          </View>
        </View>
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
  noc: {
    flexDirection: "row",
    alignItems: "center",
  },
  noctext: {
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  corporation: {
    fontSize: 15,
    fontWeight: "500",
    opacity: 0.8,
  },
  gridContainer: {
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  item: {
    flex: 1,
    padding: 10,
  },
  itemtext: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#5b6e29",
  },
  itemprice: {
    fontSize: 23,
    fontWeight: "600",
    color: "green",
  },
});

export default OilCorporation;
