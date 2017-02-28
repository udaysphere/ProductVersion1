var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
//var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

var poolData = {
       UserPoolId : 'us-west-2_zGS9RytY0', // Your user pool id here
       ClientId : '6jj6utd8uaf265bep14jaqqlh0' // Your client id here
   };
   var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

   var attributeList = [];

   var dataEmail = {
       Name : 'email',
       Value : 'uday@practiceconsulting.com'
   };

   var dataPhoneNumber = {
       Name : 'phone_number',
       Value : '+919490217947'
   };
   var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
   var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);

   attributeList.push(attributeEmail);
   attributeList.push(attributePhoneNumber);

   userPool.signUp('demo', 'password', attributeList, null, function(err, result){
       if (err) {
           console.log(err);
           return;
       }
       var cognitoUser = result.user;
       console.log('user name is ' + cognitoUser.getUsername());
   });
