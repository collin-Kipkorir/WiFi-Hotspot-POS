const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like HTML, CSS, JS

// In-memory subscriptions (for demo purposes)
const subscriptions = {};

// Serve subscription page
app.get('/subscription', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'subscription.html'));
});

// Handle payment simulation and subscription activation
app.post('/subscribe', (req, res) => {
    const { macAddress, plan } = req.body;

    if (!macAddress || !plan) {
        res.status(400).json({ success: false, message: 'Missing macAddress or plan.' });
        return;
    }

    // Simulate subscription activation
    const expiryTime = Date.now() + getPlanDuration(plan);
    subscriptions[macAddress] = expiryTime;

    res.json({ success: true, message: 'Subscription activated!', expiryTime });
});

// Check subscription status
app.get('/status', (req, res) => {
    const macAddress = req.query.macAddress;

    if (!macAddress || !subscriptions[macAddress] || Date.now() > subscriptions[macAddress]) {
        res.status(403).json({ success: false, message: 'Subscription expired or not found.' });
    } else {
        res.json({ success: true, message: 'Subscription active.' });
    }
});

// Get subscription duration (in milliseconds)
function getPlanDuration(plan) {
    const durations = {
        '1-hour': 60 * 60 * 1000,
        '1-day': 24 * 60 * 60 * 1000,
        '1-week': 7 * 24 * 60 * 60 * 1000
    };
    return durations[plan] || 0;
}

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
