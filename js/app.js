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
    .state("postIndex", {
      url: "/posts",
      templateUrl: "js/posts/index.html",
      controller: "PostIndexController",
      controllerAs: "PostIndexViewModel"
    })
    .state("postNew", {
      url: "/posts/new",
      templateUrl: "js/posts/new.html",
      controller: "PostNewController",
      controllerAs: "PostNewViewModel"
    })
    .state("postShow", {
      url: "/posts/:id",
      templateUrl: "js/posts/show.html",
      controller: "PostShowController",
      controllerAs: "PostShowViewModel"
    })
    .state("postEdit", {
      url: "/posts/:id/edit",
      templateUrl: "js/posts/edit.html",
      controller: "PostEditController",
      controllerAs: "PostEditViewModel"
    });
  }

})();
