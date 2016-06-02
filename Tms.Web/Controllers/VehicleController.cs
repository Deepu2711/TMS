using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASZ.Tms.Web.Controllers
{
    public class VehicleController : Controller
    {
        // GET: Vehicle
        public ActionResult VehicleList()
        {
            return View();
        }
    }
}