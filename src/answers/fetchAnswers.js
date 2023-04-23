export const fetchTestAnswer = async () => {
  const res = await fetch(
    "https://teqtlancpsgidvygohhh.supabase.co/rest/v1/test",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlcXRsYW5jcHNnaWR2eWdvaGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NDc1MzgsImV4cCI6MTk5NzUyMzUzOH0.v5OWspbLsQk6SU3ptfRlgP3DH9ofCORGfxO-2dBL8lk",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlcXRsYW5jcHNnaWR2eWdvaGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NDc1MzgsImV4cCI6MTk5NzUyMzUzOH0.v5OWspbLsQk6SU3ptfRlgP3DH9ofCORGfxO-2dBL8lk",
      },
    }
  );

  const inter = await res.json();
  const data = [];
  data.push(inter);
  console.log(data);
};
