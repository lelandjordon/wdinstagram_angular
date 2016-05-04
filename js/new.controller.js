"use strict";

(function(){
  angular
    .module( "posts" )
    .controller( "PostNewController", [
      "PostFactory",
      "$stateParams",
      PostNewControllerFunction
    ])

    function PostNewControllerFunction( PostFactory, $stateParams ){
      this.post = new PostFactory();
      this.create = function(){
        this.post.$save()
      }
    }
}());
