import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Circle from './Circle'
import dataModel from "../models/data_model.json"

test('displays empty circle on initial load', async () => {
    const currCategory = 'initial'
    render(<Circle
        gridPosition={'mockCircleName'}
        circleLabel={'Mock Category Label'}
        currCategory={currCategory}
        dataModel={dataModel}
        loading={false}
    />)
    const circle = await screen.findAllByText(/Mock Category Label/i)
    expect(circle[0]).toHaveClass('circle')
    expect(circle[0]).toHaveClass('mockCircleName')
})