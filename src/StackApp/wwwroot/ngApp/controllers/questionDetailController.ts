namespace StackApp.Controllers {

    export class QuestionDetailController {

        public questionId; //passed from view
        public question; //complete object of the question retrieve from api
        
        constructor(private questionServices: StackApp.Services.QuestionServices,
            private $state: angular.ui.IStateService,
            $stateParams: angular.ui.IStateParamsService) {

            this.questionId = $stateParams["id"];
            this.getQuestion();
        }

        getQuestion() {
           this.question =  this.questionServices.getQuestion(this.questionId);
        }

    }
}
