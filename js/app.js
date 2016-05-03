"use strict";

(function(){
  angular
    .module("wdinstagram", [
      "ngResource",
    ])
    .controller("postController", PostController);

  function PostController(){
    var vm = this;

    vm.posts = [{photo_url: "blank", author:"Steve", body:"a post"},
                {photo_url: "blank2", author:"Grasshopper", body:"another post"}
              ];
  }

})();
