import React from 'react'
import '../styles/App.css';

export const App = () => {
    const data = {
        name: "John Doe",
        enrollmentNo: "12345678",
        age: 34,
    }
    return (
        <div>
            <Person
                name="John Doe"
                enrollmentNo="12345678"
                age={34}
            />
        </div>
    );
};
