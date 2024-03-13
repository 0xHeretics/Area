import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "authdomain",
  projectId: "projectid",
  storageBucket: "StorageBucket",
  messagingSenderId: "SENDERID",
  appId: "appID"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp