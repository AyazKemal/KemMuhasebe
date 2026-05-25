using Core.Entities;

namespace Core.Interfaces;

public interface IProductRepository
{
    Task<IReadOnlyList<Product>> GetProductsAsync(string? brand, string? type, string? sort);
    Task<IReadOnlyList<string>> GetBrandsAsync();    
    Task<IReadOnlyList<string>> GetTypesAsync();    
    Task<Product?> GetProductByIdAsync(Guid id);
    void AddProduct(Product product);
    void UpdateProduct(Product product);
    void DeleteProduct(Product product);
    bool ProductExists(Guid id);
    Task<bool> SaveChangesAsync();
}