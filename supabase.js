import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://pxjeklnduujlkvbgocfn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4amVrbG5kdXVqbGt2YmdvY2ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NDEwNjUsImV4cCI6MjA5MDAxNzA2NX0.k201jnaMYNxZHIAlGmRE9cnngT-rWBtZlVmCLxQEMhU'
export const supabase = createClient(supabaseUrl, supabaseKey)
