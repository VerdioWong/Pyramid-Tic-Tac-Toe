import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('sets an empty square as taken', () => {
  render(<App />);
  const square = screen.getByTestId('square-0');
  fireEvent.click(square);
  expect(square.querySelector('img')).toBeInTheDocument();
});

test('prevents a taken square from being selected again', () => {
  render(<App />);
  const square = screen.getByTestId('square-0');
  fireEvent.click(square);
  fireEvent.click(square);
  expect(square.querySelectorAll('img').length).toBe(1);
});

test('checks if a player has won the game', () => {
  render(<App />);
  const squares = [
    screen.getByTestId('square-0'), //X
    screen.getByTestId('square-1'), //O
    screen.getByTestId('square-2'), //X
    screen.getByTestId('square-3'), //O
    screen.getByTestId('square-6')  //X
  ];
  squares.forEach(square => fireEvent.click(square));
  expect(screen.getByText(/Player X Wins!/)).toBeInTheDocument();
});

test('checks if the game is a draw', () => {
  render(<App />);
  const moves = [0, 1, 2, 3, 4, 5, 7, 6, 8];
  moves.forEach(index => fireEvent.click(screen.getByTestId(`square-${index}`)));
  expect(screen.getByText(/It's a Draw!/)).toBeInTheDocument();
});
