using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StackApp.Models
{
    public class Question
    {
        public int Id{ get; set; }
        [Required(ErrorMessage = "Title is requried.")]
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime TimeCreated { get; set; }
        public string Category { get; set; }
        public int Votes { get; set; }
        public int Views { get; set; }

        //auto connect to the answer 
        public ICollection<Answer> Answers { get; set; }
    }

   
}
