import React from "react";
import { MaterialIcons } from '@expo/vector-icons';


import { ItemsView, NameText, PriceText, AmountView, AmountButton } from './styles';

function ListItems({ data, addToCart }) {


  return (
    <ItemsView>

      <NameText> {data.name} </NameText>
      <PriceText> R$ {data.price.toFixed(2)} </PriceText>

      <AmountView>
        <AmountButton onPress={addToCart} >
          <MaterialIcons name="add-box" size={30} color="#E63A2E" />
        </AmountButton>
      </AmountView>


    </ItemsView>

  )
}

export default ListItems;