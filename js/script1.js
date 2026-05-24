//parent node
let para  = document.getElementById("paragraph");
let parentnode = para.parentNode;
console.log(parentnode);

//parent element
let parentele = para.parentElement;
console.log(parentele);

//text node
let textNode = document.getElementById("textNodeExample").firstChild;
console.log(textNode);

let parentOfTextNodeUsingNode = textNode.parentNode;
console.log(parentOfTextNodeUsingNode);

let parentOfTextNodeUsingElement = textNode.parentElement;
console.log(parentOfTextNodeUsingElement);

//html element
let htmlElement = document.documentElement;
console.log(htmlElement.parentNode);
console.log(htmlElement.parentElement);


//child node
let parentcontainer = document.getElementById("parent");
let childNodes = parentcontainer.childNodes;
console.log("childNodes of parentContainer:",childNodes);

//selecting child elements using children
let children = parentcontainer.children;
console.log("children of parentContainer:",children);

console.log(children[0]);
console.log(children[1]);
console.log(children[2]);

let parentContainer2 = document.getElementById("parent2");
let childNodes2 = parentContainer2.childNodes;

console.log("childNodes of parentContainer2:");
console.log(childNodes2);

//slecting first child and last child
let parent = document.getElementById("parent1");
let firstNode = parent.firstChild;
console.log("first child:",firstNode);

let lastNode = parent.lastChild;
console.log("last child:",lastNode);

let firstElement = parent.firstElementChild;
console.log(firstElement);

let lastElement = parent.lastElementChild;
console.log(lastElement);

//selecting a sibiling
let firstsibling = document.getElementById("first-sibling");
let nextNode = firstsibling.nextSibling;
console.log("next sibling:",nextNode);
let previousSibling = firstsibling.previousSibling;
console.log("previous sibling:",previousSibling);

let nextElement = firstsibling.nextElementSibling;
console.log("next element sibling:",nextElement);
let previousElement = firstsibling.previousElementSibling;
console.log("previous element sibling:",previousElement);

//nodeNmae and nodeType
let divElement = document.getElementById("sample-element");

console.log("nodeName of the element:", divElement.nodeName);

console.log("nodeType of the element:", divElement.nodeType);

let textNode1 = divElement.firstChild; 

console.log("nodeName of the text node:", textNode1.nodeName);

console.log("nodeType of the text node:", textNode1.nodeType);
