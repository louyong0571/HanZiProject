const RenderTargetBase = require('../RenderTargetBase');
import ReactNative from 'react-native';

function RenderTarget(canvas) {
  this.node = canvas;
}
RenderTarget.prototype = Object.create(RenderTargetBase.prototype);

RenderTarget.prototype.getContext = function() {
  return this.node.getContext('2d');
  // return this.node.context2D;
};

RenderTarget.init = (elmOrId, width = '100%', height = '100%') => {
  let canvas;
  let elm = elmOrId;
  if (typeof elmOrId === 'string') {
    // elm = global.document.getElementById(elmOrId);
  }
  // elm = ReactNative.findNodeHandle(elmOrId);
  // const nodeType = elm.nodeName.toUpperCase();
  // if (nodeType === 'CANVAS') {
    canvas = elm;
  // } else {
  //   canvas = global.document.createElement('canvas');
  //   elm.appendChild(canvas);
  // }
  // canvas.setAttribute('width', width);
  // canvas.setAttribute('height', height);
  return new RenderTarget(canvas);
};

module.exports = RenderTarget;
