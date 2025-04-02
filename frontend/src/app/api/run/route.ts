import { Client } from '@langchain/langgraph-sdk'
import { NextRequest } from 'next/server'

interface ChunkData {
  question?: string;
  [key: string]: any;
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { question, databaseUuid } = body
  const defaultDatabaseUuid = '921c838c-541d-4361-8c96-70cb23abd9f5'

  const client = new Client({
    apiKey: process.env.LANGSMITH_API_KEY,
    apiUrl: process.env.LANGGRAPH_API_URL,
  })

  try {
    const thread = await client.threads.create()
    const streamResponse = client.runs.stream(thread['thread_id'], 'my_agent', {
      input: { question, uuid: databaseUuid || defaultDatabaseUuid },
    })

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of streamResponse) {
            if (chunk.data && (chunk.data as ChunkData).question) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify(chunk.data)}\n\n`))
            }
          }
          controller.close()
        } catch (error) {
          controller.error(error)
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Error in run:', error)
    return new Response(JSON.stringify({ message: `Error in run: ${error}` }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
