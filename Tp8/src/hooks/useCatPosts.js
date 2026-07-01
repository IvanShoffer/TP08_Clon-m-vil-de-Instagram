import { useCallback, useEffect, useState } from 'react';
import { getCatPosts } from '../services/catApi';

export default function useCatPosts(limit = 12) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadPosts = useCallback(async () => {
    const data = await getCatPosts(limit);
    setPosts(data);
  }, [limit]);

  useEffect(() => {
    async function initialLoad() {
      setLoading(true);
      await loadPosts();
      setLoading(false);
    }

    initialLoad();
  }, [loadPosts]);

  const refreshPosts = useCallback(async () => {
    setRefreshing(true);
    await loadPosts();
    setRefreshing(false);
  }, [loadPosts]);

  return {
    posts,
    loading,
    refreshing,
    refreshPosts,
  };
}
