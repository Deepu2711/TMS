using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tms.DbContext
{
    /// <summary>
    /// This class contains the Db Context. In its present avatar it will only contain
    /// a single property: the connection string. Maybe, we can have it evolve into something 
    /// more like the EF Db Context. This class, or any of its subclasses  will be injected 
    /// into the Repository by the client.
    /// </summary>
    public class DbContext
    {
        /// <summary>
        /// This is the connection string to the Database. 
        /// </summary>
        public string ConnectionString { get; set; }

        /// <summary>
        /// This is the IDbConnection object the repository expects. 
        /// </summary>
        public IDbConnection DbConnection { get; set; }

        /// <summary>
        /// This is the constructor that instantiates the IDbConnection object. 
        /// This implementation instantiates a SqlConnection. 
        /// </summary>
        public DbContext()
        {
            DbConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["SqlConnection"].ConnectionString);
        }
    }
}
