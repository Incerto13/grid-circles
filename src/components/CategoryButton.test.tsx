import { render, screen } from '@testing-library/react'
import CategoryButton from './CategoryButton'

test('has the appropriate class on initial load', async () => {
    const currCategory = 'initial'
    render(<CategoryButton
        btnCategory={'mockBtnCategory'}
        btnCategoryLabel={'Mock Category Btn Label'}
        currBtnCategory={currCategory}
        handleClick={() => console.log('fake call')}
    />)
    const btn = await screen.findAllByText(/Mock Category Btn Label/i)
    expect(btn[0]).toHaveClass('mockBtnCategory')
    expect(btn[0]).not.toHaveClass('selected-btn')
})