import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
function SplashScreen({navigation}) {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.button}>
            <Button title="Continue To App" color='#F4CF09'  backgroundColor= '#1C1A1A'
              onPress={() =>{
                navigation.navigate('Home')
             }} /> 
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  top: {
    flex: 0.8,
    backgroundColor: 'white',
    paddingTop: 100
  },
  logo: {
    position: 'relative',
    width: '100%',
    height: '70%',
  },

  bottom: {
    flex: 0.20,
    backgroundColor: '#0C0C0C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1C1A1A',
    width: '80%',
    height: 35,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
});


export default SplashScreen;

