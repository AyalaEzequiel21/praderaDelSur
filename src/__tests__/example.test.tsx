import { render, screen } from '@testing-library/react'
import { MensageHome } from '../pages'



test('render mensageHome component', () => {
    render(<MensageHome/>)
    const element = screen.getByText(/Descubre el sabor que nos distingue, más de 10 años ofreciendo calidad y pasión por nuestros productos./i)
    expect(element).toBeInTheDocument()
})