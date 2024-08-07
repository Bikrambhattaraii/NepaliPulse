import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Share } from "react-native";
import Header from "./src/Components/Header";
import OilCorporation from "./src/Components/OilCorporation";
import Sharemarket from "./src/Components/Shremarket";
import TopMusic from "./src/Components/TopMusic";
import JwelleryPrice from "./src/Components/JwelleryPrice";
import CurrencyRate from "./src/Components/CurrencyRate";
import BankRate from "./src/Components/BankRate";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.card}>
          <OilCorporation />
          <View style={styles.smallcontainer}>
            <Sharemarket />
            <TopMusic />
          </View>
          <JwelleryPrice />
          <CurrencyRate />
          <BankRate />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 12,
  },
  card: {
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    gap: 10,
  },
  smallcontainer: {
    display: "flex",
    flexDirection: "row",
    gap: 50,
  },
});
