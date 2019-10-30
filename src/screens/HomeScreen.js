import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>Home hello</Text>
      <Button 
      title="Go to Components Demo" 
      onPress={() => navigation.navigate('Components')}
      />
  
      <Button 
        title="Go to list Demo"
        onPress = {() => navigation.navigate('List')}
      />

<Button 
        title="Go to Image"
        onPress = {() => navigation.navigate('Image')}
      />

<Button 
        title="Go to Counter Demo"
        onPress = {() => navigation.navigate('Counter')}
      />

<Button 
        title="Go to Colour Demo"
        onPress = {() => navigation.navigate('Colour')}
      />
    </View>
  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
