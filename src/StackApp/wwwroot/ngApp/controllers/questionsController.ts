namespace StackApp.Controllers {

    export class QuestionsController {

        public questions;

        constructor(private questionServices: StackApp.Services.QuestionServices) {

            this.getQuestions();
        }

        getQuestions() {

            this.questions = this.questionServices.getQuestions();
        }
    }
}