import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import Input from '@components/form/Input';
import { useState } from 'react';

function InputWrapper() {
	const [value, setValue] = useState('');

	return (
		<div>
			<Input value={value} onChange={(e) => setValue(e.target.value)} />
			<span data-testid="stateValue">{value}</span>
		</div>
	);
}

describe('Input component', () => {
	it('should render', () => {
		render(<Input />);

		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should display placeholder', () => {
		render(<Input placeholder="test" />);

		expect(screen.getByRole('textbox', { name: /test/i })).toBeVisible();
	});
	it('should change type', () => {
		render(<Input type="number" />);

		expect(screen.getByRole('spinbutton')).toHaveAttribute('type', 'number');
	});
	it('should uncontrolled change input while typing', async () => {
		const inputValue = 'test text';
		const user = userEvent.setup();
		render(<Input />);

		await user.type(screen.getByRole('textbox'), inputValue);

		expect(screen.getByRole('textbox')).toHaveValue(inputValue);
	});
	it('should controlled change input while typing', async () => {
		const inputValue = 'test text';
		const user = userEvent.setup();
		render(<InputWrapper />);

		await user.type(screen.getByRole('textbox'), inputValue);

		expect(screen.getByTestId('stateValue')).toHaveTextContent(inputValue);
		expect(screen.getByRole('textbox')).toHaveValue(inputValue);
	});
	it('should set initial value', () => {
		const initialValue = 'test';
		render(<Input value={initialValue} />);

		expect(screen.getByRole('textbox')).toHaveValue(initialValue);
	});
	it('should be focusable through click', async () => {
		const user = userEvent.setup();
		render(<Input />);

		await user.click(screen.getByRole('textbox'));
		expect(screen.getByRole('textbox')).toHaveFocus();
	});
	it('should be focusable through keyboard', async () => {
		const user = userEvent.setup();
		render(<Input />);

		await user.tab();
		expect(screen.getByRole('textbox')).toHaveFocus();
	});
});
