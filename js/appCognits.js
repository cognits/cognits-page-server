var cognitsApp=angular.module("cognitsApp",[]);cognitsApp.controller("formController",["$scope","$http","$timeout",function(e,a,l){a.get("js/paises.json").success(function(a){e.paises=a}),e.sendTheMail=function(){var e="2ZMRx5Wr9KOKm3hCKTfc4Q",a=new mandrill.Mandrill(e),l=$("#countryField").val(),s=$("#nameField").val(),o=$("#titleField").val(),i=$("#companyField").val(),n=$("#emailField").val(),t=$("#telephoneField").val(),d=$("#cityField").val(),r=$("#kindProffesional").val(),c=$("#messageField").val();$("#nameField").val(""),$("#titleField").val(""),$("#companyField").val(""),$("#emailField").val(""),$("#telephoneField").val(""),$("#cityField").val(""),$("#kindProffesional").val(""),$("#messageField").val(""),$("#countryField").val(""),console.log(s);var g="Name: "+s+"\nTitle: "+o+"\nCompany: "+i+"\nEmail: "+n+"\nTelephone: "+t+"\nCountry:  "+l+"\nCity:  "+d+"\nWhat kind of proffesional are you loking for? "+r+"\nTechnical needs: "+c,m={message:{from_email:"lgarcia@cognits.co",to:[{email:"c@cognits.co"}],subject:"New contact mail",text:g}};a.messages.send(m,function(e){console.log(JSON.stringify(e))},function(e){console.log(JSON.stringify(e))})},e.alert={show:!1,status:"success",message:"",info:" "},e.reset=function(){e.displayMessage=!1,e.bad=!1,e.good=!1,e.goodMessage=!1,e.badMessage=!1,e.alert.show=!1},e.validForm=function(a){e.displayMessage=!1,e.bad=!1,e.good=!1,e.goodMessage=!1,e.badMessage=!1;var s=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;""===$("#nameField").val()?(e.alert.show=!0,e.bad=!0,e.badMessage=!0,e.alert.status="wrong"):""!==$("#emailField").val()&&s.test($("#emailField").val())?""===$("#countryField").val().trim()?(e.alert.show=!0,e.bad=!0,e.badMessage=!0,e.alert.status="wrong"):(e.sendTheMail(),e.alert.show=!0,e.good=!0,e.goodMessage=!0,e.alert.status="success",l(function(){e.alert.show=!1},4e3)):(e.alert.show=!0,e.bad=!0,e.badMessage=!0,e.alert.status="wrong")}}]);