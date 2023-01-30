import React, {useState, createContext} from "react";

export const CartContext = createContext({});

function CartProvider({children}){
    const [cart, setCart] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    
    function addItemCart(newItem){
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount +1;

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList);
            cartTotal(cartList);
            return;
        }
        
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price,
        }

        setCart(products => [...products, data]);
        cartTotal([...cart, data]);

        console.log('PASSOU AQUI' + cart)
    }

    function deleteItemCart(newItem){
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(cart[indexItem]?.amount > 1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount -1;

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList);
            cartTotal(cartList);
            
            return;

        }
            alert('Item será removido do seu carrinho.');

            const removeItem = cart.filter(item => item.id !== newItem.id);

            setCart(removeItem);
            cartTotal(removeItem);
            return;

    }

    function cartTotal(items){
        let myCart = items;
        let result = myCart.reduce((acumulador, itemAtual) => {
            return acumulador + itemAtual.total
        }, 0)

        setTotalCart(result);

    }


    return(
        <CartContext.Provider
            value={{
                cart,
                addItemCart,
                deleteItemCart,
                totalCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;