import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ActionBar({ liked, onToggleLike }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftActions}>
        <TouchableOpacity
          accessibilityLabel="Me gusta"
          onPress={onToggleLike}
          style={styles.actionButton}
        >
          <Text style={[styles.icon, liked && styles.likedIcon]}>
            {liked ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity accessibilityLabel="Comentar" style={styles.actionButton}>
          <Text style={styles.icon}>◇</Text>
        </TouchableOpacity>

        <TouchableOpacity accessibilityLabel="Compartir" style={styles.actionButton}>
          <Text style={styles.icon}>↗</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity accessibilityLabel="Guardar" style={styles.actionButton}>
        <Text style={styles.icon}>□</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  leftActions: {
    flexDirection: 'row',
    gap: 14,
  },
  actionButton: {
    alignItems: 'center',
    height: 34,
    justifyContent: 'center',
    width: 34,
  },
  icon: {
    color: '#111111',
    fontSize: 28,
    lineHeight: 30,
  },
  likedIcon: {
    color: '#ed4956',
  },
});
