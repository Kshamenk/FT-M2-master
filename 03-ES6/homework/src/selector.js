var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl)
  }
  for (let i = 0; i < startEl.children.length; i++) {
   var result = traverseDomAndCollectElements(matchFunc,startEl.children[i])
    resultSet = [...resultSet,...result]
  }
  return resultSet
  // (function traverse(el) {   
  //   if (matchFunc(el)) {
  //     resultSet.push(el);
  //   }

  //   for (var i = 0; i < el.childNodes.length; i++) {
  //     traverse(el.childNodes[i]);
  //   }
  // })(startEl);

  // return resultSet;     //retornamos la wea

  
  Array.from(startEl.childNodes).forEach(function(child) {  //con el metodo arrayfrom transformo los child en un array y despues itero sobre cada uno
    if (matchFunc(child)) {        //si el elemento cumple con la condición especificada en matchFunc, se agrega a la resultSet
      resultSet.push(child)
    }
    resultSet.push(...traverseDomAndCollectElements(matchFunc, child))   //se llama recursivamente a la función con el elemento hijo
  });

  return resultSet   //retornamos la wea
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === "#") {        //si selector en indice 0 es igual a (en cada caso)
    return "id"
  } else if (selector[0] === ".") {  //punto es para la clase, no olvidar
    return "class"
  } else {
    var selectorPartes = selector.split(".");  //con metodo split divido el selector en dos partes
    if (selectorPartes.length === 2) {
      return "tag.class"        // si el array tiene dos partes
    } else {
      return "tag"    //si es que tiene una sola
    }
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {       //La función de comparación verifica si el id del elemento es igual al selector, sin el símbolo "#".
    matchFunction = function(element) {
      return element.id === selector.slice(1);
    };
  } else if (selectorType === "class") { // verifica si el elemento contiene la clase especificada en el selector, sin el símbolo "."
    matchFunction = function(element) {
      return element.classList.contains(selector.slice(1));  // De nuevo, se usa slice() para cortar el primer carácter del selector.
    };
  } else if (selectorType === "tag.class") {
    var selectorParts = selector.split(".");    //devuelve true si el tagName del elemento coincide con la primera parte del selector en mayúsculas y la clase en el selector está presente en el classList del elemento.
    matchFunction = function(element) {
      return element.tagName === selectorParts[0].toUpperCase() && element.classList.contains(selectorParts[1]);  //usamos upperCase para la mayus, contains para el elemento en la classList.. UN VIAJE
    };
  } else if (selectorType === "tag") {
    matchFunction = function(element) {
      return element.tagName === selector.toUpperCase();  //devuelv true si el nombre del tag del elemento coincide con el selector (en mayúsculas).
    };
  }
  return matchFunction; //retorna la funcion 
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
