'use strict';

describe('Service: formService', function () {

  // load the controller's module
  beforeEach(module('contactDirectoryApp'));

  var formService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_formService_, $rootScope) {
    this.scope = $rootScope.$new();
    formService = _formService_;
  }));

  it('form service should have been defined', function () {
    expect(formService).toBeDefined();
    expect(formService).not.toBeNull();
  });

  it('Expect to store and get scopeData', function () {
    var scopeDataToSet = {a:1};
    formService.setScopeData(scopeDataToSet);
    var scopeDataToGet = formService.getScopeData();
    expect(scopeDataToGet).toEqual(scopeDataToSet);
  });

});
