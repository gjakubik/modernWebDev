/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


export default function ContactForm({label1, label2, label3}) {
	return (
		<div>
			<form action="mailto:gjakubik@nd.edu" method="post" enctype="text/plain">
			{label1}:<br />
			<input type="text" name="name" /><br />
			{label2}:<br />
			<input type="text" name="mail" /><br />
			{label3}:<br />
			<input type="text" name="comment" size="50" /><br /><br />
			<input type="submit" value="Send" />
			<input type="reset" value="Reset" />
		</form>
		</div>
	);
}