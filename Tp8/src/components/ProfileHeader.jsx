import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PROFILE } from '../data/mockData';

export default function ProfileHeader({ postsCount }) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image source={{ uri: PROFILE.avatar }} style={styles.avatar} />

        <View style={styles.metrics}>
          <Metric label="Publicaciones" value={postsCount} />
          <Metric label="Seguidores" value={PROFILE.followers} />
          <Metric label="Seguidos" value={PROFILE.following} />
        </View>
      </View>

      <Text style={styles.displayName}>{PROFILE.displayName}</Text>
      <Text style={styles.bio}>{PROFILE.bio}</Text>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Editar perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

function Metric({ value, label }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingBottom: 12,
    paddingHorizontal: 14,
    paddingTop: 14,
  },
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    borderRadius: 42,
    height: 84,
    width: 84,
  },
  metrics: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 16,
  },
  metric: {
    alignItems: 'center',
    minWidth: 74,
  },
  metricValue: {
    color: '#111111',
    fontSize: 16,
    fontWeight: '700',
  },
  metricLabel: {
    color: '#111111',
    fontSize: 12,
    marginTop: 2,
  },
  displayName: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 12,
  },
  bio: {
    color: '#111111',
    fontSize: 14,
    lineHeight: 19,
    marginTop: 2,
  },
  editButton: {
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderRadius: 8,
    height: 34,
    justifyContent: 'center',
    marginTop: 12,
  },
  editText: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '700',
  },
});
