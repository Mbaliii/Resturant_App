import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthBackground, AuthButton, AuthInput, AuthCover } from '../components/Auth/auth.styles';
import { Title, SpacerBottom, DefaultText } from '../constants';

export const RegisterScreen = ({ navigation }) => {
  
  const [name, setName] = useState('');

  const [surname, setSurname] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    
    if (email && password && password === confirmPassword) {
      
      navigation.navigate('Login');

    } else {
      
    }
  };

  return (
    <AuthBackground>
      
      <AuthCover>

        <Title>Register</Title>

        <SpacerBottom />

        <AuthInput label="Name" value={name} onChangeText={(text) => setName(text)} />

        <AuthInput label="Surname" value={surname} onChangeText={(text) => setSurname(text)} />

        <AuthInput label="Email" textContentType="emailAddress" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={(text) => setEmail(text)} />

        <AuthInput label="Password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />

        <AuthInput label="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} />

        <SpacerBottom />

        <AuthButton onPress={handleRegister}>Register</AuthButton>

        <SpacerBottom />

        <DefaultText> Already have an account?{' '}

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>

            <Text>Login</Text>

          </TouchableOpacity>{' '}

        </DefaultText>

      </AuthCover>

    </AuthBackground>
  );
};
