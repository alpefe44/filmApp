import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';

const Person = () => {

  const [isPress, setIsPress] = useState(false);
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
            <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>Gender</Text>
            <Text style={{ fontSize: 10, fontWeight: '400', color: 'white' }}>asfsaf</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', borderRightWidth: 2, paddingHorizontal: 5, borderColor: 'white' }}>
            <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>Birthday</Text>
            <Text style={{ fontSize: 10, fontWeight: '400', color: 'white' }}>asfsaasfasff</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', borderRightWidth: 2, paddingHorizontal: 5, borderColor: 'white' }}>
            <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>Known For</Text>
            <Text style={{ fontSize: 10, fontWeight: '400', color: 'white' }}>asfsaf</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5, borderColor: 'white' }}>
            <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>Popularity</Text>
            <Text style={{ fontSize: 10, fontWeight: '400', color: 'white' }}>asfsaf</Text>
          </View>
        </View>
      </View>


    </ScrollView>
  )
}

export default Person