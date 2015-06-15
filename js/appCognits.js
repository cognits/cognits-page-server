var cognitsApp = angular.module('cognitsApp', []);
	cognitsApp.controller("formController", ["$scope", "$http", "$timeout", function($scope,$http,$timeout){
    //this function parse the json file country
    $http.get('js/paises.json').success(function (pais) {				
   		$scope.paises = pais;
    });
    

		$scope.sendTheMail = function() {
			var apiKey = '2ZMRx5Wr9KOKm3hCKTfc4Q';
			//the variable  m is for create the conecction with mandrill  and send the mail
			var m = new mandrill.Mandrill(apiKey);
			var country = $("#countryField").val(); 
			var name = $("#nameField").val(); 
			var title = $("#titleField").val();
			var company = $("#companyField").val();
			var email = $("#emailField").val();
			var telephone = $("#telephoneField").val();
			var city = $("#cityField").val();
			var kindProffesional =  $("#kindProffesional").val();
			var messageString = $("#messageField").val();
			$("#nameField").val("");
			$("#titleField").val("");
			$("#companyField").val("");
			$("#emailField").val("");
			$("#telephoneField").val("");
			$("#cityField").val("");
			$("#kindProffesional").val("");
			$("#messageField").val("");
			$("#countryField").val(""); 
			//Information to send mail
			var messageBody = "Name: " + name + "\nTitle: " + title  + "\nCompany: " + company + "\nEmail: "+ email + "\nTelephone: " +telephone + "\nCountry:  " + country + "\nCity:  " + city + "\nWhat kind of proffesional are you loking for? " + kindProffesional  +"\nTechnical needs: "+messageString;
			var params = {
				"message": {
					"from_email":"lgarcia@cognits.co",
					"to":[{"email":"c@cognits.co"}],
					"subject": "New contact mail",
					"text": messageBody
				}
			};
			//Promise is for response and requiere  the data to mandrill 
			m.messages.send(params, function(res) {
				console.log(JSON.stringify(res));
			}, function(err) {
				console.log(JSON.stringify(err));
			});
		};
    $scope.alert ={
    show : false,
    status : 'success',
    message: '' ,
    info:" "
  };
  	//Function  for reset the message to send mail 
    $scope.reset = function(){
      $scope.displayMessage = false;
      $scope.bad = false ; 
      $scope.good =  false ; 
      $scope.goodMessage = false;
      $scope.badMessage = false;
      $scope.alert.show = false;

    };
    $scope.validForm = function(form){
      $scope.displayMessage = false;
      $scope.bad = false ; 
      $scope.good =  false ; 
      $scope.goodMessage = false;
      $scope.badMessage = false;
      //Regular Expresion for valid the field email
      var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

      if($('#nameField').val() === "" ){
        $scope.alert.show = true;
        $scope.bad = true ;
        $scope.badMessage = true;
        $scope.alert.status = "wrong";

      }else if($("#emailField").val() === "" || !regexp.test($("#emailField").val()) ){
        $scope.alert.show = true;  
        $scope.bad = true ;
        $scope.badMessage = true;
        $scope.alert.status = "wrong";
      }else if( $("#countryField").val().trim() === '' ) {
          $scope.alert.show = true;           
          $scope.bad = true ;
          $scope.badMessage = true;
          $scope.alert.status = "wrong";
      }else{
        $scope.sendTheMail();
        $scope.alert.show = true;
        $scope.good = true;
        $scope.goodMessage = true;
        $scope.alert.status = "success" ;
        //Angular Timer
        $timeout(function(){
            $scope.alert.show = false

        } ,4000); 
      }
    };
 }]);
