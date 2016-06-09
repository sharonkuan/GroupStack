using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StackApp.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public DateTime TimeCreated { get; set; }
        public int Votes { get; set; }        
    }
}
