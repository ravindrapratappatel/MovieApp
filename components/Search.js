import React, {useState} from 'react';
import axios from 'axios';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Search({navigation}) {
  const [moviename, setmoviename] = useState('');
  const [data, setdata] = useState([]);
  const [clicked, setclick] = useState(false);

  // function to get movie by name
  function get_movie_by_name(name) {
    axios
      .get('https://api.tvmaze.com/search/shows?q=' + name)
      .then(response => {
        const {show} = response.data[0];
        setdata(show);
        console.log(show);
        setclick(true);
      });
  }

  return (
    <View style={styles.main_container}>
      <View style={styles.top_container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="arrow-back" size={25} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <View style={styles.input}>
            <TextInput
              placeholder="Search"
              backgroundColor="#ffffff"
              style={{width: '80%'}}
              value={moviename}
              onChangeText={val => {
                setmoviename(val);
              }}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                get_movie_by_name(moviename);
              }}>
              <Icon name="search" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {clicked && (
        <View style={styles.movie_container}>
          <ScrollView>
            <View style={styles.thumbnail}>
              <Image
                source={{uri: data.image.original}}
                style={{
                  width: '100%',
                  height: 280,
                  position: 'relative',
                  flex: 1,
                }}
              />
            </View>
            <View style={styles.details}>
              <View>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    {data.name}{' '}
                  </Text>
                </View>
                <View>
                  <Text>Language: {data.language}</Text>
                  <Text>
                    Rating:{' '}
                    {data.rating.average == null ? 0 : data.rating.average}
                  </Text>
                  <Text>
                    Genres:{' '}
                    {data.genres.map(a => {
                      return a + ' , ';
                    })}{' '}
                  </Text>
                </View>
                <View style={{marginTop: 20}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 20, marginBottom: 5}}>
                    Summary:
                  </Text>
                  <Text>{data.summary}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
  },
  top_container: {
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: 'black',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    flex: 0.1,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.9,
  },
  input: {
    marginLeft: 7,
    marginTop: 5,
    marginBottom: 5,
    flex: 0.93,
  },
  button: {
    flex: 0.07,
    marginLeft: -40,
  },
  movie_container: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    margin: 5,
    width: '98%',
  },
  thumbnail: {
    margin: 5,
    height: 350,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  details: {
    paddingLeft: 5,
    flex: 0.3,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default Search;
