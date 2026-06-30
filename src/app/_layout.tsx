import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Instagram",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="detalle"
          options={{
            title: "Publicación",
          }}
        />

        <Stack.Screen
          name="perfil"
          options={{
            title: "Perfil",
          }}
        />
      </Stack>
    </>
  );
}