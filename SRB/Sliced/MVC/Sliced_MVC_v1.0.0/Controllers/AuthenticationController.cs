using Microsoft.AspNetCore.Mvc;

namespace Sliced.Controllers
{
    public class AuthenticationController : Controller
    {
        public IActionResult SignIn()
        {
            return View();
        }

        public IActionResult SignUp()
        {
            return View();
        }

        public IActionResult ResetPassword()
        {
            return View();
        }


    }
}
