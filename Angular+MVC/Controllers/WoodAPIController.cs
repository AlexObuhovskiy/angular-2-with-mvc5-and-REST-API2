using System;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Angular_MVC.DBContext;

namespace Angular_MVC.Controllers
{
    public class WoodAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            var result = WoodDB.Product.AsEnumerable();
            return ToJson(result);
        }

        public async Task<HttpResponseMessage> Post([FromBody] Product value)
        {
            WoodDB.Product.Add(value);
            var result = await WoodDB.SaveChangesAsync();
            return ToJson(result);
        }

        public HttpResponseMessage Put(int id, [FromBody]Product value)
        {
            WoodDB.Entry(value).State = EntityState.Modified;
            return ToJson(WoodDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            var product = WoodDB.Product.FirstOrDefault(x => x.Id == id);
            if (product == null)
            {
                throw new ArgumentNullException();
            }

            WoodDB.Product.Remove(product);
            return ToJson(WoodDB.SaveChanges());
        }
    }
}