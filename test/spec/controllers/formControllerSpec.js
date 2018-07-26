'use strict';

describe('Controller: formController', function () {

  // load the controller's module
  beforeEach(module('contactDirectoryApp'));

  var formController,formService,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _formService_) {
    scope = $rootScope.$new();
    formService = _formService_;
    formController = $controller('formController', {
      $scope: scope,
      formService:formService
      // place here mocked dependencies
    });
  }));

  it('formController should be defined', function () {
    expect(formController).toBeDefined();
  });

  it('should add data $scope.addContents array', function () {
    spyOn(formService, "setScopeData");
    scope.firstname = "abc";
    scope.lastname = "xyz";
    scope.number = 8000555500;
    scope.email = "s@s";
    scope.status = "Inactive";
    var addedContacts = { Id:222, FirstName:'d', LastName:"d", Number:22,Email:"s@s",Status:'Inactive'};
    scope.addData();
    expect(formService.setScopeData).toHaveBeenCalled();
    expect(scope.addedContacts).not.toEqual(addedContacts);
  });

  it('should test the uniqueness of input number', function () {
    scope.firstname = "abc";
    scope.lastname = "xyz";
    scope.number = 8000555500;
    scope.email = "s@s";
    scope.status = "Inactive";
    scope.addData();
    scope.number = 8000555500;
    var addedContacts1 = [{ Id:222, FirstName:'d', LastName:"d", Number:22,Email:"s@s",Status:'Inactive'}, { Id:222, FirstName:'d', LastName:"d", Number:22,Email:"s@s",Status:'Inactive'}];
    scope.addData();
    expect(scope.addedContacts).not.toEqual(addedContacts1);
  });

  it('should splice the data based on index passed', function () {
    scope.Contacts = [{a:1},{b:2}];
    var data = {a:1};
    scope.deleteRow(data);
    expect(scope.Contacts).toEqual([{a:1}]);
  });

  it('should attach a list of scope to the scope', function () {
    expect(3).toBe(3);
  });

  it('should bind the data to inputs', function () {
    var data = {
      Id:"abc"
    };
    scope.bindData(data);
    expect(scope.id).toEqual("abc");
  });

  it('should update the data when changed', function () {
    scope.Contacts = [{Id:2, FirstName: 'xyze'}];
    scope.firstname = 'abc';
    scope.id = 2;
    scope.updateData();
    expect(scope.Contacts).toEqual([{Id:2,FirstName:'abc',LastName:undefined, Number:undefined, Email: undefined, Status:undefined}]);
  });
});
