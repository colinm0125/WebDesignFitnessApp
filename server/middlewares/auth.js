\const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY);

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  const { data, error } = await supabase.auth.getUser(token);

  if (error) {
    return res.status(403).json({ error: 'Invalid token.' });
  }

  req.user = data.user;
  next();
};

module.exports = { verifyToken };