using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StackApp.Data;
using StackApp.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace StackApp.API
{
    [Route("api/[controller]")]
    public class AnswerController : Controller
    {
        private ApplicationDbContext _db;

        public AnswerController(ApplicationDbContext db)
        {
            this._db = db;
        }

        // POST api/values
        [HttpPost("{id}")]
        public IActionResult Post(int id, [FromBody]Answer answer)
        {
            var question = _db.Questions.Where(q => q.Id == id).Include(q => q.Answers).FirstOrDefault();
            question.Answers.Add(answer);
            _db.SaveChanges();

            return Ok();
        }


        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
