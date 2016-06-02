using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASZ.Tms.Web.Controllers
{
    public class PermissionsController : Controller
    {
        // GET: Permissions
        public ActionResult PermissionsList()
        {
            return View();
        }
    }
}