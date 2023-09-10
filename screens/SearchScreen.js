import { View, Text, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const SearchScreen = () => {

  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;

  let movieName = "antmanthewaspquantamianaöls";

  const navigation = useNavigation();
  const [results, setResults] = useState([]);

  return (
    <SafeAreaView style={{ backgroundColor: '#1f201c', flex: 1 }}>
      <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, marginHorizontal: 15, marginTop: 25, borderColor: 'white', marginBottom: 3, borderWidth: 1, justifyContent: 'space-between', borderRadius: 20 }}>
        <TextInput
          placeholder='Search Movie'
          placeholderTextColor={'lightgray'}
          style={{}}
        >
        </TextInput>
        <TouchableOpacity>
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
                            source={require('../assets/images/moviePoster1.png')}
                            style={{
                              width: width * 0.42,
                              height: height * 0.3,
                              marginBottom: 10,
                              marginTop: 10
                            }}
                          >
                          </Image>
                          <Text style={{ color: 'white', fontSize: 11, fontWeight: '500' }}>
                            {
                              movieName.length > 22 ? movieName.slice(0, 22) + '...' : movieName
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
          <View style = {{justifyContent:'center' , alignItems:'center'}}>
            <Image source={require('../assets/images/movieTime.png')} style= {{width:width , height:200}}></Image>
          </View>

      }

    </SafeAreaView>
  )
}

export default SearchScreen