import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import Layout from './Layout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

function renderApp(initialPath = '/') {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'contact', element: <Contact /> },
        ],
      },
    ],
    { initialEntries: [initialPath] },
  )

  return render(<RouterProvider router={router} />)
}

describe('Layout', () => {
  it('renders navigation links', () => {
    renderApp()

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('navigates to the about page', () => {
    renderApp()

    fireEvent.click(screen.getByRole('link', { name: 'About' }))

    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
  })
})
