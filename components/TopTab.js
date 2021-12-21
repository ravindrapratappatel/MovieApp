import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TopTab({onPress}) {
  return (
    <View style={styles.main_container}>
      <View>
        <Icon name="movie" size={23} color="red" />
      </View>
      <View>
        <Text style={{color: 'red', fontSize: 18}}>Movie App</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Icon name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: 'black',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default TopTab;
