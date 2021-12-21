import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import TopTab from './TopTab';
import {useSelector, useDispatch} from 'react-redux';
import {SetmovieName, Setmoviedata} from '../actions/index';
function Detail({navigation}) {
  const mystate = useSelector(state => state.set_movie_name);  //getting data from redux store
  const moviedata = useSelector(state => state.set_movie_data); //getting data from redux store
  return (
    <View>
      <View>
        <TopTab onPress={() => navigation.navigate('Search')} />
      </View>
      <View style={styles.movie_container}>
        <ScrollView>
          <View style={styles.thumbnail}>
            <Image
              source={{uri: moviedata[mystate].show.image.original}}
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
                  {moviedata[mystate].show.name}
                </Text>
              </View>
              <View>
                <Text>Language: {moviedata[mystate].show.language} </Text>
                <Text>
                  Rating:
                  {moviedata[mystate].show.rating.average == null
                    ? 0
                    : moviedata[mystate].show.rating.average}
                </Text>
                <Text>
                  Genres: {moviedata[mystate].show.genres.map(a => {
                    return a + ' , ';
                  })}
                </Text>
              </View>
              <View style={{marginTop: 20}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 20, marginBottom: 5}}>
                  Summary:
                </Text>
                <Text>{moviedata[mystate].show.summary}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
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
export default Detail;
