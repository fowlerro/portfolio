import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { styled, Typography, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from '@components/form/Input';
import Paperplane from '@components/icons/Paperplane';

import useBoolean from '@hooks/useBoolean';
import useIsDesktop from '@hooks/useIsDesktop';

import EmailLink from './EmailLink';

interface Errors {
	name?: string;
	email?: string;
	subject?: string;
	message?: string;
}

const StyledForm = styled('form')({
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
});

const StyledButton = styled(LoadingButton)(({ theme }) => ({
	justifyContent: 'flex-start',
	color: theme.palette.background.default,
	paddingBlock: '8px',
	flexGrow: 1,

	[theme.breakpoints.up('md')]: {
		flexGrow: 0,
	},
}));

const StyledInputsWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	overflow: 'hidden',
});

const Footer = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	flexWrap: 'wrap',
	rowGap: '1rem',
});

export default function Form(): JSX.Element {
	const isDesktop = useIsDesktop();
	const formRef = useRef<HTMLFormElement>(null);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const [errors, setErrors] = useState<Errors>({});

	const [isLoading, { setTrue: startLoading, setFalse: stopLoading }] = useBoolean();
	const [success, { toggle: setSuccess }] = useBoolean();
	const [error, { toggle: setError }] = useBoolean();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!formRef.current) return;
		startLoading();
		setErrors({});

		const fieldErrors: Errors = {};
		if (!name) fieldErrors.name = 'Name is required!';
		if (!email) fieldErrors.email = 'Email is required!';
		if (!message) fieldErrors.message = 'Message is required!';

		if (Object.keys(fieldErrors).length) {
			setErrors(fieldErrors);
			stopLoading();
			return;
		}

		emailjs
			.send(
				'service_um025me',
				'template_b8qxn3d',
				{
					name,
					email,
					subject,
					message: message.replace(/(?:\r\n|\r|\n)/g, '<br />'),
				},
				'd3qDIYynqKU2Pe4EC'
			)
			.then(
				() => {
					stopLoading();
					setSuccess();
					setName('');
					setEmail('');
					setSubject('');
					setMessage('');
				},
				() => {
					stopLoading();
					setError();
				}
			);
	};

	return (
		<StyledForm ref={formRef} onSubmit={handleSubmit} name="Contact">
			{!isDesktop && <EmailLink />}
			<StyledInputsWrapper>
				<Input
					type="text"
					name="name"
					placeholder="Name"
					errorMessage={errors.name}
					disabled={isLoading}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					type="email"
					name="email"
					placeholder="Email"
					errorMessage={errors.email}
					disabled={isLoading}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					type="text"
					name="subject"
					placeholder="Subject"
					errorMessage={errors.subject}
					disabled={isLoading}
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
				/>
				<Input
					type="text"
					name="message"
					placeholder="Message"
					errorMessage={errors.message}
					disabled={isLoading}
					multiline
					minRows={6}
					maxRows={14}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</StyledInputsWrapper>
			<Footer>
				<StyledButton
					variant="contained"
					startIcon={<Paperplane />}
					loading={isLoading}
					type="submit"
				>
					<Typography
						variant="button"
						sx={{
							width: '100%',
							textAlign: 'center',
							paddingRight: '24px',
							paddingLeft: [0, null, '24px'],
						}}
					>
						SUBMIT
					</Typography>
				</StyledButton>
				{isDesktop && <EmailLink />}
			</Footer>
			<Box minHeight="2rem">
				{(success || error) && (
					<Typography variant="body2" color={success ? 'success.dark' : 'error'}>
						{success
							? 'Message successfully sent!'
							: 'Something went wrong :/ Please try again!'}
					</Typography>
				)}
			</Box>
		</StyledForm>
	);
}
