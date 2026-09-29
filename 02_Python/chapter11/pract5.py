import httpx
import asyncio

async def fetch_todo_by_id(num):
    try:
        async with httpx.AsyncClient() as client:
            url = f'https://jsonplaceholder.typicode.com/posts/{num}'
            res = await client.get(url)
            res.raise_for_status()
            result = res.json()
            return result['id'], result['title']
    except httpx.HTTPError :
        print(f'{num}번 오류 발생')
        return num, '수집 에러 대체 데이터'

async def main():
    gather = [fetch_todo_by_id(i) for i in [1,2,3,999]]
    results = await asyncio.gather(*gather)
    for i in results:
        print(f'{i[0]}, {i[1]}')



asyncio.run(main())