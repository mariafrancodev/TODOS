import React from "react";

// Custom Hooks empiezan por 'use'
// Funcion que se encarga de todo lo que tiene que ver con localStorage
function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                setLoading(false);

            } catch (error) {
                setLoading(false);
                setError(true);
            }
        // Tiempo en conectarse    
        }, 2000);
    }, []);

    // Actualiza el estado del custom hook y del localStorage
    const saveItem = (newItem) => {
        localStorage.setItem(itemName,
            JSON.stringify(newItem));
        setItem(newItem);
    };
    // Mas de 2 hooks devolver mejor un obj no un arr
    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage }

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de intro a React', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'Ir al gym', completed: true},
//   {text: 'componer canción', completed: true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
