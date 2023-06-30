# DOM 
📕notion: https://www.notion.so/fun-blog/39-DOM-ce0bd43f87db46c49d67dee003d9e983<br>
<br>

- DOM이란 무엇인가? 간단하게@_@ 정의해주세여<br>
DOM이란 브라우저 렌더링 엔진이 HTML을 파싱한 뒤 생성된 객체( =노드 )를 
계층적 자료구조( =트리 자료구조 )로 만든 것이다. DOM은 HTML 문서의 계층적 구조와 정보를 나타내며 이를 제어할 수 있는 프로퍼티와 메서드를 제공한다. <br>

- DOM은 노드 객체의 계층적 구조로 구성된다. 여러 노드객체 종류 중 중요한 노드 타입 4가지는?<br>
노드 객체는 프로토타입에 의해 상속구조를 갖는다. 모든 노드 객체는 Object, EventTarget, Node인터페이스를 상속받는다.
    - 문서노드 : Document, HTMLDocument
    - 어트리뷰트 노드 : Attr
    - 요소노드 : Element, 태그의 종류별로 세분화된 인터페이스를 상속받는다
    - 텍스트노드 : CharacterData
      <br>

- DOM은 HTML 문서의 계층적 구조와 정보를 표현하고, 노드 객체의 타입에 따라 필요한 기능을 DOM API ( 프로퍼티와 메서드 )로 제공한다. DOM API를 통해 HTML구조나 스타일을 동적으로 조작할 수 있다.

### HTML구조나 내용, 스타일을 동적으로 조작하려면 노드를 가져와야 한다
```
Document.prototype.getElementById
인수로 전달한 id값을 갖는 요소 노드들을 탐색하여 반환

Document.prototype.getElementByTagName
위 메서드가 반환하는 노드는 유사배열 객체이면서 이터러블이다.

Document.prototype.getElementByClassName
인수로 전달한 class값을 갖는 모든 요소 노드들을 탐색하여 반환

Document.prototype.querySelector
인수로 전달한 CSS선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환

Document.prototype.querySelectorAll
인수로 전달한 CSS선택자를 만족시키는 모든 요소 노드를 탐색하여 반환

Document.prototype.matches
CSS선택자를 통해 특정 요소 노드를 취득할 수 있는지 확인
``` 

### HTMLCollection과 NodeList
- HTMLCollection과 Nodelist는 유사배열 객체이면서 이터러블이다. 따라서  for … of문으로 순회할 수 있으며, 스프레드 문법을 사용하여 배열로 변환 가능하다.
- HTMLCollection, NodeList객체로 노드를 변경/삭제할 때, 실시간으로 노드 객체 상태를 변경하므로 for문을 사용하면 원하지 않는 결과가 나올 수 있다.  이들을 배열로 변환하여 고차함수를 사용하는 것을 권장한다. <br>
    - HTMLCollection : getElementByTagName, getElementByClassName에서 반환하는 live객체다. <br>
    - NodeList : querySelectorAll반환하는 객체이며 non-live객체이다<br>
<br>

### Node 탐색 ( 읽기전용 접근자 프로퍼티 )
```
자식 노드 탐색
node.prototype.childNodes : 자식노드를 탐색하여 NodeList에 담아 반환 ⇒ 공백인 텍스트노드까지 포함될 수 있다
node.prototype.children : 자식노드를 탐색하여 HTMLCollection에 담아 반환 ⇒ 텍스트노드는 포함되지 않는다
        
자식 노드 존재 확인
node.prototype.hasChildNodes : 텍스트노드를 포함해 노드 확인
    
부모 노드 , 형제 노드 탐색 
node.prototype.parentNode : 부모 노드 탐색
node.prototype.previous(Element)Sibling , next(Element)Sibling : 자식 노드 탐색
```

### 노드 정보 취득 ( 읽기전용 접근자 프로퍼티 )
- 노드 정보 프로퍼티를 사용 : node.prototype.nodeType, node.prototype.nodeName

### 요소 노드의 텍스트 조작
- nodeValue : 
참조와 할당 모두 가능한 getter, setter접근자 프로퍼티다. nodeValue 를 참조하면 노드 객체의 값을 반환하고, 프로퍼티에 값을 할당하면 텍스트를 변경할 수 있다.
    
- textContent : 
getter와 setter가 모두 존재하는 접근자 프로퍼티이며, 요소 노드의 텍스트를 취득, 변경할 수 있다. textContent와 innerText프로퍼티는 유사한 동작을 하지만 innerText는 CSS를 고려해야 하므로 textContent를 사용하는 것이 더 빠르게 동작할 수 있다.
    
