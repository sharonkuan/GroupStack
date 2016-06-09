namespace StackApp.Controllers {

    export class QuestionCreateController {

        public question;

        constructor(private questionServices: StackApp.Services.QuestionServices,
        private $state : angular.ui.IStateService) {

        }

        saveQuestion() {
            this.questionServices.saveQuestion(this.question).then(() => {
                this.$state.go("questions");
            });
        }

        cancel() {
            this.$state.go("questions");
        }
    }
}

