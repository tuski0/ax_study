import httpx
import asyncio

async def fetch_todo():
    async with httpx.AsyncClient() as client:
        url = f'https://jsonplaceholder.typicode.com/todos/1'

        res = await client.get(url)
        result = res.json()
        print(f'{result['id']}, {result['title']}')

async def main():
    


asyncio.run(fetch_todo())