def add(num1, num2):
    return num1 + num2

def minus(num1, num2):
    return num1 - num2

VERSION = '1.0.0' 
# 파이썬은 언어상 상수가 존재하지 않지만 관례적으로 변수명을 대문자로만 선언하면 상수 처리한다.
if __name__ == '__main__' : # 터미널에서 파이썬 파일을 실행할 때로 한정
    print('모듈명 : ', __name__ )

    result = add(10, 20)
    print('결과 : ', result)