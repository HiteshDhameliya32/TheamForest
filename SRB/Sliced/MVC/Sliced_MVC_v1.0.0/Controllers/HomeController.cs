using Microsoft.AspNetCore.Mvc;
using Sliced.Models;
using System.Diagnostics;

namespace Sliced.Controllers
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
        public IActionResult Chart()
        {
            return View();
        }

        public IActionResult FontIcons()
        {
            return View();
        }

        public IActionResult DragAndDrop()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}