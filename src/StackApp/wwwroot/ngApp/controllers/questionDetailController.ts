namespace StackApp.Controllers {

    export class QuestionDetailController {

        public questionId; //passed from view
        public question; //complete object of the question retrieve from api
        public answer;

        constructor(private questionServices: StackApp.Services.QuestionServices,
            private $state: angular.ui.IStateService,
            $stateParams: angular.ui.IStateParamsService
        ) {

            this.questionId = $stateParams["id"];
            this.getQuestion();
        }

        getQuestion() {
           this.question =  this.questionServices.getQuestion(this.questionId);
        }

        saveAnswer() {
            this.questionServices.saveAnswer(this.questionId, this.answer).then(() => {
                this.getQuestion();
                let element: any = document.getElementById("answerForm");
                element.reset();
            });
        }

        //this accepts the value set by the ng-click button value to pass to API controller 
        voteQuestion(voteType) {
            //alert(this.questionId);
            this.questionServices.voteQuestion(this.questionId, voteType).then(() => {
                this.getQuestion();
            });
        }

        cancel() {
            this.$state.go("questions");
        }

    }
}
