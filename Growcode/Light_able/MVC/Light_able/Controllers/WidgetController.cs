using Microsoft.AspNetCore.Mvc;

namespace Light_able.Controllers
{
    public class WidgetController : Controller
    {
        public IActionResult Statistics()
        {
            return View();
        }
        public IActionResult User()
        {
            return View();
        }
        public IActionResult Data()
        {
            return View();
        }
        public IActionResult Chart()
        {
            return View();
        }
    }
}
