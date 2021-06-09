import { render, screen } from '@testing-library/react'

import NavBar from '../components/NavBar'

describe('when viewing the page', () => {
  beforeEach(() => {
    render(<NavBar />)
  })

  it('should find a link to the homepage', () => {
    expect(screen.getByRole('link', {name: 'Home'}).getAttribute('href')).toBe('/')
  })
})