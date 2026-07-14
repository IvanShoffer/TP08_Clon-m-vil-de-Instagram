import { useState } from 'react';
import { Alert, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionBar from '../components/ActionBar';
import { COMMENTS } from '../data/mockData';

export default function DetailScreen({ navigation, route }) {
  const { post } = route.params;
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const toggleLike = () => {
    setLiked((current) => {
      const next = !current;
      setLikes((value) => value + (next ? 1 : -1));
      return next;
    });
  };

  const showComments = () => {
    Alert.alert('Comentarios', 'Desliza hacia abajo para ver todos los comentarios.');
  };

  const sharePost = () => {
    Alert.alert('Publicacion compartida', 'El enlace de la publicacion fue copiado.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={COMMENTS}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <Pressable
              accessibilityLabel="Ir al perfil"
              onPress={() => navigation.navigate('Profile')}
              style={styles.header}
            >
              <Image source={{ uri: post.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.username}>{post.username}</Text>
                <Text style={styles.location}>{post.location}</Text>
              </View>
            </Pressable>

            <Image source={{ uri: post.imageUrl }} style={styles.image} />
            <ActionBar
              liked={liked}
              onComment={showComments}
              onShare={sharePost}
              onToggleLike={toggleLike}
            />

            <View style={styles.content}>
              <Text style={styles.likes}>{likes.toLocaleString('es-AR')} Me gusta</Text>
              <Text style={styles.caption}>
                <Text style={styles.username}>{post.username}</Text> {post.caption}
              </Text>
              <View style={styles.tags}>
                {post.tags.map((tag) => (
                  <Text key={tag} style={styles.tag}>
                    #{tag}
                  </Text>
                ))}
              </View>
              <Text style={styles.sectionTitle}>Comentarios</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Text style={styles.commentText}>
              <Text style={styles.username}>{item.user}</Text> {item.text}
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  avatar: {
    borderRadius: 18,
    height: 36,
    marginRight: 10,
    width: 36,
  },
  username: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '700',
  },
  location: {
    color: '#555555',
    fontSize: 12,
    marginTop: 1,
  },
  image: {
    aspectRatio: 1,
    backgroundColor: '#f2f2f2',
    width: '100%',
  },
  content: {
    paddingHorizontal: 12,
    paddingTop: 4,
  },
  likes: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  caption: {
    color: '#111111',
    fontSize: 14,
    lineHeight: 19,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
  },
  tag: {
    color: '#00376b',
    fontSize: 14,
  },
  sectionTitle: {
    color: '#111111',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 18,
  },
  comment: {
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  commentText: {
    color: '#111111',
    fontSize: 14,
    lineHeight: 19,
  },
});
