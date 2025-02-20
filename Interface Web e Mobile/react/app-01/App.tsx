import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const nome = 'Luiz Felipe';
  const idade = 69;

  // alert('Olá mundo')

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.foto} source={require('./assets/foto.png')} />
      </View>
      <Text style={styles.curso}>Sistemas para Internet</Text>
      <Text style={styles.materia}>Interface Web e Mobile</Text>

      <Text style={styles.textoGrande}>Seu nome: {nome}</Text>
      <Text style={styles.textoGrande}>Sua idade: {idade} anos</Text>
      <Text style={{ color: 'brown', ...styles.textoGrande }}>Instituto: IFRN</Text> 

      <Button title='Cutucar' onPress={() => alert('Luiz diz: Uiuiui aiaiai')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    gap: 10,
    padding: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  curso: {
    textAlign: 'center',
    color: 'blue',
    fontWeight: '800',
  },
  materia: {
    letterSpacing: 4,
    fontSize: 24,
    textAlign: 'center',
  },
  foto: {
    height: 300,
    width: 300,
    borderRadius: 200,
  },
  textoGrande: {
    fontSize: 24
  }
});
