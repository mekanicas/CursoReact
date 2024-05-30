import { useState } from "react";

export const useCount = (stock) => {
    const decrement = () => {
        if (count > 1){
            setCount(count - 1);
        }
    }

    const increment = () => {
        if (count < stock) {
            set(count + 1);
        }
    };

    const addToCart = () => {
        alert(`Agregaste ${count} productos`);
        setCount(1);
    };

    return {count,decrement,increment,addToCart}

}