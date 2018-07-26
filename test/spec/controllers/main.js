'use strict';

describe('Controller: formController', function () {

  // load the controller's module
  beforeEach(module('contactDirectoryApp'));

  var formController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    formController = $controller('formController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of scope to the scope', function () {
    expect(3).toBe(3);
  });
});
