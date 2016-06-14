using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tms.Entities
{
    /// <summary>
    /// This class represents a User.
    /// </summary>
    public class User
    {
        /// <summary>
        /// This is the User Id. 
        /// </summary>
        public int UserID { get; set; }
        /// <summary>
        /// This is the Employee Id. 
        /// </summary>
        public string EmployeeID { get; set; }

        /// <summary>
        /// This is the User's Full name. 
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// This is the User's password.
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// This is the User's mobile. 
        /// </summary>
        public string mobile { get; set; }

        /// <summary>
        /// This is the User's date of birth. 
        /// </summary>
        public DateTime dob { get; set; }

        /// <summary>
        /// This is the User's registration/joining date into the system.
        /// </summary>
        public DateTime RegDate { get; set; }

        /// <summary>
        /// This is the last date/time the User was active on the system. 
        /// </summary>
        public DateTime LastActiveDate { get; set; }
        /// <summary>
        /// This is User's Role Id. 
        /// </summary>
        public int RoleId { get; set; }
        public bool IsActive { get; set; }
    }
}
