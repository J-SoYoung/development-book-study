/** singleton pattern : 하나의 인스턴스만 생성하고 그것만 반환한다. */

// instance1,2는 Singleton의 메서드를 사용해 객체를 생성한 것이다. 
// 그래서 그 다음줄 콘솔에서 instance가 같다고 나온다.
// instance3은 새로운 인스턴스를 생성하려고 했기 때문에 Error남

var Singleton = (function() {
  var instance;

  function createInstance() {
      var object = new Object();
      return object;
  }
  return {
      getInstance: function() {
          if (!instance) {
              instance = createInstance();
          }
          return instance;
      }
  };
})();
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

// instance1,2는 같은 인스턴스다. 
console.log("Same instance? " + (instance1 === instance2)); // Same instance? true 

// Error Singleton is not a constructor. 
var instance3 = new Singleton();


