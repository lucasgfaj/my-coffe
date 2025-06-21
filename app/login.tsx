import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import Button from "@/components/ui/Button";
<<<<<<< HEAD
=======
import { useTheme } from "@/context/ThemeContext";
<<<<<<< HEAD
>>>>>>> develop
import useAuth from "@/firebase/hooks/useAuth";
=======
import { useTokenContext } from "@/context/useContext";
import api from "@/services/api";
import { StyleSheet } from "react-native";
>>>>>>> develop

export default function LoginScreen() {
  const router = useRouter();
<<<<<<< HEAD
=======
  const { theme, colors, toggleTheme } = useTheme();
<<<<<<< HEAD
>>>>>>> develop
=======
  const { token, setToken, setUserId } = useTokenContext();
>>>>>>> develop

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      router.replace("/(coffe)/home");
    }
  }, [token]);
const login = async () => {
  try {
    setLoading(true);

<<<<<<< HEAD
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
<<<<<<< HEAD
          backgroundColor: "#FCF8F3",
        }}
      >
        <Text style={{ fontSize: 18, color: "#6D4C41", marginBottom: 10 }}>
=======
          backgroundColor: colors.background,
        }}
      >
        <Text style={{ fontSize: 18, color: colors.text, marginBottom: 10 }}>
>>>>>>> develop
          Carregando...
        </Text>
      </View>
    );
=======
    const response = await api.post("/api/collections/users/auth-with-password", {
      identity: email,
      password: password,
    });

    const token = response.data.token;
    const user = response.data.record;

    console.log("Token:", token);
    console.log("ID do usuário:", user.id);
    console.log("Nome:", user.name);
    console.log("Email:", user.email);

    setToken(token);
    setUserId(user.id); // Salva o ID do usuário no contexto


    router.replace("/(coffe)/home");
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert("Erro ao entrar", error.message);
    } else {
      Alert.alert("Erro desconhecido", "Algo deu errado.");
    }
  } finally {
    setLoading(false);
>>>>>>> develop
  }
};


  return (
    <KeyboardAvoidingView
<<<<<<< HEAD
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Título MyCoffe centralizado acima do card */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>MyCoffe</Text>
        <Text style={styles.coffeeIcon}>☕️</Text>
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.title}>Bem-vindo de volta!</Text>
        <Text style={styles.subtitle}>Acesse sua conta</Text>

        <View style={styles.demoBox}>
          <Text style={styles.demoTitle}>Acesso Demo:</Text>
          <Text style={styles.demoText}>
            Email: <Text style={styles.bold}>user@example.com</Text>
          </Text>
          <Text style={styles.demoText}>
            Senha: <Text style={styles.bold}>123456</Text>
=======
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableOpacity
        onPress={toggleTheme}
        style={[styles.themeToggleButton, { backgroundColor: colors.primary }]}
      >
        <Text style={[styles.themeToggleButtonText, { color: colors.text }]}>
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

<<<<<<< HEAD
        <View style={[styles.demoBox, { backgroundColor: colors.inputBackground }]}>
          <Text style={[styles.demoTitle, { color: colors.primary }]}>Acesso Demo:</Text>
          <Text style={[styles.demoText, { color: colors.text }]}>
            Email: <Text style={[styles.bold, { color: colors.text }]}>user@example.com</Text>
          </Text>
          <Text style={[styles.demoText, { color: colors.text }]}>
            Senha: <Text style={[styles.bold, { color: colors.text }]}>123456</Text>
>>>>>>> develop
          </Text>
        </View>

=======
>>>>>>> develop
        <TextInput
<<<<<<< HEAD
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#aaa"
=======
          style={[styles.input, {
            backgroundColor: colors.inputBackground,
            color: colors.text,
            borderColor: colors.borderColor,
          }]}
          value={email}
          onChangeText={setEmail}
          placeholder="Email ou nome de usuário"
          placeholderTextColor={colors.text}
<<<<<<< HEAD
>>>>>>> develop
          keyboardType="email-address"
=======
>>>>>>> develop
          autoCapitalize="none"
        />

        <TextInput
<<<<<<< HEAD
          style={styles.input}
=======
          style={[styles.input, {
            backgroundColor: colors.inputBackground,
            color: colors.text,
            borderColor: colors.borderColor,
          }]}
>>>>>>> develop
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Senha"
<<<<<<< HEAD
          placeholderTextColor="#aaa"
=======
          placeholderTextColor={colors.text}
>>>>>>> develop
        />

        <Button
          text={loading ? "Entrando..." : "Entrar"}
          onPress={login}
          style={styles.loginButton}
<<<<<<< HEAD
        />

        {/* Opção de cadastro */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Ainda não é usuário? </Text>
          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text style={styles.registerLink}>Cadastre-se</Text>
=======
          backgroundColor={colors.primary}
          textColor={colors.text}
        />

        <View style={styles.registerContainer}>
          <Text style={[styles.registerText, { color: colors.text }]}>
            Ainda não é usuário?
          </Text>
          <TouchableOpacity onPress={() => router.push("/register")}>
<<<<<<< HEAD
            <Text style={[styles.registerLink, { color: colors.primary }]}>Cadastre-se</Text>
>>>>>>> develop
=======
            <Text style={[styles.registerLink, { color: colors.primary }]}> Cadastre-se</Text>
>>>>>>> develop
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#FCF8F3",
=======
>>>>>>> develop
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
<<<<<<< HEAD
=======
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
>>>>>>> develop
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
<<<<<<< HEAD
    color: "#6D4C41",
=======
>>>>>>> develop
  },
  coffeeIcon: {
    fontSize: 36,
    marginLeft: 8,
<<<<<<< HEAD
    color: "#6D4C41",
=======
>>>>>>> develop
  },
  innerContainer: {
    width: "100%",
    maxWidth: 400,
<<<<<<< HEAD
    backgroundColor: "#fff",
    padding: 32,
    borderRadius: 16,
    shadowColor: "#000",
=======
    padding: 32,
    borderRadius: 16,
>>>>>>> develop
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
<<<<<<< HEAD
    color: "#4E342E",
=======
>>>>>>> develop
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
<<<<<<< HEAD
    color: "#7B5E57",
=======
>>>>>>> develop
    marginBottom: 24,
    textAlign: "center",
  },
  demoBox: {
<<<<<<< HEAD
    backgroundColor: "#FFF3E0",
=======
>>>>>>> develop
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  demoTitle: {
    fontWeight: "600",
<<<<<<< HEAD
    color: "#6D4C41",
    marginBottom: 4,
  },
  demoText: {
    color: "#5D4037",
=======
    marginBottom: 4,
  },
  demoText: {
>>>>>>> develop
    fontSize: 14,
    lineHeight: 20,
  },
  bold: {
    fontWeight: "bold",
<<<<<<< HEAD
    color: "#3E2723",
=======
>>>>>>> develop
  },
  input: {
    width: "100%",
    height: 50,
<<<<<<< HEAD
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#DDD0C8",
=======
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
>>>>>>> develop
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
<<<<<<< HEAD
    color: "#7B5E57",
    fontSize: 14,
  },
  registerLink: {
    color: "#6D4C41",
=======
    fontSize: 14,
  },
  registerLink: {
>>>>>>> develop
    fontSize: 14,
    fontWeight: "bold",
  },
});
