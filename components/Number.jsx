import React from 'react';
import { useContext } from 'react';
import { TextContext } from '../context/TextContext';

export default function Number({ num, children }) {
	const {keyPressed}  = useContext(TextContext);
	return (
		<button
			onClick={() => keyPressed(children)}
			className='bg-gradient-to-tr from-pink-500 to-blue-500 text-white border rounded-full w-20 h-20 text-2xl m-1 font-thin bg-slate-300'
		>
			{num}
			<div>{children}</div>
		</button>
	);
}
