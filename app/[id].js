import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
    const { id } = useLocalSearchParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.error(error));
    }, [id]);
  
    if (!product) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <View style={{ padding: 20 }}>
        <Image source={{ uri: product.image }} style={{ width: 200, height: 200 }} />
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{product.title}</Text>
        <Text style={{ fontSize: 20 }}>{product.price} USD</Text>
        <Text style={{ marginTop: 10 }}>{product.description}</Text>
      </View>
    );
  }