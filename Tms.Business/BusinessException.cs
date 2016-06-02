using System;

namespace ASZ.Tms.Business
{
    public class BusinessException : Exception
    {
        private const int DefaultErrorCode = 400;
        public int ErrorCode { get; set; }
        public bool IsLoggingRequired { get; set; }

        public BusinessException(string message)
            : this(message, DefaultErrorCode, false)
        {

        }

        public BusinessException(string message, bool isLoggingRequired)
            : this(message, DefaultErrorCode, isLoggingRequired)
        {

        }

        public BusinessException(string message, int errorCode)
            : this(message, errorCode, false)
        {

        }

        public BusinessException(string message, int errorCode, bool isLoggingRequired)
            : base(message)
        {
            ErrorCode = errorCode;
            IsLoggingRequired = isLoggingRequired;
        }

        public BusinessException(string message, Exception innerException)
            : this(message, innerException, DefaultErrorCode, false)
        {

        }

        public BusinessException(string message, Exception innerException, bool isLoggingRequired)
            : this(message, innerException, DefaultErrorCode, isLoggingRequired)
        {

        }

        public BusinessException(string message, Exception innerException, int errorCode, bool isLoggingRequired)
            : base(message, innerException)
        {
            ErrorCode = errorCode;
            IsLoggingRequired = isLoggingRequired;
        }

    }
}
