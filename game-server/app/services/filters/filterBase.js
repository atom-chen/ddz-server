/**
 * Copyright (c) 2015 深圳市辉游科技有限公司.
 */

var GameAction = require('../../consts/consts').GameAction;
var utils = require('../../util/utils');

var FilterBase = function(opts) {
  this.supportActions = [];
};

module.exports = FilterBase;

FilterBase.prototype.execute = function(params, cb) {
  var gameAction = params.gameAction;
  if (this.supportActions.indexOf(GameAction.ALL) < 0 && this.supportActions.indexOf(gameAction) < 0) {
    utils.invokeCallback(cb, null, params);
    return false;
  }

  return true;
};