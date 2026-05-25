namespace Core.Entities
{
    public abstract class BaseEntitiy
    {
        public Guid Id { get; set; }
        protected BaseEntitiy()
    {
        Id = Guid.NewGuid();
    }

    }
}