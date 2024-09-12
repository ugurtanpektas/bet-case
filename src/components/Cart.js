import React from 'react';
import { useBet } from '../contexts/BetContext';

function Cart() {
    const { cartItems, totalAmount } = useBet();

    return (
        <div className="cart">
            <ul>
                {cartItems.map((item) => (
                    <li key={item.NID}>
                        <span>{item.OCG[1]?.MBS}</span> <span>Kod : {item.C}</span> <span>Maç : {item.N}</span> <span><b>Oran : {item.selectedOdd}</b></span>
                    </li>
                ))}
            </ul>
            {cartItems.length > 0 && <hr />}
            <span><b>Toplam Tutar:</b> {totalAmount} TL</span>
        </div>
    );
}

export default Cart;
