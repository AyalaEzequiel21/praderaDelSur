import { render } from "@testing-library/react"
import { CardCategorieProduct } from "../pages"

const mackup = {
    id: 1, 
    title: 'Productos X',
    imageUrl: ''
}

describe('CardCategoryProducts', () => {
    it('should render correctly', () => {
        const card = render(<CardCategorieProduct categorie={mackup}/>)
        expect(card).toBeTruthy()
    })
})