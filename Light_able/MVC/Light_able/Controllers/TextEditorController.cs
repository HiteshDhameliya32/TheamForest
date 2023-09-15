using Microsoft.AspNetCore.Mvc;

namespace Light_able.Controllers
{
    public class TextEditorController : Controller
    {
        public IActionResult Tinymce()
        {
            return View();
        }


        public IActionResult classic()
        {
            return View();
        }
        public IActionResult Document()
        {
            return View();
        }
        public IActionResult Inline()
        {
            return View();
        }
        public IActionResult Balloon()
        {
            return View();
        }
        public IActionResult Quill()
        {
            return View();
        } public IActionResult Markdown()
        {
            return View();
        }
    }
}
