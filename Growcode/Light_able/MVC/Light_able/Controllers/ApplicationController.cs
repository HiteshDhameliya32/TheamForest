using Microsoft.AspNetCore.Mvc;

namespace Light_able.Controllers
{
    public class ApplicationController : Controller
    {
        #region Application
        public IActionResult calendar()
        {
            return View();
        }
        public IActionResult chat()
        {
            return View();
        }
        public IActionResult gallery()
        {
            return View();
        }
        public IActionResult mail()
        {
            return View();
        }

        #endregion


        #region E-commerce
        public IActionResult Product()
        {
            return View();
        }
        public IActionResult Productdetails()
        {
            return View();
        }
        public IActionResult ProductList()
        {
            return View();
        }
        public IActionResult AddNewProduct()
        {
            return View();
        }
        public IActionResult Checkout()
        {
            return View();
        }
        #endregion

        #region Users
        public IActionResult AccountProfile()
        {
            return View();
        }
        public IActionResult SocialMedia()
        {
            return View();
        }
        public IActionResult UserCard()
        {
            return View();
        }
        public IActionResult UserList()
        {
            return View();
        }

        #endregion

        #region Invoice
        public IActionResult InvoiceList()
        {
            return View();
        }
        public IActionResult Create()
        {
            return View();
        }
        public IActionResult Preview()
        {
            return View();
        }

        #endregion
    }
}
