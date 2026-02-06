import { View, Text, TextInput, Button, Alert } from 'react-native'
import { useState } from 'react'
import { api } from '@/lib/api'
import { saveToken } from '@/lib/token'
import { router } from 'expo-router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    try {
      const response = await api.post('/auth/login', {
        email,
        password,
      })

      await saveToken(response.data.access_token)
      router.replace('/')
    } catch (err: any) {
      Alert.alert('Erro', 'Email ou senha inválidos')
    }
  }

  return (
    <View style={{ padding: 24 }}>
      <Text>Login</Text>

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

      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Criar conta" onPress={() => router.push('/register')} />
    </View>
  )
}
