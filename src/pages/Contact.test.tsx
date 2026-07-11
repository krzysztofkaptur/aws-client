import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the page heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })
})
