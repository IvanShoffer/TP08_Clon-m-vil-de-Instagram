import { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import ActionBar from './ActionBar';

export default function PostCard({ post, onPress }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const toggleLike = () => {
    setLiked((current) => {
      const next = !current;
      setLikes((value) => value + (next ? 1 : -1));
      return next;
    });
  };

  const sharePost = () => {
    Alert.alert('Publicacion compartida', 'El enlace de la publicacion fue copiado.');
  };

  return (
    <View style={styles.card}>
      <Pressable onPress={onPress} style={styles.header}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <View style={styles.userBlock}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.location}>{post.location}</Text>
        </View>
      </Pressable>

      <Pressable onPress={onPress}>
        <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
      </Pressable>

      <ActionBar
        liked={liked}
        onComment={onPress}
        onShare={sharePost}
        onToggleLike={toggleLike}
      />

      <View style={styles.textBlock}>
        <Text style={styles.likes}>{likes.toLocaleString('es-AR')} Me gusta</Text>
        <Text style={styles.caption}>
          <Text style={styles.username}>{post.username}</Text> {post.caption}
        </Text>
        <Pressable onPress={onPress}>
          <Text style={styles.commentsLink}>Ver comentarios</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    marginBottom: 6,
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
  userBlock: {
    flex: 1,
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
  postImage: {
    aspectRatio: 1,
    backgroundColor: '#f2f2f2',
    width: '100%',
  },
  textBlock: {
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
  likes: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  caption: {
    color: '#111111',
    fontSize: 14,
    lineHeight: 19,
  },
  commentsLink: {
    color: '#8e8e8e',
    fontSize: 14,
    marginTop: 6,
  },
});
