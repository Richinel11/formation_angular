using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class dbConn : DbContext
    {
        public dbConn(DbContextOptions<dbConn> options) : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<Product> Products => Set<Product>();
    }
}
