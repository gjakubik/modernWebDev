
import './ContactForm';
import ContactForm from './ContactForm';

export default function ContactView() {
	return (
		<div>
			<h1>Contact View</h1>
			<ContactForm label1={'Name'} label2={'E-Mail'} label3={'Message'} />
		</div>
	);
}