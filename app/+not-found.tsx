import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotfoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Não encontrado' }} />
            <View style={styles.container}>
                <Link href="/index" style={styles.button}>
                    vá de volta para a tela inicial
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create
    ({
        container:
        {
            flex: 1,
            backgroundColor: '#f00e0e',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text:
        {
            color: '#0fec98'
        },
        button:
        {
            fontSize: 20,
            textDecorationLine: 'underline',
            color: '#fff',
        },
    });