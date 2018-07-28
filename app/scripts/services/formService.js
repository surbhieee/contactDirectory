"use strict";

angular.module("contactDirectoryApp")
.service('formService',function(){

var scopeObject = [{Id: 234, FirstName:"John", LastName:"Doe", Email:"abc@gmail.com", Number:9561369648, Status:"Inactive"},
{Id: 2341, FirstName:"Nitin", LastName:"Makhija", Email:"bde@gmail.com", Number:9561369250, Status:"Active"}];


/**
 * returning the stored scope array
 */
function getScopeData(){
    return scopeObject;
}


/**
 * Storing the scope object
 * @param {*} scopeData 
 */
function setScopeData(scopeData){
    scopeObject = scopeData;
}

  /**
     * Checking repeated name.
     * @param {*} collection 
     * @param {*} keyname 
     */
function UniqueArraybyName(collection, keyname) {
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
      }

      var factory = {
        getScopeData: getScopeData,
        setScopeData: setScopeData,
        UniqueArraybyName:UniqueArraybyName
    };
    return factory;
});
