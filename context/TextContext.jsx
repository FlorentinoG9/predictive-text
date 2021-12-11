import { createContext, useState } from 'react';

export const TextContext = createContext();

export default function TextProvider({ children }) {
	const [text, setText] = useState([]);

	const keyPressed = (key) => {
		let array1 = [...key];
		let array2 = [...text];

		if (key === '') {
			setText([])
		}

		if (!text.length) {
			setText(array1);
		} else {
			let combination = array2.flatMap((d) => array1.map((v) => d + v));
			setText(combination);
		}

	};

	return (
		<TextContext.Provider value={{ text, keyPressed }}>
			{children}
		</TextContext.Provider>
	);
}
