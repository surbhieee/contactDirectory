'use strict';

/**
 * @ngdoc function
 * @name contactDirectoryApp.controller:formController
 * @description
 * # AboutCtrl
 * Controller of the contactDirectoryApp
 */
angular.module('contactDirectoryApp')
  .controller('formController', function ($scope,formService) {
    $scope.addedContacts = []
    $scope.Contacts = formService.getScopeData();
    
    /**
     * Add Data
     */
    $scope.addData = function(){
      var contact = {
        Id:Math.random(),
        FirstName: $scope.firstname,
        LastName: $scope.lastname,
        Number: $scope.number,
        Email: $scope.email,
        Status: $scope.status
      };
      $scope.addedContacts = formService.getScopeData();
      $scope.addedContacts.push(contact);
      $scope.addedContacts = formService.UniqueArraybyName($scope.Contacts, 'Email');
      $scope.addedContacts = formService.UniqueArraybyName($scope.Contacts, 'Number');
      formService.setScopeData($scope.addedContacts);
      clearModel();
    };

    /**
     * Delete the clicked row
     * @param {*} data 
     */
    $scope.deleteRow = function(data){
      var index = $scope.Contacts.indexOf(data);
      $scope.Contacts.splice(index,1);
    };

    /**
     * Binding the data to be updated to scope
     * @param {*} data 
     */
    $scope.bindData = function(data){
      $scope.id = data.Id;
      $scope.firstname = data.FirstName;
      $scope.lastname = data.LastName;
      $scope.number = data.Number;
      $scope.email = data.Email;
      $scope.status = data.Status;
    };

    /**
     * Update data function
     */
    $scope.updateData = function(){
      $.grep($scope.Contacts, function(e){
      if(e.Id === $scope.id){
        e.FirstName = $scope.firstname;
        e.LastName = $scope.lastname;
        e.Number = $scope.number;
        e.Email = $scope.email;
        e.Status = $scope.status;
      }
      }); 
    };

    /**
     * Clearing the model after adding the contact
     */
    function clearModel(){
      $scope.firstname = "";
      $scope.lastname = "";
      $scope.number = "";
      $scope.email = "";
      $scope.status = "";
    }
  });
