/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useCallback } from 'react';

const BetContext = createContext();

export const useBet = () => useContext(BetContext);

export const BetProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addOrUpdateBet = (bet, selectedOdd, oddKey) => {
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((item) => item.NID === bet.NID);
            if (existingItemIndex !== -1) {
                if (selectedOdd === '') {
                    return prevItems.filter((item) => item.NID !== bet.NID);
                }
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = { ...bet, selectedOdd, oddKey };
                return updatedItems;
            }
            return [...prevItems, { ...bet, selectedOdd, oddKey }];
        });
    };

    const checkBetOdd = useCallback((betId, oddKey) => {
        return cartItems.findIndex((cItem) => cItem.NID === betId && cItem.oddKey === oddKey) > -1;
    }, [cartItems]);

    const totalAmount = cartItems.length > 0 ? cartItems.reduce((acc, item) => acc * item.selectedOdd, 1).toFixed(2) : 0;

    return (
        <BetContext.Provider value={{ cartItems, addOrUpdateBet, totalAmount, checkBetOdd }}>
            {children}
        </BetContext.Provider>
    );
};
