// src/index.ts

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Decentralized Healthcare Management System!');
});

// Example endpoint for getting patient data
app.get('/patients', (req, res) => {
    // In a real application, this would fetch data from a database
    const patients = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 }
    ];
    res.json(patients);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
