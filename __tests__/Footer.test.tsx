import { render, screen } from '@testing-library/react'

import Footer from '../components/Footer'

describe('when displaying the footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('should have a link to the home page', () => {
    expect(screen.getByRole('link', {name: 'Home'}).getAttribute('href')).toBe('/')
  })
})