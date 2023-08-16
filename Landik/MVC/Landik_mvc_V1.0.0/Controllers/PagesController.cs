using Microsoft.AspNetCore.Mvc;

namespace Landik.Controllers
{
    public class PagesController : Controller
    {
        public IActionResult About()
        {
            return View();
        }
        public IActionResult Service()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }
        public IActionResult Pricing()
        {
            return View();
        }
        public IActionResult Testimonial()
        {
            return View();
        }
        public IActionResult FAQs()
        {
            return View();
        }
    }
}
