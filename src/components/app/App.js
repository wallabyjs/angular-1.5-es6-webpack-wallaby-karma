export const App = {
    bindings: {},
    controller: function(AppService) {
        this.message = AppService.getMessage();
    },
    template: `<div>{{$ctrl.message}}</div>`
};
