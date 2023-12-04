import { createClient } from '@supabase/supabase-js';

export const supabaseKey = 'https://xqtuxpfcfishvstxgwre.supabase.co';

export const supabaseUrl =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxdHV4cGZjZmlzaHZzdHhnd3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1ODQ0MTIsImV4cCI6MjAxNzE2MDQxMn0.YzFRzmRxoEBmdnrdPsbmp-oZuUFTrqiSnj4eZ-8e65U';

export const supabase = createClient(supabaseKey, supabaseUrl);

export default supabase;
