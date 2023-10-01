using Microsoft.AspNetCore.Mvc;

namespace Light_able.Controllers
{
    public class PagesController : Controller
    {
        #region Authentication1
        public IActionResult Login1()
        {
            return View();
        }
        public IActionResult Register1()
        {
            return View();
        }
        public IActionResult ForgotPassword1()
        {
            return View();
        }
        public IActionResult ResetPassword1()
        {
            return View();
        }
        public IActionResult CodeVerification1()
        {
            return View();
        }

        #endregion

        #region Authentication2
        public IActionResult Login2()
        {
            return View();
        }
        public IActionResult Register2()
        {
            return View();
        }
        public IActionResult ForgotPassword2()
        {
            return View();
        }
        public IActionResult ResetPassword2()
        {
            return View();
        }
        public IActionResult CodeVerification2()
        {
            return View();
        }

        #endregion

        #region Maintenance
        public IActionResult Error404()
        {
            return View();
        }
        public IActionResult ConnectionLost()
        {
            return View();
        }
        public IActionResult UnderConstruction()
        {
            return View();
        }
        public IActionResult ComingSoon()
        {
            return View();
        }
        #endregion

        public IActionResult Landing()
        {
            return View();
        }
    }
}
