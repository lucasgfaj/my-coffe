// my-coffe-develop/context/ThemeContext.tsx
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { useColorScheme as useDeviceColorScheme } from 'react-native'; // Importa o hook nativo do React Native para esquema de cores

// Define os tipos para o tema e o contexto
export type ThemeName = 'light' | 'dark';
export type ColorScheme = {
  background: string;
  text: string;
  // Adicione outras cores que você queira gerenciar pelo tema
  primary: string;
  secondary: string;
  cardBackground: string;
  inputBackground: string;
  borderColor: string;
};

// Mapeamento de cores para cada tema
const lightColors: ColorScheme = {
  background: '#FFFFFF',
  text: '#000000',
  primary: '#C67C4E', // Cor principal do seu app
  secondary: '#FFD700',
  cardBackground: '#FCFCFC',
  inputBackground: '#F9F9F9',
  borderColor: '#DDD0C8',
};

const darkColors: ColorScheme = {
  background: '#313131', // Cor de fundo escura (como no seu header)
  text: '#FFFFFF',
  primary: '#C67C4E',
  secondary: '#FFD700',
  cardBackground: '#2F2D2C', // Cor de fundo do card escura
  inputBackground: '#2F2D2C',
  borderColor: '#555555',
};

// Interface para o contexto do tema
interface ThemeContextType {
  theme: ThemeName;
  colors: ColorScheme;
  toggleTheme: () => void;
  setTheme: (name: ThemeName) => void;
}

// Cria o contexto com valores padrão (você pode ajustar conforme necessário)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provedor do tema
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const deviceColorScheme = useDeviceColorScheme(); // Pega o tema do sistema
  const [theme, setThemeState] = useState<ThemeName>(
    (deviceColorScheme || 'light') as ThemeName // Inicializa com o tema do dispositivo ou 'light'
  );

  useEffect(() => {
    // Sincroniza com o tema do dispositivo quando ele muda
    if (deviceColorScheme) {
      setThemeState(deviceColorScheme as ThemeName);
    }
  }, [deviceColorScheme]);

  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const setTheme = useCallback((name: ThemeName) => {
    setThemeState(name);
  }, []);

  const colors = theme === 'light' ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar o tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};