import { View, Text, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React, { useState, useCallback, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash'
import { fallbackMoviePoster, fetchSearchMovie, image185, image500 } from '../api/movidedb';


const SearchScreen = () => {

  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;

  let movieName = "antmanthewaspquantamianaöls";

  const navigation = useNavigation();
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    if (value) {
      fetchSearchMovie({
        query: value,
        include_adult: 'false',
        language: 'en-US',
        page: '1'
      }).then((data) => {
        if (data && data.results) {
          setResults(data.results)
        }
      }).catch((err) => {
        console.log(err)
        setResults([])
      });
    } else {
      setResults([])
    }
  }

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), [])

  return (
    <SafeAreaView style={{ backgroundColor: '#272829', flex: 1 }}>
      <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, marginHorizontal: 15, marginTop: 25, borderColor: 'white', marginBottom: 3, borderWidth: 1, justifyContent: 'space-between', borderRadius: 20 }}>
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder='Search Movie'
          placeholderTextColor={'white'}
          cursorColor={'white'}
          style={{ color: 'white' }}
        >
        </TextInput>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="closecircleo" size={34} color="white" />
        </TouchableOpacity>
      </View>

      {
        results.length > 0 ?
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            style={{ marginTop: 15 }}
          >
            <Text style={{ color: 'white', fontSize: 17, fontWeight: '500' }}>Results ({results.length})</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>

              {
                results.map((item, index) => {
                  return (
                    <>
                      <TouchableWithoutFeedback
                        key={index}
                        onPress={() => navigation.push("Movie", item)}
                      >
                        <View>
                          <Image
                            source={{ uri: image500(item.backdrop_path) || fallbackMoviePoster }}
                            style={{
                              width: width * 0.42,
                              height: height * 0.3,
                              marginBottom: 5,
                              marginTop: 10,
                              borderRadius: 20,
                              borderWidth: .1,
                              borderColor: 'white'
                            }}
                          >
                          </Image>
                          <Text style={{ color: 'white', fontSize: 13, fontWeight: '500' }}>
                            {
                              item.title.length > 22 ? item.title.slice(0, 22) + '...' : item.title
                            }
                          </Text>
                        </View>

                      </TouchableWithoutFeedback>
                    </>

                  )
                })
              }
            </View>
          </ScrollView> :
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/images/movieTime.png')} style={{ width: width, height: 200 }}></Image>
          </View>

      }

    </SafeAreaView>
  )
}

export default SearchScreen