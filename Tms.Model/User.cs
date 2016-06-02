
namespace ASZ.Tms.Model
{
    public class User
    {
        public int UserId { get; set; }
        public string LoginId { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public int RoleId { get; set; }
        public bool IsActive { get; set; }
    }
}
