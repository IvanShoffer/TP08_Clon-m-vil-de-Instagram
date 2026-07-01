import { Image, Pressable, StyleSheet } from 'react-native';

export default function ProfileGridItem({ post, size, onPress }) {
  return (
    <Pressable onPress={onPress} style={[styles.tile, { height: size, width: size }]}>
      <Image source={{ uri: post.imageUrl }} style={styles.image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: '#f2f2f2',
    borderColor: '#ffffff',
    borderWidth: 0.5,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
