using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Tms.DbContext;
using Tms.Entities;
using Tms.RepositoryContracts;
using Dapper;

namespace ASZ.Tms.DataAccess
{
    /// <summary>
    /// This class implements the IRoleRepository using the Dapper ORM.
    /// </summary>
    public class DapperRoleRepository : IRoleRepository
    {
        private DbContext dbContext { get; set; }

        public DapperRoleRepository(DbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public void Add(Role Entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Role> Find(Expression<Func<Role, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public void Remove(Role Entity)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// This returns a list of all the Roles in the database. 
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Role> FindAll()
        {
            return this.dbContext.DbConnection.Query<Role>("SELECT RoleID, RoleName FROM UM_Role");
        }
    }
}
