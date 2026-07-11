import { render, screen } from '@testing-library/react'
import About from './About'

describe('About', () => {
  it('renders the page heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
  })
})
