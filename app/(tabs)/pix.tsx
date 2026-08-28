import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import * as Clipboard from 'expo-clipboard';

export default function Pix() {
  const router = useRouter();

  const codigoPix = 'SEU-CODIGO-PIX-AQUI';

  const copiarPix = async () => {
    await Clipboard.setStringAsync(codigoPix);
    alert('Código PIX copiado!');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Realizar pagamento PIX
      </Text>

      <Text style={styles.instrucao}>
        Escaneie o QR Code abaixo:
      </Text>

      <Image
        source={require('@/assets/images/qrcode-pix.png')}
        style={styles.qrcode}
      />

      <Text style={styles.textoChave}>
        Chave PIX: 
      </Text>

      <Text style={styles.chave}>
        00020126330014br.gov.bcb.pix0111422470078645204000053039865802BR5922PIETRO MARTINS BERTOLO6009Sao Paulo62290525REC6A91C3DC1935731954776163047276
      </Text>

      <Pressable
        style={styles.botaoCopiar}
        onPress={copiarPix}
      >
        <Text style={styles.textoBotao}>
          📋 Copiar código PIX
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  instrucao: {
    fontSize: 16,
    marginBottom: 20,
  },

  qrcode: {
    width: 250,
    height: 250,
    marginBottom: 25,
  },

  textoChave: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  chave: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 30,
  },

  botao: {
    backgroundColor: '#2e7d32',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  botaoCopiar: {
    backgroundColor: '#2e7d32',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 12,
  },

});