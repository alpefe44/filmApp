import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { image500 } from '../api/movidedb'

const Cast = ({ cast, navigation }) => {
  //console.log(cast, "castsayfası")
  return (
    <View>
      <Text style={{ marginLeft: 15, marginVertical: 10, color: 'white', fontWeight: '700' }}>Top Casts</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {
          cast && cast?.map((person, index) => {
            return (
              <TouchableOpacity

                key={index}
                onPress={() => navigation.navigate("Person", person)}
                style={{ marginVertical: 10, marginHorizontal: 15, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={{ uri: image500(person.profile_path) }}
                  style={{ height: 60, width: 60, borderRadius: 100, marginBottom: 5, borderWidth: 1, borderColor: 'gray', resizeMode: 'contain' }}
                >

                </Image>
                <Text style={{ fontSize: 10, color: 'white', fontWeight: '100' }}>
                  {
                    person.character.length > 10 ? person.character.slice(0, 10) + '...' : person.character
                  }
                </Text>
                <Text style={{ fontSize: 10, color: 'white', fontWeight: '100', marginTop: 2 }}>
                  {console.log(person)}
                  {
                    person.name.length > 11 ? person.name.slice(0, 10) + '...' : person.name
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