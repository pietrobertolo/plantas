import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Plantas são seres vivos do Reino Plantae que produzem seu próprio alimento por meio da fotossíntese,
        utilizando luz solar, água e gás carbônico. Elas são fundamentais para a vida na Terra, pois liberam oxigênio e servem de base para a cadeia alimentar.
        As plantas possuem partes como raiz (fixação e absorção), caule (sustentação e transporte) e folhas (fotossíntese).
        As flores são estruturas reprodutivas das plantas chamadas angiospermas. Elas têm a função de produzir sementes e garantir a reprodução da espécie.
        Geralmente, são formadas por pétalas (que atraem polinizadores), sépalas, estames (parte masculina) e carpelo (parte feminina).
        As flores podem ter cores, cheiros e formas variadas para atrair animais como abelhas, borboletas e pássaros, que ajudam na polinização.
        Esse processo é essencial para a formação de frutos e sementes.
        Além disso, plantas e flores têm grande importância ecológica, econômica e cultural, sendo usadas na alimentação, medicina, ornamentação e produção de diversos materiais.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b64646',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    color: '#000000',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
