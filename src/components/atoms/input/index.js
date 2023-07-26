import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { color } from '../../../utils'

const Input = ({ placeholder, ...rest }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                {...rest}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 51,
        borderWidth: 1,
        borderColor: color.greyColors,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: color.blackColors,
    }
})