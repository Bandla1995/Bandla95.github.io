import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
  
client
  .setProject('68812d290020eb3498cf')          // Your project ID
  .setPlatform('dev.bebakho.mini_app')     // Your app bundle ID (for Android) or bundle identifier (for iOS)


export const account = new Account(client);
export const avatars = new Avatars(client);
