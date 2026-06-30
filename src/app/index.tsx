import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import Publicacion from "../components/Publicacion";
import { api } from "../services/api";

type PublicacionType = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export default function Inicio() {
  const [publicaciones, setPublicaciones] = useState<PublicacionType[]>([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const respuesta = await api.get("/images/search?limit=10");
        setPublicaciones(respuesta.data);
      } catch (error) {
        console.log(error);
      }
    };

    cargarDatos();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Instagram</Text>

      <FlatList
        data={publicaciones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Publicacion publicacion={item} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
});