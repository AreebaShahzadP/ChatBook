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
import Ionicons from 'react-native-vector-icons/Ionicons'


const LoginScreen: React.FC = ({navigation}:any) => {
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
              <Ionicons name="mail" color="#2096F3" size={20} />
                <TextInput 
                  placeholder="Email address"
                  placeholderTextColor={'grey'}
                  style={styles.input}
                  value={email}
                  onChangeText={text => setEmail(text)}
                /> 
              </View> 
              <View style={styles.inputContainer}>
              <Ionicons name="lock-closed" color="#2096F3" size={20} />
            

                <TextInput
                  placeholder="Password"
                  placeholderTextColor={'grey'}
                  style={styles.input}
                  value={password}
                  onChangeText={text => setPassword(text)}
                  secureTextEntry
                />
              </View>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  Alert.alert('Login Success');
                }}>
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 16,color:'black'}}>Don't have an Account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp') }>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#2096F3',
                      fontWeight: 'bold',
                    }}>
                    Signup
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

export default LoginScreen;
