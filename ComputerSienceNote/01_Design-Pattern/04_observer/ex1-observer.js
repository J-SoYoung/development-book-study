// 주체
const observable = {

  observers: {},

  subscribe(obj) {
    const id = Object.keys(this.observers).length + 1;
    this.observers[id] = obj;
    console.log('subscribe-observer',id)
    return id;
  },

  notify(data) {
    for (const o of Object.keys(this.observers)) {
      this.observers[o].listen(data);
    }
  }
}

// 옵저버
const oneObserver = {
  listen(data) {
    console.log(data);
  }
}
const oneObserverID = observable.subscribe(oneObserver);
observable.notify({
  a: 1
});

// 옵저버2
const newObserver = {
  listen(data){
    console.log('new observer : '+  JSON.stringify(data))
  }
}
const newObsererID = observable.subscribe(newObserver);
observable.notify({
  b: 2
});