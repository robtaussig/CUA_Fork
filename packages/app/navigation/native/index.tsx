import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../../features/home/screen';
import { UserDetailScreen } from '../../features/user/detail-screen';
import { SignInScreen } from '../../features/signin/screen';
import { SignUpScreen } from '../../features/signup/screen';
import { EmailVerificationScreen } from '../../features/signup/email-verification/screen';
import { SSOOAuthScreen } from '../../features/signup/sso-oauth/screen';
import { SearchScreen } from 'app/features/search/screen';
import { BrowseScreen } from 'app/features/browse/screen';
import { CreateScreen } from 'app/features/create/screen';
import { SettingsScreen } from 'app/features/settings/screen';

const Stack = createNativeStackNavigator<{
  home: undefined;
  'user-detail': {
    id: string;
  };
  signin: undefined;
  signup: undefined;
  'email-verification': undefined;
  'sso-oauth': { strategy: 'google' | 'discord' | 'apple' | 'complete' };
  search: undefined;
  browse: undefined;
  create: undefined;
  settings: undefined;
}>();

export function NativeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'none',
      }}
    >
      <Stack.Screen
        name='home'
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='user-detail'
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
      <Stack.Screen
        name='signin'
        component={SignInScreen}
        options={{
          title: 'Sign In',
        }}
      />
      <Stack.Screen
        name='signup'
        component={SignUpScreen}
        options={{
          title: 'Sign Up',
        }}
      />
      <Stack.Screen
        name='email-verification'
        component={EmailVerificationScreen}
        options={{
          title: 'Email Verification',
        }}
      />
      <Stack.Screen
        name='sso-oauth'
        component={SSOOAuthScreen}
        options={{
          title: 'SSO OAuth',
        }}
      />
      <Stack.Screen
        name='search'
        component={SearchScreen}
        options={{
          title: 'Search',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='browse'
        component={BrowseScreen}
        options={{
          title: 'Browse',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='create'
        component={CreateScreen}
        options={{
          title: 'Create',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='settings'
        component={SettingsScreen}
        options={{
          title: 'Settings',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
