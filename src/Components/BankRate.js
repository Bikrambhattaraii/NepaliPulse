import { Text, StyleSheet, View, Image } from "react-native";
const BankRate = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
        <Text>Bank Interst & FD Rate  {"\n"}Last Checked: May 07,2024</Text>

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
});
export default BankRate;
