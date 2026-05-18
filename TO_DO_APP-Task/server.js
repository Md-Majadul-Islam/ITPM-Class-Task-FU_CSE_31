const express = require('express');
const app = express();

app.use(express.json());

const todoRoutes = require('./routes/todos');
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}. -> http://localhost:${PORT}/todos.`));