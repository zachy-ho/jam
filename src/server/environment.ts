import * as dotenv from 'dotenv';

// Should only need to run this once so we do it in this file and export the
// environment variables
// Change this to development
dotenv.config();

export const env = {
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  // SUPABASE_URL: process.env.SUPABASE_URL,
  // SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
};
