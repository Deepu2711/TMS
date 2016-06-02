using System.Net;
using System.Web.Mvc;
using Tms.Common.Logging;
using ASZ.Tms.Business;
using ASZ.Tms.Web.Models;

namespace Tenr.Fms.Web.Filters
{
    public class GlobalErrorHandlerFilterAttribute : HandleErrorAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            if (context.Exception is BusinessException)
            {
                var businessException = context.Exception as BusinessException;
                if (businessException != null)
                {
                    if (businessException.IsLoggingRequired)
                    {
                        Logger.WriteException(context.Exception, LoggingCategories.DashboardError);
                    }

                    context.Result = new JsonResult
                    {
                        JsonRequestBehavior = JsonRequestBehavior.AllowGet,
                        Data = new
                        {
                            Message = context.Exception.Message,
                            ErrorType = ErrorType.BusinessValidation
                        }
                    };
                }
            }
            else
            {
                context.Result = new JsonResult
                {
                    JsonRequestBehavior = JsonRequestBehavior.AllowGet,
                    Data = new
                    {
                        Message = context.Exception.Message,
                        ErrorType = ErrorType.Unhandled
                    }
                };

                Logger.WriteException(context.Exception, LoggingCategories.DashboardError);

            }

            context.ExceptionHandled = true;
            context.HttpContext.Response.Clear();
            context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            context.HttpContext.Response.TrySkipIisCustomErrors = true;

        }
    }
}
