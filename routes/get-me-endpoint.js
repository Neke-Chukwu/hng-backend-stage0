import express from 'express';
import axios from 'axios';

const router = express.Router();


// GET /me endpoint
router.get('/me', async (req, res) => {
    try {
        // random cat fact API
        const response = await axios.get('https://catfact.ninja/fact',
            {timeout: 5000});
        const catFact = response.data.fact;

        // Respond with user info and cat fact
        const userData = {
            status: 'success',
            user:{
                email: "nekeagust@gmail.com",
                name: "chukwuneke muoebonam",
                stack: [ "NodeJS", "ExpressJS", "Django"],
            },
            timestamp: new Date().toISOString(),
            fact: catFact
        };
        res.status(200).json(userData);
    }
    catch (error) {
        console.error('Error fetching cat fact:', error);
        res.status(500).json({ status: 'error', message: 'Failed to fetch cat fact' });
    }
});

export default router;