<script>
	import { FirebaseApp, User, Doc, Collection } from "sveltefire";
	import firebase from "firebase/app";
	import "firebase/firestore";
	import "firebase/auth";
	import "firebase/performance";
	import "firebase/analytics";
	
	import { Route, router } from "tinro";
	router.subscribe((_) => window.scrollTo(0, 0));
	import Dashboard from "./auth/Dashboard.svelte";
	import Main from "./Main.svelte";
	import Home from "./routes/Home.svelte";
	import Login from "./routes/Login.svelte";
	import Logout from "./routes/Logout.svelte";
	import Settings from "./routes/Settings.svelte";
	import Signup from "./routes/Signup.svelte";

	import { setContext } from 'svelte';
	setContext('loggedIn', true)
	
	const firebaseConfig = {
		apiKey: "AIzaSyDQEWgX1XY4FbY5-IlCLHHt2qwjiwQtfDU",
		authDomain: "spind-ee50d.firebaseapp.com",
		projectId: "spind-ee50d",
		storageBucket: "spind-ee50d.appspot.com",
		messagingSenderId: "47920929566",
		appId: "1:47920929566:web:8906d6609e0e8a473a870f",
	};
	firebase.initializeApp(firebaseConfig);

	const login = (e) => {
		const user = e.detail;
		// console.log(user);

		firebase
			.auth()
			.signInWithEmailAndPassword(user.email, user.password)
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log("ERROR:", errorMessage);
			});
	};
</script>

<FirebaseApp {firebase}>
	<User let:user let:auth >

	</User>
</FirebaseApp>

<Route path="/">
	<Main>
		<Home />
	</Main>
</Route>

<Route path="/login">
	<Main>
		<Login on:login={(e) => login(e)} />
	</Main>
</Route>

<Route path="/signup">
	<Main>
		<Signup />
	</Main>
</Route>

<Route path="/settings">
	<Main>
		<Settings />
	</Main>
</Route>

<Route path="/dashboard">
	<Main>
		<Dashboard />
	</Main>
</Route>

<Route path="/logout">
	<Main>
		<Logout />
	</Main>
</Route>
