import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
function BottomTab({onPress1, onPress2}) {
    return (
        <View style={styles.main_container}>
        <TouchableOpacity onPress={onPress2} >
          <Text> <Icon name="home" size={28} color="white" /> </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress1}>
          <Text> <Icon name="search" size={28} color="white" /> </Text>
          </TouchableOpacity>
          <TouchableOpacity >
          <Text> <Icon name="account-circle" size={28} color="white" /> </Text>
          </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    main_container: {
        backgroundColor: 'black',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }
})
export default BottomTab;
