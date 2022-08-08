import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import emailjs from '@emailjs/browser';

import Form from '@components/views/Contact/Form';
import renderWithMui from '@utils/renderWithMui';

jest.mock('@emailjs/browser');

const emailjsMock = jest.mocked(emailjs, true);

describe('Contact form', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should render', () => {
		renderWithMui(<Form />);

		expect(screen.getByRole('form')).toBeInTheDocument();
	});
	it('should render inputs', () => {
		renderWithMui(<Form />);

		expect(screen.getAllByRole('textbox')).toHaveLength(4);
	});
	it('should render submit button', () => {
		renderWithMui(<Form />);

		expect(screen.getByRole('button', { name: /submit/i })).toBeVisible();
	});
	it('should render email link', () => {
		renderWithMui(<Form />);

		expect(screen.getByRole('link', { name: /Write me an e-mail/i })).toBeVisible();
	});
	it('should have focusable inputs', async () => {
		const user = userEvent.setup();
		renderWithMui(<Form />);

		await user.tab();
		expect(screen.getByRole('link', { name: /Write me an e-mail/i })).toHaveFocus();

		await user.tab();
		expect(screen.getByRole('textbox', { name: /name/i })).toHaveFocus();

		await user.tab();
		expect(screen.getByRole('textbox', { name: /email/i })).toHaveFocus();

		await user.tab();
		expect(screen.getByRole('textbox', { name: /subject/i })).toHaveFocus();

		await user.tab();
		expect(screen.getByRole('textbox', { name: /message/i })).toHaveFocus();

		await user.tab();
		expect(screen.getByRole('button', { name: /submit/i })).toHaveFocus();
	});
	it('should correctly input values', async () => {
		const user = userEvent.setup();
		renderWithMui(<Form />);

		await user.type(screen.getByRole('textbox', { name: /name/i }), 'David');
		await user.type(screen.getByRole('textbox', { name: /email/i }), 'david@gmail.com');
		await user.type(screen.getByRole('textbox', { name: /message/i }), 'test message');

		expect(screen.getByRole('textbox', { name: /name/i })).toHaveValue('David');
		expect(screen.getByRole('textbox', { name: /email/i })).toHaveValue(
			'david@gmail.com'
		);
		expect(screen.getByRole('textbox', { name: /message/i })).toHaveValue('test message');
	});
	it('should have required inputs', () => {
		renderWithMui(<Form />);

		expect(screen.getByRole('textbox', { name: /name/i })).toBeRequired();
		expect(screen.getByRole('textbox', { name: /email/i })).toBeRequired();
		expect(screen.getByRole('textbox', { name: /subject/i })).not.toBeRequired();
		expect(screen.getByRole('textbox', { name: /message/i })).toBeRequired();
	});
	it('should submit form and display success message', async () => {
		const user = userEvent.setup();
		emailjsMock.send.mockResolvedValue({ status: 200, text: 'OK' });
		renderWithMui(<Form />);

		await user.click(screen.getByRole('button', { name: /submit/i }));
		expect(emailjsMock.send.mock.calls).toHaveLength(0);

		await user.type(screen.getByRole('textbox', { name: /name/i }), 'David');
		await user.type(screen.getByRole('textbox', { name: /email/i }), 'david@gmail.com');
		await user.type(screen.getByRole('textbox', { name: /message/i }), 'message');

		await user.click(screen.getByRole('button', { name: /submit/i }));
		expect(emailjsMock.send.mock.calls).toHaveLength(1);
		expect(screen.getByText('Message successfully sent!')).toBeVisible();
	});
	it('should display error message on fail', async () => {
		const user = userEvent.setup();
		emailjsMock.send.mockRejectedValue(null);
		renderWithMui(<Form />);

		await user.type(screen.getByRole('textbox', { name: /name/i }), 'David');
		await user.type(screen.getByRole('textbox', { name: /email/i }), 'david@gmail.com');
		await user.type(screen.getByRole('textbox', { name: /message/i }), 'message');

		await user.click(screen.getByRole('button', { name: /submit/i }));
		expect(emailjsMock.send.mock.calls).toHaveLength(1);
		expect(screen.getByText('Something went wrong :/ Please try again!')).toBeVisible();
	});
});
