"use strict";

(function(){
  angular
    .module( "posts" )
    .controller( "PostShowController", [
      "PostFactory",
      "$stateParams",
      PostShowControllerFunction
    ]);

  function PostShowControllerFunction( PostFactory, $stateParams ){
    this.post = PostFactory.get({id: $stateParams.id});
  }
}());
