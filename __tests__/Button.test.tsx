import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import Button from '../components/ui/Button';
jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    Ionicons: ({ name, testID }: any) => <Text testID={testID}>{name}</Text>,
  };
});

describe('Button', () => {
  it('renders correctly with text', () => {
    const { getByText } = render(<Button text="Click Me" />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress when clicked', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button text="Test Button" onPress={mockOnPress} testID="button" />
    );
    fireEvent.press(getByTestId('button'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('applies custom styles to the button', () => {
    const { getByTestId } = render(
      <Button text="Styled Button" style={{ backgroundColor: 'blue' }} testID="button" />
    );
    expect(getByTestId('button')).toHaveStyle({ backgroundColor: 'blue' });
  });

  it('renders an icon when provided', async () => {
    const { getByTestId } = render(
      <Button icon="add" testID="button" iconTestID="icon" />
    );
   await waitFor(() => {
  expect(getByTestId('icon')).toBeTruthy();
});
  });

  it('renders both text and icon with correct spacing', () => {
    const { getByText, getByTestId } = render(
      <Button text="Add Item" icon="add" testID="button" iconTestID="icon" />
    );
    expect(getByText('Add Item')).toBeTruthy();
    expect(getByTestId('icon')).toBeTruthy();
  });
});