"""
1. 도서 대여점의 도서는 2가지 상태로 관리
    (대출중 (Rented), 대출가능(available))
2. 대출중인 도서는 대여가 불가능
3. 소규모 대여점이기 때문에 도서별 재고는 1권씩만 보유
4. 도서 번호, 제목, 저자 등의 정보를 확인 할 수 있다
"""

from datetime import datetime


class Book:
    def __init__(self, book_id: int, title: str, author: str, status: str):
        self.id = book_id
        self.title = title
        self.author = author
        self.status = status

    @classmethod
    def create(self, book_id: int, title: str, author: str, status: str):
        # 도서의 상태는 AVAILABLE, RENTED 한정 됨
        if status not in ["AVAILABLE", "RENTED"]:
            raise ValueError("허용되지 않는 도서 상태")
        
        if not title or not title.strip():
            raise ValueError("도서의 제목은 필수 항목")
        
        if not author or not author.strip():
            raise ValueError("도서의 저자는 필수 항목")
        
        book = Book(book_id, title, author, status)
        book.created_at = datetime.now()
        return book

    def rent(self):
        if self.status != "AVAILABLE":
            raise ValueError("대출 가능한 도서가 아님")

        self.status = "RENTED"

    def returnBook(self):
        if self.status != "RENTED":
            raise ValueError("대출중인 도서가 아님")

        self.status = "AVAILABLE"
