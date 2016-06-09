namespace StackApp.Services {

    export class QuestionServices {

        private questionResources;
        private answerResources;

        constructor($resource: angular.resource.IResourceService) {
//by adding teh vot method, we can call it from below votQuestion
            this.questionResources = $resource("/api/question/:id", null, {
                vote: {
                    method: "PUT"                    
                }
            });
            this.answerResources = $resource("/api/answer/:id");
        }

        //from the server side will receive the questionId, and 1 or 0 
        //which will track accumulated votes 
        voteQuestion(questionId, voteValue) {
            return this.questionResources.vote({id: questionId}, voteValue);
        }

        getQuestions() {
            return this.questionResources.query();

        }

        getQuestion(questionId) {
            return this.questionResources.get({id: questionId});

        }

        saveQuestion(question) {
            //debugger;
            return this.questionResources.save(question).$promise;
        }

        saveAnswer(questionId, answer) {
            return this.answerResources.save({ id: questionId }, answer).$promise;
        }

        deleteQuestion(questionId) {
            return this.questionResources.delete({ id: questionId }).$promise;
        }

    }
    angular.module("StackApp").service("questionServices", QuestionServices);
}