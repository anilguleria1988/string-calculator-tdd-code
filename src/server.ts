require('dotenv').config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { errorHandler } from './middlewares/error.middleware';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());



// Error handling
app.use(errorHandler);

// Health check
app.get('/health', (req: any, res) => {
    res.json({ 
        status: 'OK', 
        message: 'String Calculator API is running.' 
    });
});

// Start server only if not in test environment
if (process.env.ENVIRONMENT !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export { app };