import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'

export default class ScrollViewItem extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 90 }}>{this.props.text}</Text>
                <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }}></Image>
                <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }}></Image>
                <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }}></Image>
                <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }}></Image>
                <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }}></Image>
            </View>
        )
    }
}
