import LoginScreen from '@/app/login';
import { useTheme } from '@/context/ThemeContext';
import { useTokenContext } from '@/context/useContext';
import api from '@/services/api';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { useRouter } from 'expo-router';
import React from 'react';

// Mocks necessários
jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/context/ThemeContext', () => ({
  useTheme: jest.fn(),
}));

jest.mock('@/context/useContext', () => ({
  useTokenContext: jest.fn(),
}));

jest.mock('@/services/api');

describe('LoginScreen', () => {
  const mockReplace = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ replace: mockReplace, push: jest.fn() });

    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      colors: {
        background: '#fff',
        text: '#000',
        primary: '#6200EE',
        cardBackground: '#f5f5f5',
        inputBackground: '#fff',
        borderColor: '#ccc',
      },
      toggleTheme: jest.fn(),
    });

    (useTokenContext as jest.Mock).mockReturnValue({
      token: null,
      setToken: jest.fn(),
      setUserId: jest.fn(),
    });
  });

  it('deve renderizar inputs e botão', () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);
    expect(getByPlaceholderText('Email ou nome de usuário')).toBeTruthy();
    expect(getByPlaceholderText('Senha')).toBeTruthy();
    expect(getByText('Entrar')).toBeTruthy();
  });

  it('deve fazer login com credenciais válidas', async () => {
    const mockSetToken = jest.fn();
    const mockSetUserId = jest.fn();

    (useTokenContext as jest.Mock).mockReturnValue({
      token: null,
      setToken: mockSetToken,
      setUserId: mockSetUserId,
    });

    (api.post as jest.Mock).mockResolvedValue({
      data: {
        token: 'fake-token',
        record: {
          id: 'user-id',
          name: 'Lucas',
          email: 'lucas@example.com',
        },
      },
    });

    const { getByPlaceholderText, getByText } = render(<LoginScreen />);

    fireEvent.changeText(getByPlaceholderText('Email ou nome de usuário'), 'lucas@example.com');
    fireEvent.changeText(getByPlaceholderText('Senha'), 'senha123');

    fireEvent.press(getByText('Entrar'));

    await waitFor(() => {
      expect(mockSetToken).toHaveBeenCalledWith('fake-token');
      expect(mockSetUserId).toHaveBeenCalledWith('user-id');
      expect(mockReplace).toHaveBeenCalledWith('/(coffe)/home');
    });
  });
});
