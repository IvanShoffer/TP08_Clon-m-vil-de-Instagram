# TP08 - Clon movil de Instagram

Aplicacion movil realizada con React Native y Expo. Replica una experiencia basica de Instagram: feed principal, detalle de publicacion y perfil de usuario con grilla de imagenes. Las publicaciones se cargan con Axios desde The Cat API y se renderizan con `FlatList`.


## Requisitos cubiertos

- Navegacion principal con React Navigation y Stack Navigator.
- Feed dinamico con `FlatList`, sin renderizado mediante `.map()` dentro de scrolls genericos.
- Consumo asincronico de The Cat API con Axios dentro de `useEffect`.
- Minimo de 10 publicaciones cargadas y normalizadas para el feed.
- Componentes tactiles mediante `TouchableOpacity` y `Pressable`.
- Vista de detalle con parametros de navegacion y estado funcional de "Me gusta".
- Perfil emulado con avatar, biografia, metricas, boton de editar perfil y grilla de 3 columnas.
- Estilos definidos con `StyleSheet.create()`.
- `StatusBar` configurada en modo oscuro sobre cabecera clara.
- `SafeAreaView` aplicado en las pantallas principales.
- Icono y SplashScreen configurados desde `Tp8/app.json` con los assets de Expo ubicados en `Tp8/assets/`.

## Arbol de directorios implementado

```text
Tp8/
  App.js
  app.json
  index.js
  package.json
  assets/
    adaptive-icon.png
    favicon.png
    icon.png
    splash-icon.png
  src/
    components/
      ActionBar.jsx
      PostCard.jsx
      ProfileGridItem.jsx
      ProfileHeader.jsx
    data/
      mockData.js
    hooks/
      useCatPosts.js
    navigation/
      AppNavigator.js
    screens/
      DetailScreen.jsx
      HomeScreen.jsx
      ProfileScreen.jsx
    services/
      catApi.js
```

## Componentes atomicos y props

`ActionBar.jsx`: renderiza la barra de acciones de una publicacion. Recibe `liked` para pintar el estado visual del boton de like y `onToggleLike` para delegar la interaccion al componente padre.

`PostCard.jsx`: representa una publicacion del feed. Recibe `post` con avatar, usuario, ubicacion, imagen, likes y caption. Recibe `onPress` para navegar al detalle. Mantiene localmente el estado interactivo de like del item.

`ProfileGridItem.jsx`: representa una celda cuadrada del mosaico del perfil. Recibe `post`, `size` y `onPress`; con eso muestra la imagen exacta y permite abrir el detalle.

`ProfileHeader.jsx`: renderiza la informacion clasica del perfil. Recibe `postsCount` para mostrar la cantidad de publicaciones en las metricas y toma los datos estaticos del perfil desde `mockData.js`.

## Pantallas

`HomeScreen.jsx`: pantalla principal. Usa `useCatPosts(12)` para cargar publicaciones y muestra el feed con `FlatList`. Navega a `PostDetail` enviando el objeto `post` completo y tambien permite abrir `Profile`.

`DetailScreen.jsx`: pantalla extendida de una publicacion. Lee `route.params.post`, muestra imagen en alta definicion, comentarios simulados, etiquetas y un like funcional con actualizacion inmediata del contador.

`ProfileScreen.jsx`: pantalla de perfil emulado. Usa `FlatList` con `numColumns={3}` para lograr la grilla simetrica inferior. Cada imagen navega al detalle de publicacion.

## Navegacion

La navegacion esta centralizada en `src/navigation/AppNavigator.js` con `createNativeStackNavigator`.

Rutas:

- `Home`: feed principal.
- `PostDetail`: detalle de una publicacion. Recibe `{ post }` por parametros.
- `Profile`: perfil de usuario y grilla de publicaciones.

## Estados manejados con hooks

Estados locales:

- `useCatPosts.js`: `posts`, `loading` y `refreshing`. Controlan datos de API, carga inicial y refresco manual.
- `PostCard.jsx`: `liked` y `likes`. Permiten cambiar el estado de me gusta en cada publicacion del feed.
- `DetailScreen.jsx`: `liked` y `likes`. Permiten cambiar el estado de me gusta en la vista extendida.

Estados globales:

- No se implemento estado global porque el flujo solicitado se resuelve con estado local y parametros de navegacion. Los datos compartidos estaticos del perfil, captions y comentarios viven en `src/data/mockData.js`.

## API utilizada

Se usa The Cat API:

```text
https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=0&mime_types=jpg,png
```

La funcion `getCatPosts()` se encuentra en `src/services/catApi.js`. Si la API falla durante una prueba, se usan 12 publicaciones de respaldo generadas con Cataas para que la interfaz siga funcionando.

## Referencia visual

Referencia utilizada: interfaz movil oficial de Instagram observada desde la aplicacion movil y mockups publicos de la comunidad de Figma.

Enlace de referencia sugerido para adjuntar en la entrega:

```text
https://www.figma.com/community/search?resource_type=mixed&sort_by=relevancy&query=instagram%20mobile%20ui
```

Para la entrega final tambien se pueden adjuntar capturas de la app oficial usadas como guia visual.
