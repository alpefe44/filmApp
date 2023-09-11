import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import MovieList from '../components/movieList';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchMovieStar, fetchMovieStarCredit, image500 } from '../api/movidedb';

const Person = ({ route }) => {
  const {params : item} = useRoute();
  const navigation = useNavigation();

  const [isPress, setIsPress] = useState(false);
  const [actress, setActress] = useState({});
  const [personMovie, setPersonMovie] = useState([]);


  useEffect(() => {
    getFetchMovieStar(item.id)
    getFetchMovieStarCredit(item.id)
  }, [item])

  const getFetchMovieStar = async (id) => {
    const data = await fetchMovieStar(id);
    if (data) {
      setActress(data)
    }
  }
  const getFetchMovieStarCredit = async (id) => {
    const data = await fetchMovieStarCredit(id);
    console.log(data)
    if (data) {
      setPersonMovie(data.cast)
    }
  }
  return (
    <ScrollView style={{ backgroundColor: '#272829' }}>
      <View>
        <SafeAreaView style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsPress(!isPress)} >
            <Ionicons name="md-heart-sharp" size={32} color={isPress ? 'yellow' : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={{ alignItems: 'center' }}>
          <View style={{
            shadowColor: 'white',
            elevation: 8,
            borderRadius: 500,
          }}>
            <Image
              source={{ uri: image500(actress.profile_path) }}
              style={{ height: 300, width: 300, borderRadius: 500, resizeMode: 'contain' }}
            >
            </Image>
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
          <Text style={{ fontSize: 32, color: 'white', fontWeight: '400' }}>
            {actress.name}
          </Text>
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '200' }}>
            {actress.place_of_birth}
          </Text>
        </View>

        <View style={{ height: 60, backgroundColor: '#61677A', marginTop: 15, flexDirection: 'row', alignItems: 'center', marginHorizontal: 30, justifyContent: 'center', borderRadius: 25 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center', borderRightWidth: 2, paddingHorizontal: 5, borderColor: 'white' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Gender</Text>
            <Text style={{ fontSize: 13, fontWeight: '400', color: 'white' }}>{actress.gender == 2 ? 'Male' : 'Female'}</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', borderRightWidth: 2, paddingHorizontal: 5, borderColor: 'white' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Birthday</Text>
            <Text style={{ fontSize: 13, fontWeight: '400', color: 'white' }}>{actress.birthday}</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', borderRightWidth: 2, paddingHorizontal: 5, borderColor: 'white' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Known For</Text>
            <Text style={{ fontSize: 13, fontWeight: '400', color: 'white' }}>{actress.known_for_department}</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5, borderColor: 'white' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Popularity</Text>
            <Text style={{ fontSize: 13, fontWeight: '400', color: 'white' }}>{actress.popularity}</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 10, marginHorizontal: 10 }}>
        <View>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '800' }}>Biography</Text>
          <Text style={{ fontSize: 13, color: 'white' }}>{actress.biography || "N/A"}</Text>
        </View>
      </View>

      <View style={{ marginTop: 25 }}>
        <MovieList data={personMovie} title={'Films'} hideSeeAll = {false}></MovieList>
      </View>


    </ScrollView>
  )
}

export default Person