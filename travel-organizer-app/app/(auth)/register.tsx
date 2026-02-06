import { View, Text, TextInput, Button, Alert } from 'react-native'
import { useState } from 'react'
import { api } from '@/lib/api'
import { router } from 'expo-router'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister() {
    try {
      await api.post('/auth/register', {
        name,
        email,
        password,
      })

      Alert.alert('Sucesso', 'Conta criada, faça login')
      router.replace('/login')
    } catch {
      Alert.alert('Erro', 'Erro ao criar conta')
    }
  }

  return (
    <View style={{ padding: 24 }}>
      <Text>Criar conta</Text>

      <TextInput placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Registrar" onPress={handleRegister} />
    </View>
  )
}
