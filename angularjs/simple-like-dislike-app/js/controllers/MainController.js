app.controller('MainController', ['$scope', function($scope) {
  $scope.title = "My Book";
  $scope.promo = "Promotion Code"
	
  $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/books/the-book-of-trees.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/books/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'The Jungle Book',
      price: 10,
      pubdate: new Date('2015', '10', '01'),
      cover: 'img/books/the-jungle-book.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: '3 Mistakes',
      price: 12,
      pubdate: new Date('2012', '08', '01'),
      cover: 'img/books/3-mistakes.jpg',
      likes: 0,
      dislikes: 0
    }
  ];
  
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);
