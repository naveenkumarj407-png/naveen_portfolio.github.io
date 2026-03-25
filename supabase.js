import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://slbpihsdwkwfjtxedoor.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsYnBpaHNkd2t3Zmp0eGVkb29yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MjA5MjQsImV4cCI6MjA4OTk5NjkyNH0.79a1M_9sPMnLm6yf0qGVJ2HaTWW7ftjZ-d2S88V0PY4'

export const supabase = createClient(supabaseUrl, supabaseKey)
