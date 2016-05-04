"use strict";

(function(){
  angular
    .module( "posts" )
    .controller( "PostEditController", [
      "PostFactory",
      "$stateParams",
      PostEditControllerFunction
    ]);

  function PostEditControllerFunction( PostFactory, $stateParams ){
    this.post = PostFactory.get({id: $stateParams.id});
    this.update = function(){
      this.post.$update({id: $stateParams.id})
    }
    this.destroy = function(){
      this.post.$delete({id: $stateParams.id});
    }
  }
}());
