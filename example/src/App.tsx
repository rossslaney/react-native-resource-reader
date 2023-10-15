import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { getResourceValue } from 'react-native-resource-reader';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    const getVal = async () => {
      const val: string = await getResourceValue('ABOUT_US');
      console.log(val);
      setResult(val);
    };
    getVal();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
