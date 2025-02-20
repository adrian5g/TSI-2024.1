import { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function Perfil({ navigation }) {
  const [areas, setAreas] = useState({});
  const [test, setTest] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.40.1.33:8000/api/v1/areas/listar/?format=json');
        const result = await response.json();

        setAreas(result);
      } catch (error) {
        setTest('Erro: ' + error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Perfil</Text>

      <Button title='Ir para Index' onPress={() => navigation.navigate('Index')} />
    </View>
  );
}
