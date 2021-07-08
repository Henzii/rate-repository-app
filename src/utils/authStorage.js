import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
    constructor( namespace = 'auth') {
        this.namespace = namespace;
    }

    async getAccessToken() {
        const raaka = await AsyncStorage.getItem(
            `${this.namespace}:accessToken`
        );
        return raaka ? raaka : null;
    }

    async setAccessToken(token) {
        await AsyncStorage.setItem(
            `${this.namespace}:accessToken`,
            token
        );
    }

    async clearAccessToken() {
        await AsyncStorage.removeItem(
            `${this.namespace}:accessToken`
        );
    }
}

export default AuthStorage;