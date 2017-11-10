'use strict';

// Imports from Famous
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var Position = require('famous/components/Position');
var Align = require('famous/components/Align');
var Size = require('famous/components/Size')

// periodicTable npm module
var periodicTable = require('periodic-table');
var allElements = periodicTable.all();

//create a scene and route node
var scene = FamousEngine.createScene('body');
var rootNode = scene.addChild();

var inALine = 0;
// a function to create elements
var elementMaker = function (elName, elSymbol, elAtomicNum, elAtomicMass) {
  var node = rootNode.addChild();
  var nodeEl = new DOMElement(node);
  nodeEl.setContent(`
    <div class='node'>
      <p class='atomicNum'>${elAtomicNum}</p>
      <h1 class='symbol'>${elSymbol}</h1>
      <p class='name'>${elName}</p>
      <p class='atomicMass'>${elAtomicMass}</p>
    </div>
  `);

  var nodeSize = new Size(node);
  nodeSize.setMode('absolute', 'absolute').setAbsolute(100, 100);

  node.setPosition(inALine, 0);
  inALine += 110;
  return node;
}

var roundMass = function(num, index) {
  return Math.round(parseFloat(num) * 1000) / 1000;
}

var periodicElements = allElements.map( (obj, index) => {
  return elementMaker(obj.name, obj.symbol, obj.atomicNumber, roundMass(obj.atomicMass, index))
})
