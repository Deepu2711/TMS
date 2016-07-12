using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;

namespace ASZ.Tms.Web.Helpers
{
    public class WebAPIHelper
    {
        private string url = "";
        HttpClient client = null;

        /// <summary>
        /// Initialize root url
        /// </summary>
        /// <param name="url"></param>
        public WebAPIHelper(string url)
        {
            this.url = url;

            client = new HttpClient();
            client.BaseAddress = new Uri(url);
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json")); 
        }

        /// <summary>
        /// Method to get list of entities from database
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        public async Task<string> Get(string url = "")
        {
            HttpResponseMessage responseMessage = await client.GetAsync(url);

            if (responseMessage!=null && responseMessage.IsSuccessStatusCode)
            {
                var responseData = responseMessage.Content.ReadAsStringAsync().Result;

                responseData = responseData.TrimStart('\"');
                responseData = responseData.TrimEnd('\"');
                responseData = responseData.Replace("\\", "");
                return responseData;
            }

            return string.Empty;
            
        }

        /// <summary>
        /// Method to create new entity
        /// </summary>
        /// <param name="jsondata"></param>
        /// <param name="url"></param>
        /// <returns></returns>
        public async Task<bool> Post(string jsondata, string url)
        {
            HttpContent content = new StringContent(jsondata);
            content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

            HttpResponseMessage responseMessage = await client.PostAsync(url, content); ;

            if (responseMessage != null && responseMessage.IsSuccessStatusCode)
                return true;
            else
                return false;
        }

        /// <summary>
        /// Method to update entity 
        /// </summary>
        /// <param name="jsondata"></param>
        /// <param name="url"></param>
        /// <returns></returns>
        public async Task<bool> Put(string jsondata, string url)
        {
            HttpContent content = new StringContent(jsondata);
            content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

            HttpResponseMessage responseMessage = await client.PutAsync(url, content);

            if (responseMessage != null && responseMessage.IsSuccessStatusCode)
                return true;
            else
                return false;
        }

        /// <summary>
        /// Method to delete entity
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        public async Task<bool> Delete(string url)
        {
            HttpResponseMessage responseMessage = await client.DeleteAsync(url);

            if (responseMessage != null && responseMessage.IsSuccessStatusCode)
                return true;
            else
                return false;
        }


    }
}