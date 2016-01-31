app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
  	{ 
    	name: 'The Book of Trees', 
    	price: 19, 
    	pubdate: new Date('2014', '03', '08'), 
    	cover: 'img/the-book-of-trees.jpg',
      likes: 0,
      dislikes: 0
  	},
    
  	{ 
    	name: 'Program or be Programmed', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
  	},
    
    { 
    	name: 'Welcome to Night Vale: The Novel', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: 'http://static1.squarespace.com/static/51e7119ae4b01c2e6a200e01/t/55ef4317e4b03a8ebbc9fc88/1441743655078/?format=300w',
      likes: 0,
      dislikes: 0
  	},
    
    { 
    	name: 'The Fault in Our Stars', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: 'https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg',
      likes: 0,
      dislikes: 0
  	}
  ];
  
    $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
  
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
};
  
  
}]);
