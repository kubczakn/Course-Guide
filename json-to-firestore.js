const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const data = require("./courses.json");


const firebaseConfig = {
  apiKey: "AIzaSyCPwyOI3EnKP7UIj5Y1xPEsTAUO94CU8O4",
  authDomain: "course-guide-426de.firebaseapp.com",
  projectId: "course-guide-426de",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


data.forEach(function(obj) {
	db.collection("CourseGrades").add({
		type: obj.type,
		courses: obj.courses
	}).then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});
    });