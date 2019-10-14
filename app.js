const app = angular.module('app', [])

app.controller('MyController', function ($scope) {
  $scope.outerMessage = 'Hello'
  $scope.outerOnMessageChange = (message) => {
    console.log("Message changed to:", message);
  }
})

app.component('helloComponent', {
  template: `
    <div>
        Component Message: <input type="text" ng-model="$ctrl.message" ng-change="$ctrl.onMessageChange($ctrl.message)"/>
    </div>
    `,
  bindings: {
    message: '<',
    onMessageChange: '<'
  }
})
