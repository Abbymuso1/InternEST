import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tadtxmvsxfvbvxblxtah.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhZHR4bXZzeGZ2YnZ4Ymx4dGFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4MTY0MzAsImV4cCI6MjAyOTM5MjQzMH0.Oz1YZuQriwCO5Hohnjb9CMM592m1Lgal8JMGp2ocrF4';
export const supabase = createClient(supabaseUrl, supabaseKey);