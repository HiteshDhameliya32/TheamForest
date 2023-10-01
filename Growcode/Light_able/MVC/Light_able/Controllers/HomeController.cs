using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Light_able.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult SamplePage()
        {
            return View();
        }
        public IActionResult Preview()
        {
            return View();
        }
    }
}