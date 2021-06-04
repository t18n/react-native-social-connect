import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'urql';

const PostsQuery = `
  query {
    post {
      content
    }
  }
`;

export const Home = () => {
  const [result, reexecuteQuery] = useQuery({
    query: PostsQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <Text>Loading...</Text>;
  if (error) return <Text>Oh no... {error.message}</Text>;

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Text>{item.content}</Text>
    </View>
  );


  return (
    <View style={styles.container}>
      <FlatList
        data={data.post}
        renderItem={renderItem}
        keyExtractor={item => item.content}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  list: {
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 8,
    padding: 10,
    borderRadius: 4
  }
});
