namespace StackApp.Services {

    export class QuestionServices {

        private questionResources;

        constructor($resource : angular.resource.IResourceService) {
            this.questionResources = $resource("/api/question/:id");
        }

        getQuestions() {
            return this.questionResources.query();

        }

        getQuestion(questionId) {
            return this.questionResources.get({id: questionId});

        }

        saveQuestion(question) {
            return this.questionResources.save(question).$promise;
        }
    }
    angular.module("StackApp").service("questionServices", QuestionServices);
}