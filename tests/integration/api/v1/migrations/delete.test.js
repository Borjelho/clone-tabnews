test("DELETE to /api/v1/migrations should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "DELETE",
  });
  expect(response1.status).toBe(405);
  //const response1Body = response1.Response.json();
});
