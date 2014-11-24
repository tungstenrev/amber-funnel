// app.js
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/email)
        .state('form.email', {
            url: '/email',
            templateUrl: 'form-email.html'
        })
        
        // url will be /form/info
        .state('form.info', {
            url: '/info',
            templateUrl: 'form-info.html'
        })

        // url will be /form/info
        .state('form.cc', {
            url: '/cc',
            templateUrl: 'form-cc.html'
        })
        
        // url will be /form/thx
        .state('form.thx', {
            url: '/thx',
            templateUrl: 'form-thx.html'
        });
        
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/email');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };
    
});