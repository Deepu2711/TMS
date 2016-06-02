using System;
using System.Text;
using System.Web.Mvc;
using Tms.Common.Logging;
using ASZ.Tms.Business;
using ASZ.Tms.Model;
using ASZ.Tms.Web.Models;

namespace ASZ.Tms.Web.Controllers
{
    public class BaseController : Controller
    {
        public User LoginUser = new User();

        protected override IAsyncResult BeginExecuteCore(AsyncCallback callback, object state)
        {
            LoginUser = Session["user"] as User;

            return base.BeginExecuteCore(callback, state);
        }

        protected override JsonResult Json(object data, string contentType, Encoding contentEncoding, JsonRequestBehavior behavior)
        {
            return new JsonNetResult
            {
                Data = data,
                ContentType = contentType,
                ContentEncoding = contentEncoding,
                JsonRequestBehavior = behavior
            };
        }

        public ActionResult AuthorizeUser(LoginCredentials loginCredentials)
        {
            var isAuthenticatedUser = false;
            try
            {
                var loginUser = UsersManager.GetUser(loginCredentials.LoginId);

                if (loginUser != null && loginUser.IsActive && loginUser.Password == loginCredentials.Password)
                {
                    isAuthenticatedUser = true;
                }

                if (isAuthenticatedUser)
                {
                    Session.Add("user", loginUser);
                    Logger.WriteTrace("User Logged in - " + loginUser.Name, LoggingCategories.DashboardTrace);
                    ViewBag.LoginUser = loginUser;
                    return View("~/Views/Home/Home.cshtml", loginUser);
                }
                else
                {
                    return View("Unauthorised");
                }
            }
            catch (Exception ex)
            {
                Logger.WriteException(ex, LoggingCategories.DashboardError);
                return View("Error", loginCredentials);
            }
        }
    }
}
