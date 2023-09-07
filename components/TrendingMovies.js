import { View, Text, Dimensions, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const TrendingMovies = ({ data }) => {
  return (
    <View>
      <Text style={{ paddingHorizontal: 16, fontWeight: 'bold', color: 'white' , fontSize:22 }}>Trending</Text>
      <View style = {{alignItems:'center'}}>
        <Carousel
          width={width * 0.8}
          height={height / 2 + 30}
          data={data}
          withAnimation={{ type: 'spring' }}
          modeConfig={{ showLength: 3, snapDirection: 'left', rotateZDeg: 100 }}
          mode='parallax'
          renderItem={({ index }) => (
            <View style={{ alignItems: 'center' }}>
              <MovieCard></MovieCard>
            </View>

          )}
        />
      </View>
    </View>
  )
}


const MovieCard = ({ item, handleClick }) => {

  return (
    <TouchableWithoutFeedback>
      <Image
        source={require('../assets/images/moviePoster1.png')}
        style={{
          width: width * 0.8,
          height: height * 0.6,
          borderWidth: 1,
          borderRadius: 20
        }}
      />
    </TouchableWithoutFeedback>
  )
}

export default TrendingMovies