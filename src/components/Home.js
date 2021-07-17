import React from 'react';
import { View } from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';
import Realm from 'realm';
import { CourseSchema } from '../db/schema';


const Home = () => {
	const [courses, setCourses] = React.useState([]);
	useEffect(()=> {
		try {
			const realm = await Realm.open({ schema: [CourseSchema] });
			setCourses(realm.objects('Course'));	
		} catch (e) {
			console.log(e);
		}
	},[]);

	return (
		<View>Hello World!</View>
	);
};

export default Home;