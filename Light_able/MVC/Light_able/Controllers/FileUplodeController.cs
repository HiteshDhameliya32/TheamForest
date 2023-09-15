using Microsoft.AspNetCore.Mvc;

namespace Light_able.Controllers
{
    public class FileUplodeController : Controller
    {
        public IActionResult Dropzone()
        {
            return View();
        } public IActionResult Uppy()
        {
            return View();
        }
    }
}
