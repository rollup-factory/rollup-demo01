(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  const sayHello = (message) => {
    alert(message);
  };

  sayHello('Hello from Rollup');

}));
//# sourceMappingURL=bundle.umd.js.map
