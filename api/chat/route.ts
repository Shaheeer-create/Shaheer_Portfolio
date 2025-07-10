export async function POST(request: Request): Promise<Response> {
    const { message } = await request.json();
    
    const response = await fetch('https://shaheer-agent-api-sk.vercel.app/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    
    const data = await response.json();
    return Response.json(data);
  }