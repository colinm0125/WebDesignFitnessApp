const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const supabase = require('./model/supabase').getConnection;


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});