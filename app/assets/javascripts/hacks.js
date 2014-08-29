(function(){

  var app = angular.module('hackathonApp', []);
  
  app.controller('AlbumCtrl', ["$scope", "$timeout", function($scope, $timeout){
    $scope.counter = 45;
    // var mytimeout = null;


    
    $scope.onTimeout = function(){
      if($scope.counter === 0){
        $scope.$broadcast('timer-stopped', 0);
        $timeout.cancel(mytimeout);
        return;
      }
        $scope.counter--;
        mytimeout = $timeout($scope.onTimeout,1000);
    };
    
    var mytimeout = $timeout($scope.onTimeout,1000);

    $scope.startTimer = function(){
      mytimeout = $timeout($scope.onTimeout, 1000);
    };
    $scope.stopTimer = function(){
      $scope.$broadcast('timer-stopped', $scope.counter);
      $scope.counter = 45;
      $timeout.cancel(mytimeout);
    };

      $scope.$on('timer-stopped', function(event, remaining){
      if(remaining === 0){
        alert('Your time ran out');
      }
    })

    var word = document.getElementById('hidden');
    console.log(word.value)
    $scope.answer = []
    $scope.submitAnswer = function(){
      console.log($scope.answer)
      if ($scope.answer === word.value){
        console.log("Correct!")
        $scope.correct = true;
        $scope.wrong = false;
      } else {
        console.log("Wrong!")
        $scope.correct = false;
        $scope.wrong = true;
      }

    };
  }


  ])
})();