import React, { useState, useContext } from 'react';
import { FlatList, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import {
  Background,
  TopText,
  CartButton,
  DotText,
  DotView
} from './styles';

import ListItems from '../../components/ListItems';
import { CartContext } from '../../contexts/CartContext';

export default function HomeScreen() {
  const { cart, addItemCart, deleteItemCart } = useContext(CartContext);

  const navigation = useNavigation();

  const [products, setProducts] = useState([{
    id: '1',
    name: 'Coca-Cola 2L',
    price: 12.90,
  },
  {
    id: '2',
    name: 'Batata Frita 500g',
    price: 35.90,
  },
  {
    id: '3',
    name: 'Anéis de Cebola 500g',
    price: 45.90,
  },
  {
    id: '4',
    name: 'Hambúrguer de Costela',
    price: 29.90,
  },
  {
    id: '5',
    name: 'Hambúrguer Vegetal',
    price: 32.90,
  }]);


  function callAddCart(item) {
    addItemCart(item);
  }

  function callDelCart(item) {
    deleteItemCart(item);
  }


  return (
    <Background>
      <View style={{ flexDirection: 'row', marginVertical: 15 }} >
        <TopText>Olá! Faça seu pedido.</TopText>

        <CartButton title="Cart"
          onPress={() => navigation.navigate('Cart')}>

          {cart.length >= 1 && (
            <DotView>
              <DotText> {cart?.length} </DotText>
            </DotView>
          )}

          <MaterialIcons name="shopping-cart" size={35} color="#006E2D" />
        </CartButton>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) =>
          <ListItems data={item}
            addToCart={() => callAddCart(item)}
            deleteToCart={() => callDelCart(item)}
          />}


      />

    </Background>
  );
}
