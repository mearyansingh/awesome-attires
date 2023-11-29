// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDT5LVB8FzfcHm-YmJoZqQkyd_jr3FQzh4",
	authDomain: "awesome-attires.firebaseapp.com",
	projectId: "awesome-attires",
	storageBucket: "awesome-attires.appspot.com",
	messagingSenderId: "785584528210",
	appId: "1:785584528210:web:838240aa132475e192388b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

/**Function to add the collection & documents in the database */
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	// console.log(collectionKey, "collectionKey");
	// console.log(objectsToAdd, "objectsToAdd");
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});
	await batch.commit();
	// console.log("done");
};

/**Function to get the data of categories collection */
export const getCollectionAndDocuments = async () => {
	const collectionRef = collection(db, "categories");
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
};

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return;
	const userDocRef = doc(db, "users", userAuth.uid);
	//   console.log(userDocRef, "userDocRef");

	const userSnapshot = await getDoc(userDocRef);
	//   console.log(userSnapshot, "userSnapshot");

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}
	return userDocRef;
};

/** createUserWithEmailAndPassword*/
export const createAuthUserWithEmailAndPAssword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

/** signInWithEmailAndPassword function*/
export const signInAuthUserWithEmailAndPAssword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

/** signOut function*/
export const signOutUser = async () => await signOut(auth);

/** onAuthStateChanged*/
export const onAuthStateChangedListner = (callback) =>
	onAuthStateChanged(auth, callback);
