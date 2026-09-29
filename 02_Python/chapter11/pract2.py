import asyncio
import time

async def download_music(music_name, wait_seconds):
    print(f'{music_name} 다운로드를 시작합니다.')
    await asyncio.sleep(wait_seconds)
    print(f'{music_name} 다운로드를 완료했습니다.')

async def main():
    await asyncio.gather(
        download_music('첫 번째 음악', 2),
        download_music('두 번째 음악', 4)
    )

start = time.perf_counter()
asyncio.run(main())
end = time.perf_counter()
print(f'총 소요 시간 : {end - start}')
