https://stackoverflow.com/questions/4578424/javascript-extend-a-function


https://jsbin.com/jomagayoko/edit?js,console

```js
function init(){
  let name ="init";
  function doSomething(){
    console.log("test" + name)
  }
    doSomething();
}
//init();

// extend.js

const inittest = (f => u => { f(u)
  //let name ="init2";
  function doSomethingHereToo(){
    //console.log("test2",name)
    console.log("test2")
  }

  doSomethingHereToo();
})(init);

inittest();
```


```js
function init(){
  //let name ="init";
  this.testme="textddd";
  function doSomething(){
    console.log("test1")
  }
  this.testcall=function(){
    console.log("call!")
  }
  doSomething();
  
}
//init();

// extend.js

const inittest = (f => u => { f(u)
  //console.log(u)
  console.log(this.testme)
  
  this.testcall();
  function doSomethingHereToo(){
    console.log("test2")
  }

  doSomethingHereToo();
})(init);

inittest();
```