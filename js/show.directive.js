"use strict";
(function(){
  angular
    .module("posts")
    .directive("postShow", function(){
      return {
        templateUrl: "js/_show.html",
        scope:{
          post: "="
        }
        // link: function(scope){
        //
        // }
      }
    })

})();
