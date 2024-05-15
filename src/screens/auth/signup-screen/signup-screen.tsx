import React, {useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const SignupScreen: React.FC = ({navigation}:any ) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#2096F3'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#2096F3'}}>
        <ScrollView contentContainerStyle={{flex: 1, backgroundColor: 'white'}}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../../../assets/images/logo/chat.png')}
              />
            </View>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Username"
                  style={styles.input}
                  value={username?.toLowerCase()}
                  onChangeText={text => setUsername(text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Email address"
                  style={styles.input}
                  value={email?.toLowerCase()}
                  onChangeText={text => setEmail(text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Password"
                  style={styles.input}
                  value={password}
                  onChangeText={text => setPassword(text)}
                  secureTextEntry
                />
              </View>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  Alert.alert('Signup Success');
                }}>
                <Text style={styles.btnText}>Signup</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 16}}>Already have an Account? </Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#2096F3',
                      fontWeight: 'bold',
                    }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignupScreen;