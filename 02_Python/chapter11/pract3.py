import asyncio
import time

async def send_notification(customer, seconds):
    print(f'{customer}에게 문자 발송 시작')
    await asyncio.sleep(seconds)
    print(f'{customer}에게 문자 발송 완료')

async def main():
    start = time.perf_counter()
    await asyncio.gather(
        send_notification('A', 1),
        send_notification('B', 3),
        send_notification('C', 2)
    )
    end = time.perf_counter()
    print(f'총 소요 시간 {end - start:.2f}')

asyncio.run(main())