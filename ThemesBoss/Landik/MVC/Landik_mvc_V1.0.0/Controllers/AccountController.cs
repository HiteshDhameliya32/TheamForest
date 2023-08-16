using Microsoft.AspNetCore.Mvc;

namespace Landik.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }public IActionResult Register()
        {
            return View();
        }public IActionResult PasswordReset()
        {
            return View();
        }
    }
}
