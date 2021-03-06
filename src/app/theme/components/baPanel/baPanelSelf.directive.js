/**
 * @author a.bozga
 * created on 25.04.2017
 */
(function () {
  'use strict';

  /**
   * Represents current element as panel, adding all necessary classes.
   */
  angular.module('Immo.theme')
      .directive('baPanelSelf', baPanelSelf);

  /** @ngInject */
  function baPanelSelf(baPanel) {
    return angular.extend({}, baPanel, {
      link: function(scope, el, attrs) {
        el.addClass('panel panel-white');
        if (attrs.baPanelClass) {
          el.addClass(attrs.baPanelClass);
        }
      }
    });
  }

})();
