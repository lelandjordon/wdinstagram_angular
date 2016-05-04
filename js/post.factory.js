"use strict";

(function(){
  angular
    .module( "posts" )
    .factory( "PostFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction( $resource ){
    return $resource( "http://localhost:3000/entries/:id", {}, {
      update: { method: "PUT" }
    });
  }
}());
