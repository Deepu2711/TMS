using ASZ.Tms.Web.Helpers;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Tms.Entities;

namespace ASZ.Tms.Web.Controllers
{
    public class UserController : Controller
    {
        //This needs to be resolved using dependency Injection. 
        string url = "http://localhost:20712/api/";
        WebAPIHelper webapihelper = null;

        public UserController()
        {
            webapihelper = new WebAPIHelper(url);
        }

        // GET: User
        [HttpGet]
        public async Task<ActionResult> UsersList()
        {
            string responseData = Convert.ToString(await webapihelper.Get(url + "User"));

            if (!string.IsNullOrEmpty(responseData))
            {
                var users = JsonConvert.DeserializeObject<List<User>>(responseData);
                return View(users);
            }

            return View("Error");

        }

        /// <summary>
        /// This method is used to call empty edit view
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Create()
        {
            return View("Edit", new User());
        }

        /// <summary>
        /// This method is used to update existing user.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult> Edit(string id)
        {
            string responseData = Convert.ToString(await webapihelper.Get(url + "User\\" + id));

            if (!string.IsNullOrEmpty(responseData))
            {
                var users = JsonConvert.DeserializeObject<List<User>>(responseData);
                return View("Edit", users[0]);
            }

            return View("Error");

        }

        /// <summary>
        /// this is used to save and update 
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult> Save(User user)
        {
            bool success;

            string json = JsonConvert.SerializeObject(user);

            if (user.UserID == 0)
                success = Convert.ToBoolean(await webapihelper.Post(json, url + "User"));
            else
                success = Convert.ToBoolean(await webapihelper.Put(json, url + "User\\" + user.EmployeeID));

            if (success)
                return RedirectToAction("UsersList");

            return View("Error");


        }

        /// <summary>
        /// This method is used to delete the employee
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<ActionResult> Delete(string id)
        {
            bool success = Convert.ToBoolean(await webapihelper.Delete(url + "User\\" + id));
            if (success)
                return RedirectToAction("UsersList");

            return View("Error");

        }
    }
}