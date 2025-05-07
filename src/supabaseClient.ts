import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ourupejrgjmbnxfjhapx.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91cnVwZWpyZ2ptYm54ZmpoYXB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NjIwNzksImV4cCI6MjA1OTEzODA3OX0.PWP64B4BlXNY_8E1WZ3Ba7lRVoFK5NOD2t41QCiAP4E"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);