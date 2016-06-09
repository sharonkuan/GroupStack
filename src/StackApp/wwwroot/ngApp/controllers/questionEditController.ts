namespace StackApp.Controllers {

    export class QuestionEditController {

        public question; //got this from the view
        private questionId; //passing this to the server, got the id extracted from $stateParam


        constructor(private questionServices: StackApp.Services.QuestionServices,
            private $state: angular.ui.IStateService,
            $stateParams: angular.ui.IStateParamsService
        ) {
            this.questionId = $stateParams["id"]
            this.getQuestion();
        }

        getQuestion() {
            this.question = this.questionServices.getQuestion(this.questionId);
        }

        saveQuestion() {
            //debugger;
            this.questionServices.saveQuestion(this.question)
                .then(() => {
                    this.$state.go("questions")
                        .catch((data) => {
                            console.log(data);
                        });
                });
        }

        deleteQuestion() {
            this.questionServices.deleteQuestion(this.questionId).then(() => {
                this.$state.go("questions");
            });
        }

        cancel() {
            this.$state.go("questions");
        }
    }
}