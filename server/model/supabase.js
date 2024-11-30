require('dotenv').config({path: '../.env'});
const { createClient } = require('@supabase/supabase-js');


/**
 * @typedef {import('@supabase/supabase-js').SupabaseClient} SupabaseClient
 */

module.exports = {
  /**
   * Create and return a Supabase client instance.
   * @returns {SupabaseClient} - The Supabase client instance.
   * @throws {Error} - If environment variables are missing or invalid.
   */
  getConnection() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables: SUPABASE_URL or SUPABASE_KEY');
    }
    console.log('Supabase URL:', process.env.SUPABASE_URL);
    console.log('Supabase Secret Key:', process.env.SUPABASE_SECRET_KEY ? 'Loaded' : 'Not Loaded');
  

    return createClient(supabaseUrl, supabaseKey);
  }
};
