"use strict";

(function(){
  angular
    .module("wdinstagram", [
      "ui.router",
      "posts"
    ])
    .config(["$stateProvider", RouterFunction]);


    function RouterFunction($stateProvider){
    $stateProvider
    .state("postIndex", {    // This name is how we reference this state, like a view, from the rest of the app.
      url: "/posts",      // When the URL says this...
      templateUrl: "js/index.html",   // ... the app goes here...
      controller: "PostIndexController",  // then uses this controller to do something.
      controllerAs: "PostIndexViewModel"
    })
    .state("postNew", {
      url: "/posts/new",
      templateUrl: "js/new.html",
      controller: "PostNewController",
      controllerAs: "PostNewViewModel"
    })
    .state("postShow", {
      url: "/posts/:id",
      templateUrl: "js/show.html",
      controller: "PostShowController",
      controllerAs: "PostShowViewModel"
    })
    .state("postEdit", {
      url: "/posts/:id/edit",
      templateUrl: "js/edit.html",
      controller: "PostEditController",
      controllerAs: "PostEditViewModel"
    });
  }

})();
