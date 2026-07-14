import { ActivityIndicator, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileGridItem from '../components/ProfileGridItem';
import ProfileHeader from '../components/ProfileHeader';
import { PROFILE } from '../data/mockData';
import useCatPosts from '../hooks/useCatPosts';

const SCREEN_WIDTH = Dimensions.get('window').width;
const TILE_SIZE = SCREEN_WIDTH / 3;

export default function ProfileScreen({ navigation }) {
  const { posts, loading, refreshing, refreshPosts } = useCatPosts(12);

  if (loading) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator color="#111111" size="large" />
        <Text style={styles.loadingText}>Cargando perfil...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.profileNameBar}>
        <Text style={styles.profileName}>{PROFILE.username}</Text>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        ListHeaderComponent={<ProfileHeader postsCount={posts.length} />}
        renderItem={({ item }) => (
          <ProfileGridItem
            post={item}
            size={TILE_SIZE}
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
  profileNameBar: {
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  profileName: {
    color: '#111111',
    fontSize: 20,
    fontWeight: '700',
  },
});
