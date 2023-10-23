import React from "react";

// Custom Hooks empiezan por 'use'
// Funcion que se encarga de todo lo que tiene que ver con localStorage
function useLocalStorage(itemName, initialValue){
    const localStorageItem = localStorage.getItem(itemName); 
    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }
    // Todo para localStorage todo son Items
    const [item, setItem] = React.useState(parsedItem);
    // Actualiza el estado del custom hook y del localStorage
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, 
            JSON.stringify(newItem));
            setItem(newItem);
        };
    return [item, saveItem]
}

export  { useLocalStorage }