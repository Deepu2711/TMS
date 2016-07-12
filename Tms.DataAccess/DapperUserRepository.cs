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
using System.Data;

namespace ASZ.Tms.DataAccess
{
    /// <summary>
    /// This class implements the IRoleRepository using the Dapper ORM.
    /// </summary>
    public class DapperUserRepository : IUserRepository
    {
        private DbContext dbContext { get; set; }

        public DapperUserRepository(DbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        /// <summary>
        /// This returns a list of all the Roles in the database. 
        /// </summary>
        /// <returns></returns>
        public IEnumerable<User> FindAll()
        {
            return this.dbContext.DbConnection.Query<User>("SELECT UserID,EmployeeID, FullName, emailid, mobile, dob FROM UM_User");
        }

        /// <summary>
        /// This menthid creates new user
        /// </summary>
        /// <param name="user"></param>
        public void Add(User user)
        {
            try
            {
                user.UserID = 10;
                IDbConnection connection = this.dbContext.DbConnection;
                String query = "INSERT INTO UM_User (UserID,EmployeeID,FullName,emailid,mobile) VALUES(@UserID,@EmployeeID,@FullName,@emailid,@mobile)";
                connection.Execute(query, user);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        /// <summary>
        /// This method updated the details of exiting user
        /// </summary>
        /// <param name="user"></param>
        public void Update(User user)
        {
            try
            {
                IDbConnection connection = this.dbContext.DbConnection;
                const string query = "UPDATE UM_User SET FullName = @FullName, emailid = @emailid, mobile = @mobile WHERE EmployeeID = @EmployeeID";
                connection.Execute(query, user);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        /// <summary>
        /// This method removes user
        /// </summary>
        /// <param name="id"></param>
        public void Remove(string id)
        {
            try
            {
                IDbConnection connection = this.dbContext.DbConnection;
                const string query = "Delete from UM_User where EmployeeID = @EmployeeID";
                connection.Execute(query, new { EmployeeID = id });
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        /// <summary>
        /// This method is used to find specific user based on user id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public IEnumerable<User> Find(string id)
        {
            IEnumerable<User> user = FindAll().Where(p => p.EmployeeID == id);
            return user;
        }

        /// <summary>
        /// This method is used to find specific user
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public IEnumerable<User> Find(Expression<Func<User, bool>> predicate)
        {
            return null;
        }

        public void Remove(User Entity)
        {
            throw new NotImplementedException();
        }
    }
}
