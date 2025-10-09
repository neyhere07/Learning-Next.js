export const users = [
  { id: 1, name: "Fuji Kaze" },
  { id: 2, name: "Kenshi Yonezu" },
];

export async function GET() {
  return Response.json(users);
}
// Have to leaarn the below code properly :")
export async function POST(request: Request) {
  const user = await request.json();
  const newUser = { id: users.length + 1, name: user.name };
  users.push(newUser);
  return new Response(JSON.stringify(newUser), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}