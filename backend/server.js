const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const PORT = 3000;

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// POST endpoint to handle subscription
app.post('/api/subscribe', (req, res) => {
    const { plan } = req.body;

    // Validate the plan
    if (!plan) {
        return res.status(400).json({ message: 'Plan is required.' });
    }

    // Mock success response
    res.status(200).json({
        message: `You have successfully subscribed to the ${plan} plan.`,
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
