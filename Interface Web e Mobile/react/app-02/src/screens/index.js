import { Text, View, Button } from 'react-native';

export default function Index({ navigation }) {
  return (
    <View>
      <Text>Olá</Text>

      <Button
        title='Ir para Perfil'
        onPress={() => navigation.navigate('Perfil')}
      />
      <Button
        title='Ir para Estado'
        onPress={() => navigation.navigate('Estado')}
      />
      <Button
        title='Ir para Areas'
        onPress={() => navigation.navigate('Areas')}
      />
    </View>
  );
}
