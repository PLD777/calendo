import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://pqefsuojelqrqcuobjyv.supabase.co';
const supabasePublicKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxZWZzdW9qZWxxcnFjdW9ianl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NTAyNjMsImV4cCI6MjA0NTUyNjI2M30.IBjdAZwR-pHZWMl2sA90F-1sDMxxhLRHXlNhKj4ZkDU';
const supabase = createClient(supabaseUrl, supabasePublicKey);

export default supabase;
