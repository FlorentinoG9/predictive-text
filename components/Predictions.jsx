import { useContext } from 'react';
import { TextContext } from '../context/TextContext';

export default function Predictions() {
	const { text } = useContext(TextContext);
	return (
		<div className=' overflow-hidden overflow-y-auto'>
			<ul className='max-h-96 grid grid-cols-12 '>
				{text.map((item, idx) => {
					return <li key={idx}>{item}</li>;
				})}
			</ul>
		</div>
	);
}
