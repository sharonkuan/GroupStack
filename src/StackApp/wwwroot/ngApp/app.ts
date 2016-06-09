namespace StackApp {

    angular.module('StackApp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: StackApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: StackApp.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state("questions", {
                url: '/questions',
                templateUrl: '/ngApp/views/questions.html',
                controller: StackApp.Controllers.QuestionsController,
                controllerAs: 'controller'
            })
            .state("questionDetail", {
                url: '/questions/detail/:id',
                templateUrl: '/ngApp/views/questionDetail.html',
                controller: StackApp.Controllers.QuestionDetailController,
                controllerAs: 'controller'
            })
            .state("questionCreate", {
                url: '/questions/create',
                templateUrl: '/ngApp/views/questionCreate.html',
                controller: StackApp.Controllers.QuestionCreateController,
                controllerAs: 'controller'
            })
            .state("questionDelete", {
                url: '/questions/delete/:id',
                templateUrl: '/ngApp/views/questionDelete.html',
                controller: StackApp.Controllers.QuestionEditController,
                controllerAs: 'controller'
            })
            .state("questionEdit", {
                url: '/questions/edit/:id',
                templateUrl: '/ngApp/views/questionEdit.html',
                controller: StackApp.Controllers.QuestionEditController,
                controllerAs: 'controller'
            });
        //    .state('notFound', {
        //        url: '/notFound',
        //        templateUrl: '/ngApp/views/notFound.html'
        //    });

        //// Handle request for non-existent route
        //$urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}
