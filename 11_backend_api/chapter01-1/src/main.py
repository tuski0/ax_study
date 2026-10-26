import logging
from fastapi import FastAPI

logging.basicConfig(
    level=logging.INFO,
    # 현재는 root의 warning을 상속 받아로 warning 이상만 출력
    # level을 사용해서 INFO를 하한선으로 변경
    format="%(asctime)s [%(levelname)s] (%(name)s) - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)

logger = logging.getLogger("app")

"""
.critical(..)
.error(..)
.warning(..)
.info(..)
.debug(..)
"""

app = FastAPI()


@app.get("/")
async def hello_word() -> dict:
    logger.info("로깅 연습, Hello world!")

    return {
        "message" : "Hello world"
    }