import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PostCard from '../components/PostCard';
import useCatPosts from '../hooks/useCatPosts';

export default function HomeScreen({ navigation }) {
  const { posts, loading, refreshing, refreshPosts } = useCatPosts(12);

  if (loading) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator color="#111111" size="large" />
        <Text style={styles.loadingText}>Cargando publicaciones...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <Text style={styles.brand}>Instagram</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.profileButton}
        >
          <Text style={styles.profileButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            onPress={() => navigation.navigate('PostDetail', { post: item })}
          />
        )}
        refreshing={refreshing}
        onRefresh={refreshPosts}
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
  centered: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
  },
  loadingText: {
    color: '#555555',
    fontSize: 14,
    marginTop: 12,
  },
  topBar: {
    alignItems: 'center',
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  brand: {
    color: '#111111',
    fontSize: 24,
    fontWeight: '700',
  },
  profileButton: {
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderRadius: 8,
    height: 34,
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  profileButtonText: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '700',
  },
});
