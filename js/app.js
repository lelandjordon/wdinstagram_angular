"use strict";

(function(){
  angular
    .module("wdinstagram", [
      "ui.router",
      "posts"
    ])
    .config(["$stateProvider", "$locationProvider", RouterFunction]);
    .controller("PostIndexController", PostIndexControllerFunc)
    .controller("PostShowController", PostShowControllerFunc);

  function PostController(){
    var vm = this;

    vm.posts = [{photo_url: "blank", author:"Steve", body:"a post"},
                {photo_url: "blank2", author:"Grasshopper", body:"another post"}
              ];

    vm.create = function(){

    }

  }

})();
