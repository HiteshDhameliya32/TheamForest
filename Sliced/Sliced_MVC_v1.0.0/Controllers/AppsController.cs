using Microsoft.AspNetCore.Mvc;

namespace Sliced.Controllers
{
    public class AppsController : Controller
    {
        public IActionResult Email()
        {
            return View();
        }

        public IActionResult chat()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult Invoice()
        {
            return View();
        }
    }
}
