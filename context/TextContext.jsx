import { createContext, useState } from 'react';

export const TextContext = createContext();

export default function TextProvider({ children }) {
	const [text, setText] = useState([]);

	const keyPressed = (key) => {
		let array1 = [...key];
		let array2 = [...text];

		if (!text.length) {
			setText(array1);
		} else {
			let combination = array2.flatMap((d) => array1.map((v) => d + v));

			console.log({ combination });

			setText(combination);
		}

		console.log({ array1, array2 });

		console.log(array1.flatMap((d) => array2.map((v) => d + v)));
	};

	return (
		<TextContext.Provider value={{ text, keyPressed }}>
			{children}
		</TextContext.Provider>
	);
}
