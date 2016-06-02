using Microsoft.Practices.EnterpriseLibrary.Common.Configuration;
using Microsoft.Practices.EnterpriseLibrary.Logging;
using System;
using System.Collections.Generic;
using EL = Microsoft.Practices.EnterpriseLibrary.Logging;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tms.Common.Logging
{
    public static class Logger
    {
        static Logger()
        {
            var configurationSource = ConfigurationSourceFactory.Create();
            var logWriterFactory = new LogWriterFactory(configurationSource);
            EL.Logger.SetLogWriter(logWriterFactory.Create());
        }

        public static void WriteTrace(string message, string category)
        {
            var logEntry = new LogEntry
            {
                Message = message,
                Severity = System.Diagnostics.TraceEventType.Information,
                Categories = new List<string> { category }
            };
            EL.Logger.Write(logEntry);
        }

        public static void WriteException(Exception ex, string category)
        {
            var logEntry = new LogEntry
            {
                Message = ex.ToString(),
                Severity = System.Diagnostics.TraceEventType.Error,
                Categories = new List<string> { category }
            };
            EL.Logger.Write(logEntry);
        }
    }
}
