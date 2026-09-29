import asyncio
import time

async def cook_ramen():
    print('라면 조리를 시작합니다.')
    await asyncio.sleep(3)
    print('라면 조리를 완료했습니다.')



start = time.perf_counter()
asyncio.run(cook_ramen())
end = time.perf_counter()
print(f'총 소요 시간 : {end - start}')