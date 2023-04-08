
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Tittle from './src/components/tittle/index'
import Main from './src/components/main';
export default function App() {
  return (
    <View style={styles.container}>
      <Tittle/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
