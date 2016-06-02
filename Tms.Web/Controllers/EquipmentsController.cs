using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASZ.Tms.Web.Controllers
{
    public class EquipmentsController : Controller
    {
        // GET: Equipments
        public ActionResult EquipmentsList()
        {
            return View();
        }
    }
}