using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using StackApp.Models;

namespace StackApp.Data
{
    public class SampleData
    {
        public static void Initialize(IServiceProvider sp)
        {
            var db = sp.GetService<ApplicationDbContext>();
            db.Database.EnsureCreated();

            if (!db.Questions.Any())
            {
                var questions = new Question[]
                {
                         new Question
                {
                    Title = "Marino's AngularJS Question",
                    Body = "How do I use the Riot Games API within my AngularJS app?",
                    TimeCreated = DateTime.UtcNow,
                    Category = "AngularJS",
                    Votes = 0,
                    Views = 0,
                    Answers = new List<Answer>
                    {
                        new Answer { Message = "I'm also wondering this.", TimeCreated = DateTime.UtcNow, Votes = 0 },
                        new Answer { Message = "You have to use an $http and call to the API.", TimeCreated = DateTime.UtcNow, Votes = 0 }
                    }
                },
                new Question
                {
                    Title = "How do I seed the data?",
                    Body = "I would like to have some sample data to test out the functionality, how do I do it.",
                    TimeCreated = DateTime.UtcNow,
                    Views = 0,
                    Votes = 0,
                    Category = "ASPNET",
                    Answers = new List<Answer>
                       {
                           new Answer { Message="Thanks this was very helpful", TimeCreated = DateTime.UtcNow, Votes = 0},
                           new Answer { Message="Please do your homework before posting on slack. You are not doing yourself a favor", TimeCreated = DateTime.UtcNow, Votes = 0},
                           new Answer { Message="I still dont understand", TimeCreated = DateTime.UtcNow, Votes = 0},
                           new Answer { Message="Two Thumbs Up", TimeCreated = DateTime.UtcNow, Votes = 0}
                       }
                },
                new Question
                        {
                            Title = "Useful websites for every day learning",
                            Body = "What are some useful websites to visit every day?",
                            TimeCreated = DateTime.UtcNow,
                            Category = "General",
                            Votes = 0,
                            Views = 0,
                            Answers = new List<Answer>
                            {
                                new Answer { Message = "Quora has a wide variety of questions and answers from experts, providing a great source for knowledge", TimeCreated = DateTime.UtcNow, Votes = 0 },
                                new Answer { Message = "Khan Academy is completely free and covers many subjects including math and computer science.", TimeCreated = DateTime.UtcNow, Votes = 0 }
                            }
                        },
                    new Question
                    {
                        Title = "HTML5 Carousel",
                        Body = "How do I make a carousel in my HTML view?",
                        TimeCreated = DateTime.UtcNow,
                        Category = "HTML5 Carousel",
                        Votes = 0,
                        Views = 0,
                        Answers = new List<Answer>
                               {
                                   new Answer {
                                       Message = "Do you want it on every page or just the home page?",
                                       TimeCreated = DateTime.UtcNow,
                                       Votes = 0
                                   },
                                   new Answer {
                                       Message = "Have you tried using Bootstrap?",
                                       TimeCreated = DateTime.UtcNow,
                                       Votes = 0
                                   }
                               }
                        } //endOfQuestion
                    };
                db.Questions.AddRange(questions);
                db.SaveChanges();
            }
        }
    }
}

