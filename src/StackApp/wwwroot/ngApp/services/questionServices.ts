namespace StackApp.Services {

    export class QuestionServices {

        private questionResources;
        private answerResources;

        constructor($resource: angular.resource.IResourceService) {
            //by adding the vote method to $resource's 3rd parameter, 
            //then we can call vote in the votQuestion method below
            //adding custom method into the API Controller PUT call
            this.questionResources = $resource("/api/question/:id", null, {
                vote: {
                    method: "PUT",
                    url: "/api/question/:id"                  
                }
            });

            this.answerResources = $resource("/api/answer/:id");
        }

        //from the server side will receive the questionId, and 1 or 0 
        //which will track accumulated votes 
        voteQuestion(questionId, voteValue) {
            //alert(questionId);
            return this.questionResources.vote({id: questionId}, voteValue).$promise;
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