import { render, screen, fireEvent } from '@testing-library/react'
import {
	describe,
	it,
	expect,
} from 'vitest'
import App from './App'

describe('App Component', () => {
	it('renders Vite and React logo links with correct hrefs', () => {
		render(<App />)

		const viteLink = screen.getByTestId('app-logo-link')
		const reactLink = screen.getByTestId('react-logo-link')

		expect(viteLink).toHaveAttribute('href', 'https://vite.dev')
		expect(viteLink).toHaveAttribute('target', '_blank')

		expect(reactLink).toHaveAttribute('href', 'https://react.dev')
		expect(reactLink).toHaveAttribute('target', '_blank')
	})

	it('increments count when button is clicked', () => {
		render(<App />)

		const button = screen.getByTestId('increment-count')

		expect(button).toHaveTextContent('count is 0')

		fireEvent.click(button)

		expect(button).toHaveTextContent('count is 1')
	})
})
