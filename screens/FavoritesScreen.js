import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fetchMovieDetail, image342, image500 } from '../api/movidedb'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';
import { deleteFavorite } from '../slice/favoriteSlice'

const FavoritesScreen = () => {
  const favorite = useSelector((state) => state.favorite.items);
  const dispatch = useDispatch();
  const { navigate, goBack } = useNavigation();

  console.log(favorite, "favorite")
  return (

    <SafeAreaView style={{ backgroundColor: '#272829', flex: 1 }}>
      <View style={{ paddingHorizontal: 15, paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons name="arrow-back" size={34} color="white" />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 26 }}>Favorites</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        style={{ marginTop: 15 }}

      >
        <View style={{ flexWrap: 'wrap', justifyContent: 'space-between', flexDirection: 'row' }}>
          {
            favorite.map((item) => {
              return (
             
                  <TouchableOpacity onPress={() => navigate("Movie", item)}>
                    <View style={{alignItems: 'center', paddingHorizontal: 15 , marginBottom:5 }}>
                      <Image
                        source={{ uri: image500(item.jpeg) }}
                        style={{ height: 80, width: 80, borderRadius: 100, marginBottom: 5, borderWidth: 1, borderColor: 'gray', resizeMode: 'contain' }}
                      >
                      </Image>
                      <Text style={{ color: 'white', fontSize: 12 }}>{item.title.length > 6 ? item.title.slice(0, 14) + '...' : item.title}</Text>
                    </View>
                    <TouchableOpacity style={{ position: 'absolute', top: 0, left: 10 }} onPress={() => dispatch(deleteFavorite({ id: item.id }))}>
                      <MaterialIcons name="cancel" size={24} color="white" />
                    </TouchableOpacity>

                  </TouchableOpacity>
         
              )


            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FavoritesScreen