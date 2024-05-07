import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const BankRate = () => {
  const tableHead = ["Bank", "Saving Rate", "FD Rate"];
  const tableData = [
    ["1", "2", "3"],
    ["a", "b", "c"],
    ["1", "2", "3"],
    ["a", "b", "c"],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          style={styles.bank}
          source={require("../../assets/assets/bank.png")}
        />
        <Text style={styles.text}>
          Bank Interest & FD Rate {"\n"}Last Checked: May 07, 2024
        </Text>
      </View>
      <View style={styles.table}>
        <Table>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <View style={styles.line}></View>
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
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
  text: {
    fontWeight: "500",
    textAlign: "center",
    margin: 6,
  },
  table: {
    marginTop: 20,
  },
  bank: {
    height: 50,
    width: 50,
  },
  subcontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 10,
  },
  head: {},
  line: {
    borderTopWidth: 2,
    borderTopColor: "green",
    marginTop: 10,
  },
});

export default BankRate;
