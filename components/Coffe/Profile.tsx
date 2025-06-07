import Button from "@/components/ui/Button";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import useAuth from "@/firebase/hooks/useAuth";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

export default function Profile() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const [name, setName] = useState(""); // só o nome pode editar
  const [isEditing, setIsEditing] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);

  const firestore = getFirestore();

  useEffect(() => {
    if (user) {
      // Buscar o nome no Firestore
      const userDocRef = doc(firestore, "users", user.uid);
      getUserName(userDocRef);
    }
  }, [user]);

  async function getUserName(userDocRef: any) {
    try {
      const { getDoc } = await import("firebase/firestore");
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data && typeof data === "object" && "name" in data && typeof (data as any).name === "string") {
          setName((data as any).name);
        }
      }
    } catch (error) {
      console.log("Erro ao buscar nome do usuário:", error);
    }
  }

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/"); // ou rota de login
    } catch (error) {
      Alert.alert("Erro", "Falha ao fazer logout.");
    }
  };

  const handleSave = async () => {
    try {
      if (!user) {
        Alert.alert("Erro", "Usuário não autenticado");
        return;
      }
      if (!name.trim()) {
        Alert.alert("Erro", "Nome não pode ser vazio");
        return;
      }
      setLoadingSave(true);

      // Atualizar nome no Firestore
      const userDocRef = doc(firestore, "users", user.uid);
      await updateDoc(userDocRef, { name: name.trim() });

      Alert.alert("Sucesso", "Nome atualizado!");
      setIsEditing(false);
    } catch (error: any) {
      console.error("Erro ao salvar perfil:", error);
      Alert.alert("Erro", error.message || "Falha ao atualizar perfil");
    } finally {
      setLoadingSave(false);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Meu Perfil</Text>
        <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
          <Feather name={isEditing ? "x" : "edit"} size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={[styles.input, !isEditing && styles.inputDisabled]}
          value={name}
          onChangeText={setName}
          editable={isEditing}
          autoCapitalize="words"
        />

        {/* Email e senha não editáveis */}
        <Text style={[styles.label, { marginTop: 24 }]}>Email (não editável)</Text>
        <TextInput
          style={[styles.input, styles.inputDisabled]}
          value={user?.email || ""}
          editable={false}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {isEditing && (
          <View style={styles.buttonWrapper}>
            <Button
              width="100%"
              height={50}
              borderRadius={12}
              icon="save"
              backgroundColor="#4CAF50"
              onPress={handleSave}
              text={loadingSave ? "Salvando..." : "Salvar Nome"}
            />
          </View>
        )}

        <View style={styles.buttonWrapper}>
          <Button
            width="100%"
            height={50}
            borderRadius={12}
            icon="log-out"
            backgroundColor="#7B3F00"
            onPress={handleLogout}
            text="Deslogar"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  content: { alignItems: "center" },
  header: {
    backgroundColor: "#313131",
    paddingTop: 38,
    paddingBottom: 30,
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headerText: { color: "white", fontSize: 24, fontWeight: "bold" },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  label: { fontSize: 16, fontWeight: "600", marginTop: 16, marginBottom: 4, color: "#444" },
  input: { backgroundColor: "#f1f1f1", padding: 12, borderRadius: 10, fontSize: 15 },
  inputDisabled: { backgroundColor: "#e0e0e0", color: "#888" },
  buttonWrapper: { marginTop: 24 },
});
