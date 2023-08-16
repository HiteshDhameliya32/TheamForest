using Microsoft.AspNetCore.Mvc;

namespace Sliced.Controllers
{
    public class TablesController : Controller
    {
        public IActionResult Basic()
        {
            return View();
        }

        public IActionResult DataTables()
        {
            return View();
        }

        public IActionResult Editable()
        {
            return View();
        }


    }
}
