using Microsoft.AspNetCore.Mvc;

namespace Landik.Controllers
{
    public class DocsController : Controller
    {
        public IActionResult Documentation()
        {
            return View();
        }
        public IActionResult ChangeLog()
        {
            return View();
        }
    }
}
