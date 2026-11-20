import Row from "@/components/row";
import { StyleSheet, Text, View } from 'react-native';

const dog1 = require("@/assests/images/dog1.jpg");
const dog2 = require("@/assests/images/dog2.jpg");


export default function Menu() {
  return (
    <View style={styles.container}>
      <Text>My Favorite Dogs</Text>
        <Row title={"Sir Bigglesworth"}
            image={dog1}
            rating={9}>
        </Row>
        <Row title={"Chompers"}
            image={dog2}
            rating={6}>
        </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});