import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';


const MovieScreen = ({ route }) => {
  const navigation = useNavigation();
  const { params: item } = useRoute();

  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;

  const [isPress, setIsPress] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4 , 5]);
  const movieName = "Ant-Man and the Wasp: Quantumania";

  return (
    <ScrollView style={{ backgroundColor: '#1f201c' }}>
      <View style={{ width: '100%' }}>
        <View>
          <Image
            source={require('../assets/images/moviePoster2.png')}
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
        <Text style={{ fontSize: 32, color: 'white', fontWeight: 'bold', alignSelf: 'center', textAlign: 'center' }}>{movieName}</Text>
        <Text style={{ fontSize: 15, color: 'white', fontWeight: '200', alignSelf: 'center', textAlign: 'center', marginTop: 10 }} >Released *2020 * 170 min</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ marginRight: 10, fontSize: 14, color: 'white', fontWeight: '200', alignSelf: 'center', textAlign: 'center', marginTop: 10 }} >Action</Text>
          <Text style={{ marginRight: 10, fontSize: 14, color: 'white', fontWeight: '200', alignSelf: 'center', textAlign: 'center', marginTop: 10 }} >Action</Text>
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '200', alignSelf: 'center', textAlign: 'center', marginTop: 10 }} >Action</Text>
        </View>

        <Text style={{ fontSize: 12, color: 'white', fontWeight: '200', marginHorizontal: 10, marginTop: 5 }}>
          Ant-Man ve Wasp: Quantumania, ailesi ile birlikte kendisini bir anda Kuantum Alemi'nde bulan Ant-Man'in maceralarını konu ediyor. Ant-Man, Avengers: Endgame sonrasında insanlar arasında oldukça popüler olmuştur ve bunun tadını çıkarmaktadır. Ancak kızı Cassie'nin yaptığı araç ile Kuantum Alemi'ne sinyal göndermesiyle kendisini bir anda bambaka bir dünyanın içinde bulur. Ona bu sıra dışı evrende ailesiyle birlikte Hope’un babası Hank Pym ve annesi Janet Van Dyne da eşlik eder. Kuantum Alemi'ni keşfeden aile, bu süreçte olağanüst yaratıklarla karşı karşıya kalır.
        </Text>
      </View>

      <View>
        
        <Cast navigation={navigation} cast={cast}></Cast>
      </View>

    </ScrollView>
  )
}

export default MovieScreen