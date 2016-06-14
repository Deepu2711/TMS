using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Tms.RepositoryContracts
{
    /// <summary>
    /// This is a Generic repository for all Entities
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IRepository<T>
    {
        /// <summary>
        /// This Operation Contract adds or updates an Entity.
        /// </summary>
        /// <param name="Entity"></param>
        void Add(T Entity);

        /// <summary>
        /// This Operation Contract deletes an Entity.
        /// </summary>
        /// <param name="Entity"></param>
        void Remove(T Entity);

        /// <summary>
        /// This returns a collection of all the instances of the entity.
        /// </summary>
        /// <returns></returns>
        IEnumerable<T> FindAll();

        /// <summary>
        /// This Operation Contract finds an Entity based on the search clause.
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        IEnumerable<T> Find(Expression<Func<T, bool>> predicate);
    }
}
