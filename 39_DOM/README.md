- DOM이란 무엇인가? 간단하게@_@ 정의해주세여
- DOM은 노드 객체의 계층적 구조로 구성된다. 여러 노드객체 종류 중 중요한 노드 타입 4가지는?
- 노드 객체는 프로토타입에 의해 상속구조를 갖는다. 모든 노드 객체는 Object, EventTarget, Node인터페이스를 상속받는다.
    - 문서노드 : Document, HTMLDocument
    - 어트리뷰트 노드 : Attr
    - 요소노드 : Element, 태그의 종류별로 세분화된 인터페이스를 상속받는다
    - 텍스트노드 : CharacterData
- DOM은 HTML 문서의 계층적 구조와 정보를 표현하고, 노드 객체의 타입에 따라 필요한 기능을 DOM API ( 프로퍼티와 메서드 )로 제공한다. DOM API를 통해 HTML구조나 스타일을 동적으로 조작할 수 있다.

### HTML구조나 내용, 스타일을 동적으로 조작하려면 노드를 가져와야 한다

- Document.prototype.getElementById
    
    인수로 전달한 id값을 갖는 요소 노드들을 탐색하여 반환
    
- Document.prototype.getElementByTagName
    
    위 메서드가 반환하는 노드는 유사배열 객체이면서 이터러블이다. 
    
- Document.prototype.getElementByClassName
    
    인수로 전달한 class값을 갖는 모든 요소 노드들을 탐색하여 반환
    
- Document.prototype.querySelector
    
    인수로 전달한 CSS선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환
    
- Document.prototype.querySelectorAll
    
    인수로 전달한 CSS선택자를 만족시키는 모든 요소 노드를 탐색하여 반환
    
- Document.prototype.matches
    
    CSS선택자를 통해 특정 요소 노드를 취득할 수 있는지 확인
    

### HTMLCollection과 NodeList

HTMLCollection과 Nodelist는 유사배열 객체이면서 이터러블이다. 따라서  for … of문으로 순회할 수 있으며, 스프레드 문법을 사용하여 배열로 변환 가능하다.

HTMLCollection, NodeList객체로 노드를 변경/삭제할 때, 실시간으로 노드 객체 상태를 변경하므로 for문을 사용하면 원하지 않는 결과가 나올 수 있다.  이들을 배열로 변환하여 고차함수를 사용하는 것을 권장한다. 

**(1) HTMLCollection**

getElementByTagName, getElementByClassName에서 반환하는 live객체다. 

**(2) NodeList**

querySelectorAll반환하는 객체이며 non-live객체이다.