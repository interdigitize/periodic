'use strict';

// Imports from Famous
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var Position = require('famous/components/Position');
var Align = require('famous/components/Align');

// periodicTable npm module
var periodicTable = require('periodic-table');
var allElements = periodicTable.all();

//create a scene and route node
var scene = FamousEngine.createScene('body');
var rootNode = scene.addChild();

// a function to create elements
var elementMaker = function (elName) {
  var node = rootNode.addChild();
  node.setPosition((Math.random() * 1000), (Math.random() * 500));
  return new DOMElement(node, {
    content: elName
  });
}

//create elements for each element in the periodic table
var periodicElements = allElements.map( obj => {
  return elementMaker(obj.name)
})
