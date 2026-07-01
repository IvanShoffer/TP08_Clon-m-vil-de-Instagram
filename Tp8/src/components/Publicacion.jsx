import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Publicacion({ publicacion }) {
  const abrirDetalle = () => {
    console.log("Abrir detalle:", publicacion.id);
  };

  return (
    <TouchableOpacity onPress={abrirDetalle}>
      <View style={styles.card}>
        <Text style={styles.usuario}>Usuario {publicacion.id}</Text>

        <Image
          source={{ uri: publicacion.url }}
          style={styles.imagen}
        />

        <View style={styles.acciones}>
          <Text style={styles.icono}>❤️</Text>
          <Text style={styles.icono}>💬</Text>
          <Text style={styles.icono}>📤</Text>
        </View>

        <Text style={styles.likes}>120 Me gusta</Text>

        <Text style={styles.descripcion}>
          Un hermoso gato 🐱
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 20,
  },

  usuario: {
    fontWeight: "bold",
    fontSize: 16,
    margin: 10,
  },

  imagen: {
    width: "100%",
    height: 350,
  },

  acciones: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10,
    gap: 15,
  },

  icono: {
    fontSize: 24,
  },

  likes: {
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 10,
  },

  descripcion: {
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
  },
});