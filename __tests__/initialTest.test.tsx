import { render, screen } from '@testing-library/react'

import TestComponent from '../components/testComponent'

describe('when viewing the component', () => {
  beforeAll(() => {
    render(<TestComponent />)
  })
  it('should display text', () => {
    screen.findByText('TEST')
  })
})