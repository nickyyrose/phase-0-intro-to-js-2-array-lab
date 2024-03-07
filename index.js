const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name);
  }




  function destructivelyPrependCat(name) {
    cats.unshift(name)
}


beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


  function destructivelyRemoveLastCat() {
    cats.pop()
}
  


beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


function destructivelyRemoveFirstCat() {
    cats.shift()
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function appendCat(name) {
    return [...cats, name];
  }
  
  
  function prependCat(name) {
    return [name, ...cats]
  }

function removeLastCat() {

}

function removeLastCat() {
   return cats.slice(0, -1)
}

function removeFirstCat() {
    return cats.slice (1)
}
