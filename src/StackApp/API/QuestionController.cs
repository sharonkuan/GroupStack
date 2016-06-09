using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StackApp.Data;
using Microsoft.EntityFrameworkCore;
using StackApp.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace StackApp.API
{
    [Route("api/[controller]")]
    public class QuestionController : Controller
    {
        private ApplicationDbContext _db;
        
        public QuestionController(ApplicationDbContext db)
        {
            this._db = db;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            var questions = _db.Questions.Select(q => q).ToList();
            return Ok(questions);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var question = _db.Questions.Where(q => q.Id == id).Include(q => q.Answers).FirstOrDefault();
            return Ok(question);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Question question)
        {
            if (question.Id == 0)
            {
                _db.Questions.Add(question);
                _db.SaveChanges();
            }
            else
            {
                var questionToEdit = _db.Questions.FirstOrDefault(q => q.Id == question.Id);
                questionToEdit.Title = question.Title;
                questionToEdit.Body = question.Body;
                questionToEdit.Views = question.Views;
                questionToEdit.Votes = question.Votes;
                questionToEdit.TimeCreated = DateTime.UtcNow;
                questionToEdit.Category = question.Category;
            }

            return Ok();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
