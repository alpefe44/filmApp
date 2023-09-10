import { View, Text, Dimensions, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/movieList';
import { useNavigation } from '@react-navigation/native';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpComingMovies } from '../api/movidedb';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const HomeScreen = () => {

  const [trending, setTrending] = useState([]);
  const [upComings, setUpComings] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const { navigate } = useNavigation();

  useEffect(() => {
    getUpComigMovies();
    getTopRatedMovies();
    getTrendingMovies();
  }, [])


  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();;
    if (data && data.results) {
      setTrending(data.results)
    }
  }
  const getUpComigMovies = async () => {
    const data = await fetchUpComingMovies();
    if (data && data.results) {
      setUpComings(data.results)
    }
  }
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    if (data && data.results) {
      setTopRated(data.results)
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#1f201c', flex: 1 }}>
      <View style={{ height: 70, width: '100%' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', paddingHorizontal: 25 }}>
          <Ionicons name="ios-reorder-three-outline" size={34} color="white" />
          <Text style={{ fontSize: 24 }}>
            <Text style={{ color: 'yellow', fontSize: 24 }}>M</Text>ovies
          </Text>
          <Pressable onPress={() => navigate("Search")}>
            <Ionicons name="search" size={34} color="white" />
          </Pressable>

        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >

        {/* Trending Movies Carousel */}
        {trending.length > 0 && <TrendingMovies data={trending} />}

        {upComings.length > 0 && <MovieList data={upComings} title={"Up Comings"}></MovieList>}

        {topRated.length > 0 && <MovieList data={topRated} title={"Top Rated"}></MovieList>}

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen