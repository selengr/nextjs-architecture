import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
// eslint-disable-next-line no-undef
describe('Page', () => {
  // eslint-disable-next-line no-undef
  it('renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    // eslint-disable-next-line no-undef
    expect(heading).toBeInTheDocument()
  })
})