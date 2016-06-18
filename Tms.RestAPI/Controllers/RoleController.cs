using ASZ.Tms.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Tms.Entities;

namespace Tms.RestAPI.Controllers
{
    public class RoleController : ApiController
    {
        // GET: api/Role
        [AllowAnonymous]
        public IEnumerable<Role> Get()
        {
            var dbContext = new DbContext.DbContext();

            //Dependency needs to be injected.
            //Factory needs to be called.

            var roleRepository = new DapperRoleRepository(dbContext);


            return roleRepository.FindAll();

            //return new string[] { "value1", "value2" };

        }
    }
}
