import { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function Estado() {
  // let nome = 'Igor';

  const [nome, setNome] = useState('Igor');
  const [texto, setTexto] = useState('');

  function ohMyGod() {
    setNome('Igor ' + Math.ceil(Math.random() * 10));
  }
  //

  return (
    <View>
      <Text>{nome}</Text>
      <Text>Tela de Estado</Text>
      <Button title='Alterar Nome' onPress={ohMyGod} />
      <Text>Digite um texto:</Text>
      <TextInput  onChangeText={setTexto} />
      <Button title="Alterar com campo" onPress={() => {
        setNome(texto)
      }} />
    </View>
  );
}
