import React from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefa } from '@/hooks/useTarefa';

export default function App() {
  const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefa();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Plantas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova planta..."
          placeholderTextColor={'white'}
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <Button title="Adicionar" onPress={adicionarTarefa} color={'#b93f91'}/>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarefaContainer}>
            <Text style={styles.tarefaTexto}>{item.texto}</Text>
            <TouchableOpacity onPress={() => removerTarefa(item.id)}>
              <Text style={styles.remover}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#9b3d96' },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 , color: '#fff'},
  inputContainer: { flexDirection: 'row', marginBottom: 10 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginRight: 10 , color: '#fff'},
  tarefaContainer: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#b93f91', padding: 15, marginBottom: 5, borderRadius: 5, shadowColor: '#000000', shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 },
  tarefaTexto: { fontSize: 16, color: '#fff' },
  remover: { fontSize: 18, color: 'white' },
});