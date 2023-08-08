using Microsoft.AspNetCore.Mvc;

namespace Sliced.Controllers
{
    public class LayoutController : Controller
    {
        public IActionResult Creative()
        {
            return View();
        }

        public IActionResult Detached()
        {
            return View();
        }
    }
}
