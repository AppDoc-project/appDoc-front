import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/login/LoginScreen';
import SelectTypeScreen from '@screens/signup/SelectTypeScreen';
import DoctorGetInfoScreen from '@screens/signup/doctor/DoctorGetInfoScreen';
import HospitalGetInfoScreen from '@screens/signup/doctor/HospitalGetInfoScreen';
import HospitalGetInfoScreen2 from '@screens/signup/doctor/HospitalGetInfoScreen2';
import GetAuthCodeScreen from '@screens/signup/patient/GetAuthCodeScreen';
import PatientGetInfoScreen from '@screens/signup/patient/PatientGetInfoScreen';
import { Auth } from 'context/AuthContext';
import React, { useState } from 'react';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  //의사 회원가입 API 전송 객체
  const [doctorSignUpRequest, setDoctorSignUpRequest] = useState({
    email: '',
    name: '',
    password: '',
    contact: '',
    certificateAddress: '',
    address: '',
    medicalSpeciality: '',
    selfDescription: '',
    dateOfBirth: '',
    hospitalName: '',
  });

  //환자 회원가입 API 전송 객체
  const [patientSignUpRequest, setPatientSignUpRequest] = useState({
    email: '',
    name: '',
    password: '',
    contact: '',
    dateOfBirth: '',
  });

  //현재 접속자 정보 객체
  const [loginUser, setLoginUser] = useState({
    id: null,
    email: '',
    name: '',
    isTutor: false,
  });

  return (
    <Auth.Provider
      value={{
        doctor: [doctorSignUpRequest, setDoctorSignUpRequest],
        patient: [patientSignUpRequest, setPatientSignUpRequest],
        loginUserInfo: [loginUser, setLoginUser],
      }}
    >
      <Stack.Navigator initialRouteName="loginScreen">
        <Stack.Screen
          name={'loginScreen'}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'selectTypeScreen'}
          component={SelectTypeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'doctorGetInfoScreen'}
          component={DoctorGetInfoScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'hospitalGetInfoScreen'}
          component={HospitalGetInfoScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'hospitalGetInfoScreen2'}
          component={HospitalGetInfoScreen2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'patientGetInfoScreen'}
          component={PatientGetInfoScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'getAuthCodeScreen'}
          component={GetAuthCodeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </Auth.Provider>
  );
}

export default AuthRoutes;
