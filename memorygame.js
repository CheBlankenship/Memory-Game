var app = angular.module('my-app', []);

function Card(num) {
  this.url = 'images/monsters-' + num + '.png';
  this.open = false;
  this.matched = false;
}

app.controller('MyController', function($scope, $timeout) {
  $scope.state = "first";
  $scope.firstCard;
  $scope.secondCard;
  $scope.count = 0;
  $scope.countDown = 9;
  $scope.cards = [
    [
      new Card("1"),
      new Card("2"),
      new Card("3"),
      new Card("4")
    ],
    [
      new Card("1"),
      new Card("2"),
      new Card("3"),
      new Card("4")
    ]
  ];


  $scope.click = function(card) {
    if ($scope.state === "first") {
        card.open = true;
        $scope.firstCard = card;
        $scope.state = "second";
        console.log($scope.firstCard.url);
      }
    else if ($scope.state === "second") {
        card.open = true;
        $scope.secondCard = card;
        console.log($scope.secondCard.url);
        if ($scope.firstCard.url === $scope.secondCard.url) {
          console.log("check");
          $scope.state = "first";
          console.log($scope.state);
          $scope.count += 1;
          if($scope.count === 4){
            alert("You win!");
          }
          }
        if ($scope.firstCard.url !== $scope.secondCard.url) {
          console.log("not matched");
          $timeout(function() {
            $scope.firstCard.open = false;
            $scope.secondCard.open = false;
            $scope.countDown -= 1;
            if($scope.countDown === 0){
              alert("You lose!");
            }
          }, 1000);

          $scope.state = "first";
          console.log($scope.state);
        }
        }

};
  // $scope.click = function(card) {
  //       card.open = true;
  //     };



});
