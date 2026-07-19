import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home', () => {
  it('renders the page heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: 'Home edited' })).toBeInTheDocument()
  })
})
