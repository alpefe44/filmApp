import { View, Text, FlatList, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const MovieList = ({ data, title , hideSeeAll = true }) => {

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ paddingHorizontal: 16, fontSize: 16, fontWeight: 'bold', color: 'white' }}>{title}</Text>
        <Text style={{ paddingHorizontal: 16, fontSize: 16, fontWeight: 'bold', color: '#ff7f00' }}>{hideSeeAll ? "See All" : ''}</Text>
      </View>

      <FlatList
        data={data}
        renderItem={(item) => (
          <View style={{ padding: 15 }}>
            <MovieCard item={item}></MovieCard>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      >

      </FlatList>
    </View>
  )
}

const MovieCard = ({ item }) => {
  const { navigate } = useNavigation();
  const movieName = "Ant-Man and the Wasp: Quantumania";
  return (
    <TouchableWithoutFeedback onPress={() => navigate("Movie" , item)}>
      <View>
        <Image
          source={require('../assets/images/moviePoster2.png')}
          style={{
            width: width / 4,
            height: height / 5,
            borderWidth: 1,
            borderRadius: 20
          }}
        />
        <Text style={{ color: 'white', fontSize: 12, paddingVertical: 5 }}>
          {movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName}
        </Text>
      </View>

    </TouchableWithoutFeedback>
  )
}


export default MovieList