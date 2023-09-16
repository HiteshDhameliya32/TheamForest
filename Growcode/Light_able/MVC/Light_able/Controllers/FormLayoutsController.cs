using Microsoft.AspNetCore.Mvc;

namespace Light_able.Controllers
{
    public class FormLayoutsController : Controller
    {
        public IActionResult FormLayout()
        {
            return View();
        }
        public IActionResult Multicolumn()
        {
            return View();
        }
        public IActionResult Actionbars()
        {
            return View();
        }
        public IActionResult StickyActionbars()
        {
            return View();
        }
    }
}
