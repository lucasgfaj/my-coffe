import RegisterScreen from '@/app/register';
import api from '@/services/api';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { useRouter } from 'expo-router';
import React from 'react';

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/services/api', () => ({
  post: jest.fn(),
}));

describe('RegisterScreen', () => {
  const mockReplace = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ replace: mockReplace, push: mockPush });
  });

  it('deve registrar com sucesso', async () => {
    (api.post as jest.Mock).mockResolvedValueOnce({});

    const { getByPlaceholderText, getByText } = render(<RegisterScreen />);

    fireEvent.changeText(getByPlaceholderText('Nome'), 'Lucas');
    fireEvent.changeText(getByPlaceholderText('Email'), 'lucas@email.com');
    fireEvent.changeText(getByPlaceholderText('Senha'), '123456');

    fireEvent.press(getByText('Registrar'));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/api/collections/users/records', {
        email: 'lucas@email.com',
        password: '123456',
        passwordConfirm: '123456',
        name: 'Lucas',
        emailVisibility: true,
      });

      expect(mockReplace).toHaveBeenCalledWith('/login');
    });
  });
});
