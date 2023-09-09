import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import MovieList from '../components/movieList';

const Person = () => {

  const [isPress, setIsPress] = useState(false);
  const [personMovie, setPersonMovie] = useState([1, 2, 3, 4]);
  return (
    <ScrollView style={{ backgroundColor: '#1f201c' }}>
      <View>
        <SafeAreaView style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 }}>
          <TouchableOpacity>
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
              source={require('../assets/images/castImage2.png')}
              style={{ height: 300, width: 300, borderRadius: 500, resizeMode: 'contain' }}
            >
            </Image>
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
          <Text style={{ fontSize: 32, color: 'white', fontWeight: '400' }}>
            Keanu Reeves
          </Text>
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '200' }}>
            London, United Kingdom
          </Text>
        </View>

        <View style={{ height: 60, backgroundColor: '#61677A', marginTop: 15, flexDirection: 'row', alignItems: 'center', marginHorizontal: 30, justifyContent: 'center', borderRadius: 25 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center', borderRightWidth: 2, paddingHorizontal: 5, borderColor: 'white' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Gender</Text>
            <Text style={{ fontSize: 10, fontWeight: '400', color: 'white' }}>asfsaf</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', borderRightWidth: 2, paddingHorizontal: 5, borderColor: 'white' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Birthday</Text>
            <Text style={{ fontSize: 10, fontWeight: '400', color: 'white' }}>asfsaasfasff</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', borderRightWidth: 2, paddingHorizontal: 5, borderColor: 'white' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Known For</Text>
            <Text style={{ fontSize: 10, fontWeight: '400', color: 'white' }}>asfsaf</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5, borderColor: 'white' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>Popularity</Text>
            <Text style={{ fontSize: 10, fontWeight: '400', color: 'white' }}>asfsaf</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 10, marginHorizontal: 10 }}>
        <View>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '800' }}>Biography</Text>
          <Text style={{ fontSize: 13, color: 'white' }}>1964 Lübnan doğumlu Kanada’lı ünlü oyuncu ve müzisyen Keanu Reeves oyunculuk kariyerinin yanında kendi grubu The Dogstar’da bas gitar çalmaktadır.  Anne ve babası boşandıktan sonra annesi kız kardeşiyle Keanu’yu alarak New York’a taşınmıştır. Dört lise değiştiren ve hiç birinden mezun olamayan Keanu 15 yaşında Wolfboy adlı oyunla Toronto’da oyunculuk kariyerine başladı. Hokey takımına giren ve The Wall takma adını alan ünlü oyuncu sakatlanıp sporu bırakmak zorunda kalır.

            1993’te en iyi arkadaşı River Phoenix’i kaybeder. Kız kardeşinin üzücü bir şekilde lösemi hastası olması , erkek kardeşinin ise devamlı girip çıktığı hapis maceraları yüzünden kendi hayatını bir türlü yaşayamaz. Reeves birkaç sene sonra Jennifer Syme ile tanışır , 1999’da  sevgilisi düşük yapar. Birkaç yıl sonra, Reeves’in “absürt” olarak tanımladığı trajik olay hayatının son çivisini de çakar; Jennifer Syme, katıldığı bir parti çıkışında  trafik kazası geçirerek  hayatını kaybeder.

            Al Pacino, Laurence Fishburne, Hugo Weaving, Charlize Theron gibi sinema tarihinde yer etmiş bir çok ünlü oyuncuyla birlikte rol alan Reeves’in filmlerinden bazıları; Şeytanın Avukatı, John Wick, 47 Ronin, Constantine, Speed ve Kasımda Aşk Başka'dır. En çok ses getiren filmi The Matrix’tir. Matrix filminden kazandığı 75 milyon doları set ekibine bağışlamıştır. Keanu Reeves’in Hollywood Bulvarı’nda yıldızı bulunmaktadır.</Text>
        </View>
      </View>

      <View style={{ marginTop: 25 }}>
        <MovieList data={personMovie} title={'Films'} hideSeeAll = {false}></MovieList>
      </View>


    </ScrollView>
  )
}

export default Person