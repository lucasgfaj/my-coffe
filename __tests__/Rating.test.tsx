// __tests__/Rating.test.tsx
import { render } from '@testing-library/react-native';
import React from 'react';
import Rating from '../components/ui/Rating'; // Ajuste o caminho conforme necessário
jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    Ionicons: ({ name, testID }: any) => <Text testID={testID}>{name}</Text>,
  };
});

describe('Rating', () => {
  it('renders the rating value correctly', () => {
    const { getByText } = render(<Rating value={4.5} />);
    expect(getByText('4.5')).toBeTruthy();
  });

  it('renders the rating value with one decimal place', () => {
    const { getByText } = render(<Rating value={3.789} />);
    expect(getByText('3.8')).toBeTruthy();
  });

  it('renders votes when provided', () => {
    const { getByText } = render(<Rating value={4.0} votes={150} />);
    expect(getByText('(150)')).toBeTruthy();
  });

  it('does not render votes when not provided', () => {
    const { queryByText } = render(<Rating value={4.0} />);
    expect(queryByText('(150)')).toBeNull(); // Garante que o texto de votos não esteja presente
  });

  it('applies custom styles to the container', () => {
    const customStyle = { backgroundColor: 'lightgray', padding: 10 };
    const { getByTestId } = render(<Rating value={4.2} style={customStyle} testID="rating-component" />);
    const ratingContainer = getByTestId('rating-component');
    expect(ratingContainer).toHaveStyle(customStyle);
  });

  // Snapshot test para garantir que a estrutura do componente não muda inesperadamente
  it('matches snapshot with value and votes', () => {
    const { toJSON } = render(<Rating value={4.8} votes={230} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with only value', () => {
    const { toJSON } = render(<Rating value={3.5} />);
    expect(toJSON()).toMatchSnapshot();
  });
});