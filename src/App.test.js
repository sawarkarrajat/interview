import { render, screen } from '@testing-library/react';
import App from './App';
import { server } from './mocks/server';
import { rest } from 'msw';

describe('people', () => {

  test('renders starwars', () => {
    render(<App />);
    const linkElement = screen.getByText(/starwars/i);
    expect(linkElement).toBeInTheDocument();
  });


  test('renders app api mocking', async () => {
    server.use(
      rest.get(
        'https://swapi.dev/api/people/',
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<App />);
    const error = await screen.findByText('Error fetching people');
    expect(error).toBeInTheDocument();
  });
});