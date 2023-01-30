import React, { useState } from "react";
import { Entypo, MaterialIcons } from '@expo/vector-icons';


import {
    ItemsView,
    NameText,
    PriceText,
    AmountView,
    AmountButton,
    AmountNumber
} from './styles';

export default function CartItems({ data, add, del}) {
    const [amount, setAmount] = useState(data?.amount);
    const [total, setTotal] = useState(data?.total);

    function increase(){
        add();
        setAmount(item => item + 1);
        setTotal(total + data.price);
    }

    function decrease(){
        del();
        
        if(amount === 0){
            setAmount(0);
            return;
        }

        setAmount(item => item - 1);
        setTotal(total - data.price);

    }

    return (
        <ItemsView>
            <NameText> {data.name} </NameText>
            <PriceText> {total.toFixed(2)} </PriceText>

            <AmountView>
                <AmountButton onPress={decrease} >
                    <Entypo name="squared-minus" size={28} color="#E63A2E" />
                </AmountButton>

                <AmountNumber> {amount} </AmountNumber>

                <AmountButton onPress={increase} >
                    <MaterialIcons name="add-box" size={28} color="#E63A2E" />
                </AmountButton>
            </AmountView>
        </ItemsView>

    )
}

/*



    */