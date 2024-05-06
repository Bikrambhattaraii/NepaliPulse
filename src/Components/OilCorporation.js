import { View, Text, Image, StyleSheet } from "react-native";
const OilCorporation = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.corporation}>Nepal OilCorporation </Text>
          <Text style={styles.corporation}>Effective From:@081/01/18</Text>
        </View>
        <View>
          <View style={styles.gridContainer}>
            <View style={styles.row}>
              <View style={styles.item}>
                <Text style={styles.itemtext}>Petrol</Text>
                <Text style={styles.itemprice}>Rs.</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.itemtext}>Diesel</Text>
                <Text style={styles.itemprice}>Rs.</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.item}>
                <Text style={styles.itemtext}>Kerosene</Text>
                <Text style={styles.itemprice}>Rs.</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.itemtext}>LPG Gas</Text>
                <Text style={styles.itemprice}> Rs.</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    height: "auto",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e3dddc",
    borderStyle: "solid",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  corporation: {
    fontSize: 15,
    fontWeight: '500',
    opacity:0.8,
  },
  gridContainer: {
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    gap: 60,
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
    fontSize: 26,
    fontWeight: "600",
    color: "green",
  },
});
export default OilCorporation;
