import React, {useContext} from 'react';
import { FlatList } from 'react-native';

import {CartContext} from '../../contexts/CartContext';
import CartItems from '../../components/CartItems/index';

import {
  CartContainer,
  CartTextTop,
  ButtonBack,
  ButtonFinish,
  ButtonText,
  FinalOrder,
  OrderText,
  EmptyView,
  EmptyText,

} from './styles';

export default function CartScreen({ navigation }) {
  const { cart, addItemCart, deleteItemCart, totalCart } = useContext(CartContext);

  function finishOrder(){
    if(totalCart === 0){
      alert('Seu carrinho está vazio!')
      return;
    }

    alert('Pedido Finalizado')
  }

  return (
    <CartContainer>
      <CartTextTop> Revise seu Pedido </CartTextTop>

      <FlatList
        data={cart}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={() => <EmptyCart/>}

        renderItem={({ item }) =>
          <CartItems data={item}
            add={() => addItemCart(item)}
            del={() => deleteItemCart(item)} />}

        ListFooterComponent={() => <TotalValue data={totalCart} />}
      />

      <ButtonBack title="Home"
        onPress={() => navigation.goBack()}>
        <ButtonText> Continuar Comprando </ButtonText>
      </ButtonBack>

      <ButtonFinish onPress={finishOrder}>
        <ButtonText> Finalizar Pedido </ButtonText>
      </ButtonFinish>


    </CartContainer>
  );
}

export function TotalValue({ data }) {
  return (
    <FinalOrder>
      <OrderText>Valor Total: R$ {data.toFixed(2)}</OrderText>
    </FinalOrder>
  )
}

export function EmptyCart() {
  return (
    <EmptyView>
      <EmptyText> Carrinho Vazio! </EmptyText>
    </EmptyView>
  )
}
