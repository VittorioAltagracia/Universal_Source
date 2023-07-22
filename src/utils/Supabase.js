import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://teqtlancpsgidvygohhh.supabase.cox";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlcXRsYW5jcHNnaWR2eWdvaGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NDc1MzgsImV4cCI6MTk5NzUyMzUzOH0.v5OWspbLsQk6SU3ptfRlgP3DH9ofCORGfxO-2dBL8lk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
