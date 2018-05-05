import { AsyncStorage } from 'react-native';

export const saveState = async (state) => {
	try {
		await AsyncStorage.setItem('state', JSON.stringify(state));
	} catch (err) {
		console.log(err);
	}
};

export const getState = async () => {
	let state;
	try {
		state = JSON.parse(await AsyncStorage.getItem('state'));
	} catch (err) {
		console.log(err);
	} finally {
		return state;
	}
};
