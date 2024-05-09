import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../../assets/logo.jpeg")}
        />
        <Text style={styles.headertext}>Nepali Pulse</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#238a0a",
  },
  header: {
    marginTop: 30,
    backgroundColor: "#26a307",
    flexDirection: "row",
    padding: 8,
    gap: 10,
    alignItems: "center",
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  headertext: {
    fontSize: 21,
    fontWeight: "600",
    color: "white",
  },
});
export default Header;
