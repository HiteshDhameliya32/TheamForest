using Microsoft.AspNetCore.Mvc;

namespace Light_able.Controllers
{
    public class TableController : Controller
    {
        public IActionResult Basictable()
        {
            return View();
        }
        public IActionResult Sizingtable()
        {
            return View();
        }
        public IActionResult Bordertable()
        {
            return View();
        }
        public IActionResult Stylingtable()
        {
            return View();
        }
    }
}
