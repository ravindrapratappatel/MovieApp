import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import BottomTab from './BottomTab';
import TopTab from './TopTab';
import Feed from './Feed';
import {useSelector, useDispatch} from 'react-redux';
import {SetmovieName, Setmoviedata} from '../actions/index';

function Home({navigation}) {
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
//getting movie data with api call
  const getdata = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const items = await response.json();
      setdata(items);
      dispatch(Setmoviedata(items)); //storing data in redux store
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TopTab onPress={() => navigation.navigate('Search')} />
      </View>
      <View style={styles.feed}>
        <ScrollView>
          <View style={styles.items}>
            {data.map((item, index) => {
              return (
                <Feed
                  key={index}
                  thumbnail={item.show.image ? item.show.image.medium : ''}
                  title={item.show.name}
                  Summary={String(item.show.summary).slice(3, 70)}
                  onPress={async () => {
                    try {
                      dispatch(SetmovieName(index));
                    } catch {
                      console.log('Error');
                    } finally {
                      navigation.navigate('Detail');
                    }
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <BottomTab
          onPress1={() => navigation.navigate('Search')}
          onPress2={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  top: {
    flex: 0.06,
    backgroundColor: '#ffffff',
  },
  feed: {
    flex: 0.9,
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottom: {
    flex: 0.06,
    backgroundColor: '#ffffff',
  },
});

export default Home;
