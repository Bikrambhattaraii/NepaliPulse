import { View, Text,StyleSheet } from "react-native";

const HomePage = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>this is textg</Text>
      </View>
    </>
  );
};
const styles=StyleSheet.create({
container:{
    padding:20,
}
}
)
export default HomePage;
