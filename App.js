import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import Item from './ScrollViewItem'

const appStyle = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flex: 1,
		backgroundColor: 'white'
	}
})

export default class App extends Component {
	render() {
		return (
			<SafeAreaView style={appStyle.container}>
				<ScrollView pagingEnabled={true}>
					<Item text='Scroll me plz'></Item>
					<Item text='Xuan Thanh'></Item>
					<Item text='Giang Pham'></Item>
					<Item text='Phuong MP'></Item>
					<Item text='Huong Nguyen'></Item>
					<Item text='Lan Anh'></Item>
				</ScrollView>
			</SafeAreaView>
		)
	}
}
