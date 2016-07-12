using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tms.Entities
{
    /// <summary>
    /// This class represents a Permission.
    /// </summary>
    public class Permission
    {
        /// <summary>
        /// This is the Permission ID. 
        /// </summary>
        public int PermissionID { get; set; }

        /// <summary>
        /// This is the ScreenID. 
        /// </summary>
        public int ScreenID { get; set; }

        /// <summary>
        /// This is the Screen Name. 
        /// </summary>
        public string ScreenName { get; set; }

        /// <summary>
        /// This is the Id of the Module with which the Screen is associated. 
        /// </summary>
        public int ModuleID { get; set; }

        /// <summary>
        /// This is the name of the Module with the Screen is associated.
        /// </summary>
        public string ModuleName { get; set; }

        /// <summary>
        /// This is the ID of the Permission Type. 
        /// </summary>
        public int PermissionTypeID { get; set; }

        /// <summary>
        /// This is the short name of the Permission. 
        /// </summary>
        public string PermissionShortName { get; set; }

        /// <summary>
        /// This is the type of the Permission. 
        /// </summary>
        public string PermissionType { get; set; }
    }
}
