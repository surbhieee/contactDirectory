'use strict';

/**
 * @ngdoc function
 * @name contactDirectoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the contactDirectoryApp
 */
angular.module('contactDirectoryApp')
  .controller('formController', function ($scope) {
    $scope.Contacts = [];
    
    /**
     * Add Data
     */
    $scope.addData = function(){
      var contact = {
        Id:Math.random(),
        Name: $scope.name,
        Number: $scope.number,
        Email: $scope.email
      };
      $scope.Contacts.push(contact);
      $scope.Contacts = UniqueArraybyName($scope.Contacts, 'Name');
      $scope.Contacts = UniqueArraybyName($scope.Contacts, 'Email');
      $scope.Contacts = UniqueArraybyName($scope.Contacts, 'Number');
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
      $scope.name = data.Name;
      $scope.number = data.Number;
      $scope.email = data.Email;
    };

    /**
     * Update data function
     */
    $scope.updateData = function(){
      $.grep($scope.Contacts, function(e){
      if(e.Id === $scope.id){
        e.Name = $scope.name;
        e.Number = $scope.number;
        e.Email = $scope.email;
      }
      });
    };

    /**
     * Clearing the model after adding the contact
     */
    function clearModel(){
      $scope.name = "";
      $scope.number = "";
      $scope.email = "";
    }

    /**
     * Checking repeated name.
     * @param {*} collection 
     * @param {*} keyname 
     */
    var UniqueArraybyName = function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }else {
            alert("Cannot push duplicate value");
          }
      }); 
      return output;
    };
  });
