import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Feed({thumbnail, title, Summary, onPress}) {
  return (
    <View style={styles.main_container}>
      <View style={styles.thumbnail}>
        <Image
          source={
            !thumbnail == '' ? {uri: thumbnail} : require('../assets/error.jpg')
          }
          style={{width: '100%', height: 280, position: 'relative', flex: 1}}
        />
      </View>
      <View style={styles.details}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: 'red'}}>
            {title}
          </Text>
        </View>
        <View>
          <Text>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Summary:</Text>{' '}
            {Summary}....
          </Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Text style={{fontWeight: 'bold', fontSize: 15, paddingBottom: 5}}>
            See More...
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#ffffff',
    margin: 5,
    flexDirection: 'column',
    width: '47%',
    height: 350,
  },
  thumbnail: {
    margin: 5,
    flex: 0.66,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  details: {
    paddingLeft: 5,
    flex: 0.35,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Feed;
