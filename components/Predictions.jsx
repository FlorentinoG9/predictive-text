import { useContext } from 'react';
import { TextContext } from '../context/TextContext';

export default function Predictions() {
	const { text } = useContext(TextContext);
	return <div>{text}</div>;
}
