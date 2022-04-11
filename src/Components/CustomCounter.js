import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { incrementValue } from '@/Store/Counter/IncrementValue'
import { decrementValue } from '@/Store/Counter/DecrementValue'
import { incrementedAmount } from '@/Store/Counter/IncrementByAmount'

export default function Counter() {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)
  const value = useSelector(state => {
    return state?.counter?.value
  })

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            dispatch(incrementValue.action(value))
          }}
        >
          <Text style={styles.buttonStyle}>+</Text>
        </TouchableOpacity>
        <Text style={styles.valueStyle}>{value}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(decrementValue.action(value))
          }}
        >
          <Text style={styles.buttonStyle}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={setAmount}
          value={amount}
        />
        <Button
          title="Add Amount"
          onPress={() => {
            dispatch(incrementedAmount.action(amount))
            setAmount(0)
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  valueStyle: {
    fontSize: 20,
  },
  buttonStyle: {
    color: '#37BBCE',
    fontSize: 20,
    marginEnd: 20,
    marginStart: 20,
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 100,
    marginLeft: 70,
  },
})
