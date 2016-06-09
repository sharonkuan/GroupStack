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

        cancel() {
            this.$state.go("questions");
        }

    }
}
