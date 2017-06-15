using System.Data.SqlTypes;
using Angular_MVC.DBContext;

namespace Angular_MVC.Models
{
    public class WoodProductViewModel
    {
        public int Id { get; set; }
        public int? Type { get; set; }
        public int? WoodType { get; set; }
        public float? Length { get; set; }
        public int? Width { get; set; }
        public float? Price { get; set; }

        public WoodProductViewModel(Product product)
        {
            Id = product.Id;
            Type = product.Type;
            WoodType = product.WoodType;
            Length = product.Length;
            Width = product.Width;
            Price = product.Price;
        }

        /// <summary>
        /// Type of product as string
        /// </summary>
        public string TypeAsString
        {
            get
            {
                if (!Type.HasValue)
                {
                    throw new SqlNullValueException(Type.ToString());
                }

                switch (Type.Value)
                {
                    case (int)ProductTypeAsInteger.Platbands:
                        return Properties.Resources.ProductType_Platbands;
                    case (int)ProductTypeAsInteger.Plinth:
                        return Properties.Resources.ProductType_Plinth;
                    case (int)ProductTypeAsInteger.Lining:
                        return Properties.Resources.ProductType_Lining;
                    case (int)ProductTypeAsInteger.Bead:
                        return Properties.Resources.ProductType_Bead;
                    default:
                        return Properties.Resources.Unknown_Type;
                }
            }
        }

        public string WoodTypeAsString
        {
            get
            {
                if (!WoodType.HasValue)
                {
                    throw new SqlNullValueException(WoodType.ToString());
                }

                switch (WoodType.Value)
                {
                    case (int)WoodTypeAsInteger.Oak:
                        return Properties.Resources.WoodType_Oak;
                    case (int)WoodTypeAsInteger.Ash:
                        return Properties.Resources.WoodType_Ash;
                    case (int)WoodTypeAsInteger.Pine:
                        return Properties.Resources.WoodType_Pine;
                    case (int)WoodTypeAsInteger.Aspen:
                        return Properties.Resources.WoodType_Aspen;
                    case (int)WoodTypeAsInteger.Linden:
                        return Properties.Resources.WoodType_Linden;
                    case (int)WoodTypeAsInteger.Alder:
                        return Properties.Resources.WoodType_Alder;
                    default:
                        return Properties.Resources.Unknown_Type;
                }
            }
        }
    }

    /// <summary>
    /// Product type
    /// </summary>
    public enum ProductTypeAsInteger
    {
        Platbands, //Налічник
        Plinth, // Плінтус
        Lining, // Вагонка
        Bead, // Штапік
    }

    /// <summary>
    /// Type of wood
    /// </summary>
    public enum WoodTypeAsInteger
    {
        Oak, // Дуб
        Ash, // Ясен
        Pine, // Сосна
        Aspen, // Осика
        Linden, // Липа
        Alder // Вільха
    }
}