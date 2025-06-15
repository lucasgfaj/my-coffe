import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Button from "@/components/ui/Button";
import { useTheme } from "@/context/ThemeContext";
import useAuth from "@/firebase/hooks/useAuth";

export default function _screen() {
  const { user, login, loading } = useAuth();
  const router = useRouter();
  const { theme, colors, toggleTheme } = useTheme();

  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("123456");

  useEffect(() => {
    if (user) {
      router.replace("/(coffe)/home");
    }
  }, [user]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.background,
        }}
      >
        <Text style={{ fontSize: 18, color: colors.text, marginBottom: 10 }}>
          Carregando...
        </Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableOpacity
        onPress={toggleTheme}
        style={[styles.themeToggleButton, { backgroundColor: colors.primary }]}
      >
        <Text style={[styles.themeToggleButtonText, { color: colors.text, fontSize: 20 }]}>
          {theme === 'light' ? '🌙' : '🌞'}
        </Text>
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, { color: colors.primary }]}>MyCoffe</Text>
        <Text style={[styles.coffeeIcon, { color: colors.primary }]}>☕️</Text>
      </View>

      <View style={[styles.innerContainer, {
        backgroundColor: colors.cardBackground,
        shadowColor: colors.text === '#000000' ? '#000' : 'transparent',
      }]}>
        <Text style={[styles.title, { color: colors.text }]}>Bem-vindo de volta!</Text>
        <Text style={[styles.subtitle, { color: colors.text }]}>Acesse sua conta</Text>

        <View style={[styles.demoBox, { backgroundColor: colors.inputBackground }]}>
          <Text style={[styles.demoTitle, { color: colors.primary }]}>Acesso Demo:</Text>
          <Text style={[styles.demoText, { color: colors.text }]}>
            Email: <Text style={[styles.bold, { color: colors.text }]}>user@example.com</Text>
          </Text>
          <Text style={[styles.demoText, { color: colors.text }]}>
            Senha: <Text style={[styles.bold, { color: colors.text }]}>123456</Text>
          </Text>
        </View>

        <TextInput
          style={[styles.input, {
            backgroundColor: colors.inputBackground,
            color: colors.text,
            borderColor: colors.borderColor,
          }]}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={colors.text}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, {
            backgroundColor: colors.inputBackground,
            color: colors.text,
            borderColor: colors.borderColor,
          }]}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Senha"
          placeholderTextColor={colors.text}
        />

        <Button
          text="Entrar"
          onPress={async () => {
            try {
              await login(email, password);
              router.replace("/(coffe)/home");
            } catch (error) {
              if (error instanceof Error) {
                Alert.alert("Erro ao entrar", error.message);
              } else {
                Alert.alert("Erro ao entrar", "Erro desconhecido.");
              }
            }
          }}
          style={styles.loginButton}
          backgroundColor={colors.primary}
          textColor={colors.text}
        />

        <View style={styles.registerContainer}>
          <Text style={[styles.registerText, { color: colors.text }]}>Ainda não é usuário? </Text>
          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text style={[styles.registerLink, { color: colors.primary }]}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  themeToggleButton: {
    position: 'absolute',
    top: 60,
    right: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    zIndex: 1,
  },
  themeToggleButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  titleText: {
    fontSize: 36,
    fontWeight: "700",
    fontFamily: "Georgia",
  },
  coffeeIcon: {
    fontSize: 36,
    marginLeft: 8,
  },
  innerContainer: {
    width: "100%",
    maxWidth: 400,
    padding: 32,
    borderRadius: 16,
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: "center",
  },
  demoBox: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  demoTitle: {
    fontWeight: "600",
    marginBottom: 4,
  },
  demoText: {
    fontSize: 14,
    lineHeight: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
  },
  loginButton: {
    width: "100%",
    marginTop: 10,
  },
  registerContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    fontSize: 14,
  },
  registerLink: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
