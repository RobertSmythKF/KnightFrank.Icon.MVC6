using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace KnightFrank.Icon.MVC6.Web.Controllers
{
    public class AppController : Controller
    {
        // This change will fix everything...


        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
