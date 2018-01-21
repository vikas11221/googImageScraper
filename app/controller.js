/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
; (function () {

  angular
    .module('boilerplate')
    .controller('MainController', MainController)
    .controller('HistoryController', HistoryController)

  MainController.$inject = ['LocalStorage', 'QueryService', '$scope'];


  function MainController(LocalStorage, QueryService, $scope) {

    // 'controller as' syntax
    var self = $scope;
    self.searchKeyword = ""
    self.loading = false;

    self.search = function search() {
      /**
       * Load some data
       * @return {Object} Returned object
       */
      if (self.searchForm.$valid) {
        self.loading = true
        self.images = {}
        QueryService.query('GET', '/search/' + self.searchKeyword, {}, {})
          .then(function (data) {
            self.images = data.data.urls;
            self.loading = false
          });
      }
    }
  }

  HistoryController.$inject = ['LocalStorage', 'QueryService', '$scope', 'CONSTANTS'];


  function HistoryController(LocalStorage, QueryService, $scope, CONSTANTS) {

    // 'controller as' syntax
    var self = $scope;
    self.CONSTANTS = CONSTANTS

    self.getList = function getList(keyword) {
      QueryService.query('GET', '/images/' + keyword, {}, {})
        .then(function (data) {
          self.images = data.data[0].urls;
        });
    }

    QueryService.query('GET', '/history', {}, {})
      .then(function (data) {
        self.keywords = data.data;
      });

  }

})();