import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: 'AIzaSyDN4ddFaDqC_r3wse4a5dDoLZBYuaSdbqk',
    authDomain: 'final-project-ojt08.firebaseapp.com',
    databaseURL:
        'https://final-project-ojt08-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'final-project-ojt08',
    storageBucket: 'final-project-ojt08.appspot.com',
    messagingSenderId: '858364278902',
    appId: '1:858364278902:web:411977e8980709e8120757',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
