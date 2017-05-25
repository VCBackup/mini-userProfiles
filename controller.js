angular.module('userProfiles').controller('MainController', 
function($scope, mainService){
    
    $scope.getUsers = function(){
        $scope.users = mainService.getUsers();
        return $scope.users;
    };
    $scope.thisAppIsBroken = "This angular app is working";
   
})