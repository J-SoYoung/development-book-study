# 1-1 Design pattern

## 싱글톤 패턴 
자신의 인스턴스를 하나 포함하고 그 인스턴스만 반환합니다. 클라이언트는 새 인스턴스를 만들거나 싱글톤에서 제안한 인스턴스 외에 다른 인스턴스를 가져올 수 없다.<br>
- 싱글톤 패턴의 장점은 인스턴스를 매번 생성하지 않아서 메모리 소비가 적다는 점이다. 
- 단점으로는 하나의 인스턴스를 공유하기 때문에 의존성이 높다. 그리고 하나의 인스턴스를 공유하는 모듈간의 실행 순서에 따라 결과가 바뀔 수 있다는 점도 문제가 될 수 있다.
- ex1 코드 예제 출처 : https://medium.com/@tomas.svojanovsky11/javascript-singleton-pattern-1ef4e77ce696
- ex2 코드 예제 출처 : https://deeprnd.medium.com/javascript-singleton-design-pattern-2e5cc09e45b9

