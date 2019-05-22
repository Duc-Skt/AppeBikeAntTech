import * as React from 'react'
import {Text, View , StyleSheet} from 'react-native'
import { fonts } from '../../vars'

export default function App() {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>AppeBike</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  text: {
    fontSize: fonts.size.lxl,
  }
})
