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
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {
          favorite.map((item) => {
            return (
              <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 22, paddingHorizontal: 15, marginBottom: 10 }}>{item.title}</Text>
                <TouchableOpacity onPress={() => navigate("Movie", item)}>
                  <View style={{ width: '100%', height: '100%' }}>
                    <Image
                      source={{ uri: image500(item.jpeg) }}
                      style={{ height: 80, width: 80, borderRadius: 100, marginBottom: 5, borderWidth: 1, borderColor: 'gray', resizeMode: 'contain' }}

                    >
                    </Image>
                  </View>
                  <TouchableOpacity style={{ position: 'absolute', top: 0, left: 0 }} onPress={() => dispatch(deleteFavorite({ id: item.id }))}>
                    <MaterialIcons name="cancel" size={24} color="white" />
                  </TouchableOpacity>

                </TouchableOpacity>

              </View>

            )

          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default FavoritesScreen