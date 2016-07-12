using ASZ.Tms.DataAccess;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Tms.Entities;

namespace Tms.RestAPI.Controllers
{
    public class UserController : ApiController
    {
        // GET api/<controller>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            DapperUserRepository repository = new DapperUserRepository(new DbContext.DbContext());
            if (repository != null)
            {
                return repository.FindAll();
            }

            return new List<User>();
        }

        // GET api/<controller>/5
        public string Get(string id)
        {

            DapperUserRepository repository = new DapperUserRepository(new DbContext.DbContext());
            if (repository != null)
            {
                IEnumerable<User> users = repository.Find(id);
                return JsonConvert.SerializeObject(users, Formatting.None);
            }

            return string.Empty;
        }

        // POST api/<controller>
        public void Post(User user)
        {

            DapperUserRepository repository = new DapperUserRepository(new DbContext.DbContext());
            if (repository != null)
                repository.Add(user);
        }

        // PUT api/<controller>/5
        public void Put(string id, User user)
        {
            DapperUserRepository repository = new DapperUserRepository(new DbContext.DbContext());
            if (repository != null)
                repository.Update(user);
        }

        // DELETE api/<controller>/5
        public void Delete(string id)
        {
            DapperUserRepository repository = new DapperUserRepository(new DbContext.DbContext());
            if (repository != null)
                repository.Remove(id);
        }
    }
}
