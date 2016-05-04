"use strict";

(function(){
  angular
    .module( "posts" )
    .factory( "PostFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction( $resource ){
    return $resource( "http://localhost:3000/posts/:id", {}, {
      update: { method: "PUT" }
    });
  }
}());
