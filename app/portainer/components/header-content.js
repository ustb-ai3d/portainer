angular.module('portainer.app')
.directive('rdHeaderContent', ['Authentication', function rdHeaderContent(Authentication) {
  var directive = {
    requires: '^rdHeader',
    transclude: true,
    link: function (scope, iElement, iAttrs) {
      scope.username = Authentication.getUserDetails().username;
    },
    template: '<div class="breadcrumb-links"><div class="pull-left" ng-transclude></div><div class="pull-right" ng-if="username"><a ui-sref="portainer.account" style="margin-right: 5px;"><u><i class="fa fa-wrench" aria-hidden="true"></i> my account </u></a><a ui-sref="portainer.auth({logout: true})" class="text-danger" style="margin-right: 25px;"><u><i class="fa fa-sign-out-alt" aria-hidden="true"></i> log out</u></a></div></div>',
    restrict: 'E'
  };
  return directive;
}]);
