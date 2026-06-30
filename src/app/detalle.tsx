import { useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function Detalle() {
  const { id, url } = useLocalSearchParams();

  const [meGusta, setMeGusta] = useState(false);
  const [likes, setLikes] = useState(120);

  function cambiarLike() {
    if (meGusta) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setMeGusta(!meGusta);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.usuario}>Usuario {id}</Text>

      <Image
        source={{ uri: String(url) }}
        style={styles.imagen}
      />

      <TouchableOpacity onPress={cambiarLike}>
        <Text style={styles.like}>
          {meGusta ? "❤️" : "🤍"} {likes} Me gusta
        </Text>
      </TouchableOpacity>

      <Text style={styles.comentario}>
        😺 Qué lindo gato.
      </Text>

      <Text style={styles.comentario}>
        ❤️ Me encanta esta foto.
      </Text>

      <Text style={styles.comentario}>
        #cats #instagram #expo
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  usuario: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 15,
  },

  imagen: {
    width: "100%",
    height: 400,
  },

  like: {
    fontSize: 18,
    margin: 15,
    fontWeight: "bold",
  },

  comentario: {
    marginHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
  },
});