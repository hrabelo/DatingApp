using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public ValuesController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var values = await _dataContext.Values.ToListAsync();

            return Ok(values);
        }
        
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var value = await _dataContext.Values.FirstOrDefaultAsync(o => o.Id == id);
            
            if(value == null) 
            {
                return NotFound();
            }

            return Ok(value);
        }


        [HttpPost]
        public void Post([FromBody] string value)
        {

        }

        [HttpPut]
        public void Put(int id, [FromBody] string value)
        {

        }

        [HttpDelete]
        public void Delete(int id)
        {

        }

    }
}
