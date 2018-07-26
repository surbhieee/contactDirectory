"use strict";

angular.module("contactDirectoryApp")
.service('formService',function(){
var factory = {
    getScopeData: getScopeData,
    setScopeData: setScopeData,
    UniqueArraybyName:UniqueArraybyName
};

var scopeObject = [];

return factory;

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
      };
});
