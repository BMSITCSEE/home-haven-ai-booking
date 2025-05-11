// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const aiBot = require('./aiBot');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Example route
app.post('/api/ask', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'No message provided' });
    }

    const botResponse = aiBot.getBotResponse(message);
    res.json({ response: botResponse });
});

app.listen(PORT, () => {
    console.log(`🤖 Bot server running at http://localhost:${PORT}`);
});
