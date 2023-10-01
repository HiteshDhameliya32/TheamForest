using Microsoft.AspNetCore.Mvc;

namespace Light_able.Controllers
{
    public class ChartsController : Controller
    {
        public IActionResult ApexCharts()
        {
            return View();
        }public IActionResult VectorMap()
        {
            return View();
        }
    }
}
