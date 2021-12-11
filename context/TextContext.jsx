import { createContext, useState } from 'react';

export const TextContext = createContext();

export default function TextProvider({ children }) {
	const [text, setText] = useState([]);

	const keyPressed = (key) => {
		let txt = [...key];

    console.log(text);
		for (let i = 0; i < txt.length; i++) {
			// setText([...text, Array(txt[i])]);
      setText(prev => [...prev, Array(txt[i])])
		}

	};

	return (
		<TextContext.Provider value={{ text, keyPressed }}>
			{children}
		</TextContext.Provider>
	);
}
