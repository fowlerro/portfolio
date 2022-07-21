import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App test', () => {
	it('should contain h1', () => {
		render(<App />);
		expect(screen.getByText('Hello world!')).toBeInTheDocument();
	});
});
