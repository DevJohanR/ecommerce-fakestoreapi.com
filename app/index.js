import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { Link } from 'expo-router';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <Link href={`/${item.id}`} asChild>
          <TouchableOpacity>
            <View style={{ padding: 20, borderBottomWidth: 1, borderColor: '#ccc' }}>
              <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
              <Text style={{ fontSize: 20 }}>{item.title}</Text>
              <Text>{item.price} USD</Text>
            </View>
          </TouchableOpacity>
        </Link>
      )}
    />
  );
}
