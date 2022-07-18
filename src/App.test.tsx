/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import dataModel from './models/data_model.json';

test('renders all appropriate category buttons and circles', () => {
  render(<App />);
  const freeSpirit = screen.getByText(/Free spirit/i);
  expect(freeSpirit).toBeInTheDocument();
  const achiever = screen.getByText(/Achiever/i);
  expect(achiever).toBeInTheDocument();
  const caregiver = screen.getByText(/Caregiver/i);
  expect(caregiver).toBeInTheDocument();
  const achievement = screen.getByText(/Achievement/i);
  expect(achievement).toBeInTheDocument();
  const conservation = screen.getByText(/Conservation/i);
  expect(conservation).toBeInTheDocument();
  const caring = screen.getByText(/Caring/i);
  expect(caring).toBeInTheDocument();
  const freedom = screen.getByText(/Freedom/i);
  expect(freedom).toBeInTheDocument();
  const respect = screen.getByText(/Respect/i);
  expect(respect).toBeInTheDocument();
  const tradition = screen.getByText(/Tradition/i);
  expect(tradition).toBeInTheDocument();
  const enjoyment = screen.getByText(/Enjoyment/i);
  expect(enjoyment).toBeInTheDocument();
  const stability = screen.getByText(/Stability/i);
  expect(stability).toBeInTheDocument();
  const equityJustice = screen.getByText('Equality/justice');
  expect(equityJustice).toBeInTheDocument();
});

test('that [Free Spirit] category buttons triggers classes in accordance with data model', async () => {
  const { container } = render(<App />);
  fireEvent.click(screen.getByText('Free spirit'))
  const circles = container.getElementsByClassName('circle')
  expect(circles[0]).toHaveClass(dataModel.freeSpirit.achievement)
  expect(circles[1]).toHaveClass(dataModel.freeSpirit.conservation)
  expect(circles[2]).toHaveClass(dataModel.freeSpirit.caring)
  expect(circles[3]).toHaveClass(dataModel.freeSpirit.freedom)
  expect(circles[4]).toHaveClass(dataModel.freeSpirit.respect)
  expect(circles[5]).toHaveClass(dataModel.freeSpirit.tradition)
  expect(circles[6]).toHaveClass(dataModel.freeSpirit.enjoyment)
  expect(circles[7]).toHaveClass(dataModel.freeSpirit.stability)
  expect(circles[8]).toHaveClass(dataModel.freeSpirit.equalityJustice)
});

test('that [Achiever] category buttons triggers classes in accordance with data model', async () => {
  const { container } = render(<App />);
  fireEvent.click(screen.getByText('Achiever'))
  const circles = container.getElementsByClassName('circle')
  expect(circles[0]).toHaveClass(dataModel.achiever.achievement)
  expect(circles[1]).toHaveClass(dataModel.achiever.conservation)
  expect(circles[2]).toHaveClass(dataModel.achiever.caring)
  expect(circles[3]).toHaveClass(dataModel.achiever.freedom)
  expect(circles[4]).toHaveClass(dataModel.achiever.respect)
  expect(circles[5]).toHaveClass(dataModel.achiever.tradition)
  expect(circles[6]).toHaveClass(dataModel.achiever.enjoyment)
  expect(circles[7]).toHaveClass(dataModel.achiever.stability)
  expect(circles[8]).toHaveClass(dataModel.achiever.equalityJustice)
});

test('that [Caregiver] category buttons triggers classes in accordance with data model', async () => {
  const { container } = render(<App />);
  fireEvent.click(screen.getByText('Caregiver'))
  const circles = container.getElementsByClassName('circle')
  expect(circles[0]).toHaveClass(dataModel.caregiver.achievement)
  expect(circles[1]).toHaveClass(dataModel.caregiver.conservation)
  expect(circles[2]).toHaveClass(dataModel.caregiver.caring)
  expect(circles[3]).toHaveClass(dataModel.caregiver.freedom) 
  expect(circles[4]).toHaveClass(dataModel.caregiver.respect)
  expect(circles[5]).toHaveClass(dataModel.caregiver.tradition)
  expect(circles[6]).toHaveClass(dataModel.caregiver.enjoyment)
  expect(circles[7]).toHaveClass(dataModel.caregiver.stability)
  expect(circles[8]).toHaveClass(dataModel.caregiver.equalityJustice)
});
