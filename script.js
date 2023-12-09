const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Declare a variable to store user data
let users = [];

// POST '/users' - Create a user with name, email, and username
app.post('/users', (req, res) => {
    const { name, email, username } = req.body;
    const newUser = { id: users.length + 1, name, email, username };
    users.push(newUser);
    res.json({ message: 'User created successfully', user: newUser });
});

// GET '/users' - Get all users list
app.get('/users', (req, res) => {
    res.json({ users });
});

// GET '/users/:id' - Get a specific user based on the id provided
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const foundUser = users.find(user => user.id === userId);
    if (foundUser) {
        res.json({ user: foundUser });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// PUT '/users/:id' - Update a specific user
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email, username } = req.body;
    let foundUser = users.find(user => user.id === userId);
    if (foundUser) {
        foundUser.name = name || foundUser.name;
        foundUser.email = email || foundUser.email;
        foundUser.username = username || foundUser.username;
        res.json({ message: 'User updated successfully', user: foundUser });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// DELETE '/users/:id' - Delete a specific user
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const initialLength = users.length;
    users = users.filter(user => user.id !== userId);
    if (users.length < initialLength) {
        res.json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
