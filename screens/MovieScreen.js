import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';
import { fetchMovieCredits, fetchMovieDetail, fetchMoviesSimilar, image500 } from '../api/movidedb';


const MovieScreen = ({ route }) => {
  const navigation = useNavigation();
  const { params: item } = useRoute();
  console.log(item.id)
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;

  const [isPress, setIsPress] = useState(false);
  const [cast, setCast] = useState([]);
  const [movie, setMovie] = useState({});


  useEffect(() => {
    getMovieDetail(item.id)
    getMovieCredits(item.id)
    getSimilarMovies(item.id)
  }, [item])

  const getMovieDetail = async (id) => {
    const data = await fetchMovieDetail(id);
    if (data) {
      setMovie(data)
      //console.log(movie, "movie")
    }
  }
  const getMovieCredits = async (id) => {
    const data = await fetchMovieCredits(id);
    if(data) setCast(data.cast)
    console.log(data, "credits")
  }
  const getSimilarMovies = async (id) => {
    const data = await fetchMoviesSimilar(id);
    //console.log(data, "similar")
  }

  return (
    <ScrollView style={{ backgroundColor: '#1f201c' }}>
      <View style={{ width: '100%' }}>
        <View>
          <Image
            source={{ uri: image500(movie?.poster_path) }}
            style={{
              width: width,
              height: height * 0.63,
            }}

          ></Image>
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{ width, height: height * 0.5, position: 'absolute', bottom: 0 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          ></LinearGradient>
        </View>
        <SafeAreaView style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', padding: 15 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsPress(!isPress)} >
            <Ionicons name="md-heart-sharp" size={32} color={isPress ? 'yellow' : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View style={{ marginTop: -(height * 0.1), alignItems: 'center' }}>
        <Text style={{ fontSize: 32, color: 'white', fontWeight: 'bold', alignSelf: 'center', textAlign: 'center' }}>{movie.title}</Text>
        <Text style={{ fontSize: 15, color: 'white', fontWeight: '200', alignSelf: 'center', textAlign: 'center', marginTop: 10 }} >{movie.release_date} , {movie?.runtime} Min</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          {
            movie?.genres?.map((genre, index) => {
              return (
                <Text style={{ marginRight: 10, fontSize: 14, color: 'white', fontWeight: '200', alignSelf: 'center', textAlign: 'center', marginTop: 10 }} >{genre.name}</Text>
              )
            })
          }
        </View>

        <Text style={{ fontSize: 12, color: 'white', fontWeight: '200', marginHorizontal: 10, marginTop: 5 }}>
          {movie.overview}
        </Text>
      </View>

      <View>
        <Cast navigation={navigation} cast={cast}></Cast>
      </View>

    </ScrollView>
  )
}

export default MovieScreen