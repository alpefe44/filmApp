import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

const Cast = ({ cast, navigation }) => {
  const personName = 'Keanu Reevs';
  const characterName = 'John Wick';

  return (
    <View>
      <Text style={{ marginLeft: 15, marginVertical: 10, color: 'white', fontWeight: '700' }}>Top Casts</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {
          cast && cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Person", person)}
                style={{ marginVertical: 10, marginHorizontal: 15, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../assets/images/castImage1.png')}
                  style={{ height: 60, width: 60, borderRadius: 100, marginBottom: 5, borderWidth: 1, borderColor: 'gray', resizeMode: 'contain' }}
                >

                </Image>
                <Text style={{ fontSize: 10, color: 'white', fontWeight: '100' }}>
                  {
                    characterName.length > 10 ? characterName.slice(0, 10) + '...' : characterName
                  }
                </Text>
                <Text style={{ fontSize: 10, color: 'white', fontWeight: '100', marginTop: 2 }}>
                  {
                    personName.length > 11 ? personName.slice(0, 10) + '...' : personName
                  }
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Cast