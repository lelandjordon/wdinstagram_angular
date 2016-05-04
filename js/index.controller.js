"use strict";

(function(){
  angular
  .module("posts")
  .controller("PostIndexController", [
    "PostFactory",
    PostIndexControllerFunction
  ]);

  function PostIndexControllerFunction( PostFactory ){
    this.posts = PostFactory.query();
  }
}());
