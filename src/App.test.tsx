import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import App from './App'

it('renders text at top of page', () => {
  render(<App />)
  expect(screen.getByText(/tekst/i)).toBeInTheDocument()
})