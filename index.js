function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function something() {
    console.log("function");
  };
}

function returnsAnAnonymousFunction() {
  return function () {};
}
