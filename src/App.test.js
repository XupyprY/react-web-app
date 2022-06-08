import { render, screen } from '@testing-library/react';
import App from './App';

describe('The App component', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByTestId('learn-link');
    expect(linkElement).toBeInTheDocument();
  });

  it('link url is correct', () => {
    render(<App />);
    const linkElement = screen.getByTestId('learn-link');
    expect(linkElement.href).toContain('reactjs.org');
  });
});
