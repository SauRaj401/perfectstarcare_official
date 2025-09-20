import { createClient } from '@supabase/supabase-js'

// Hardcode for now
const SUPABASE_URL = 'https://rqhuhlygtobrqlydvwqm.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxaHVobHlndG9icnFseWR2d3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3Nzc4NjEsImV4cCI6MjA3MzM1Mzg2MX0.ydcEdMLGuHUBUpIo5enyoaAgxMLZxvGvhmmpqTH1mfM'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
