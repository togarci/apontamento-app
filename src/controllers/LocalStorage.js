import { AsyncStorage } from 'react-native';

export default class LocalStorage {
    async setItem(key, value) {
        await AsyncStorage.setItem(key, value).catch(e => e)
    }

    async getItem(key) {
        return await AsyncStorage.getItem(key).then(value =>  value )
    }

    async removeItem(itemName) {
		await AsyncStorage.removeItem(itemName)
	}
}
