import Rebase from 're-base';
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAer6eLeMteldz_ftCIMFaS1iVuXg6ouPA",
    authDomain: "react-testing-b3639.firebaseapp.com",
    databaseURL: "https://react-testing-b3639.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;