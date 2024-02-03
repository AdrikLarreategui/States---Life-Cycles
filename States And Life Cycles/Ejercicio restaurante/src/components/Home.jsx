import React from 'react';

const Home = ({ dishes }) => {
    return (
        <div>
        <h2>Menú del día</h2>
            <ul>
                {dishes.map((dish) => (
                    <li key={dish.id}>
                        <strong>{dish.name}</strong>
                        <p>{dish.description}</p>
                        <p>Precio: ${dish.price}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Home