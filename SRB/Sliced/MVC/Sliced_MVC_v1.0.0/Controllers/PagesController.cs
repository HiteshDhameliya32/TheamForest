using Microsoft.AspNetCore.Mvc;

namespace Sliced.Controllers
{
    public class PagesController : Controller
    {
        public IActionResult StarterPage()
        {
            return View();
        }

        public IActionResult Maintenance()
        {
            return View();
        }

        public IActionResult ComingSoon()
        {
            return View();
        }

        [ActionName("404")]
        public IActionResult _404()
        {
            return View();
        }

        [ActionName("500")]
        public IActionResult _500()
        {
            return View();
        }

        [ActionName("503")]
        public IActionResult _503()
        {
            return View();
        }


    }
}
