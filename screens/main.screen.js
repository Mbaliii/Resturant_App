import React from 'react';
import { AuthBackground, AuthButton } from '../components/Auth/auth.styles';
import { SpacerBottom } from '../constants';
import { Text, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export const MainScreen = ({ navigation }) => {
  return (
    <AuthBackground>
      <View style={{ width: '100%', height: 150 }}>

        <LottieView animation="key" autoPlay loop resizeMode="cover" source={require('../assets/watermelon.json')} />

      </View>

      <View>

        <Text style={[styles.title, { color: 'black' }]}> Welcome To Infinity</Text>

        <AuthButton icon="lock-open-outline" onPress={() => navigation.navigate('Login')}>
          {' '} Login </AuthButton>

        <SpacerBottom />

        <AuthButton icon="email" onPress={() => navigation.navigate('Register')}>
          {' '} Register
        </AuthButton>

      </View>
    </AuthBackground>
  );
};

MainScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    marginBottom: 20,
    color: ''
  },
});
