export function routingConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('app', {
        abstract: true,
        url: '/',
        template: '<app></app>'
    })
}