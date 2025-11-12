using Microsoft.AspNetCore.Mvc;

namespace erfoundation.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
