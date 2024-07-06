import React, { createContext, useContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([
    {
      name: "Laptop HP Pavilion",
      description:
        "Laptop HP Pavilion con procesador Intel Core i7, 16GB de RAM y 512GB SSD.",
      image_url:
        "https://imgs.search.brave.com/pV4FtkK4EAziJ9OAM-2lKOUEGXqOogSlZIRwllByE6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWxh/YmVsbGEuc2NlbmU3/LmNvbS9pcy9pbWFn/ZS9GYWxhYmVsbGEv/MTQ0NDkyODBfMT93/aWQ9ODAwJmhlaT04/MDAmcWx0PTcw",
      price: 899.99,
      stock_quantity: 0,
    },
    {
      name: "Smartphone Samsung Galaxy S21",
      description:
        "Smartphone Samsung Galaxy S21 con 128GB de almacenamiento y cámara de 108MP.",
      image_url:
        "https://m.media-amazon.com/images/I/61kLsk8RslL._AC_SX679_.jpg",
      price: 799.99,
      stock_quantity: 15,
    },
    {
      name: "Auriculares Sony WH-1000XM4",
      description:
        "Auriculares inalámbricos Sony con cancelación de ruido y hasta 30 horas de batería.",
      image_url:
        "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
      price: 349.99,
      stock_quantity: 20,
    },
    {
      name: "Televisor LG OLED55CXPUA",
      description:
        "Televisor LG OLED de 55 pulgadas con resolución 4K y soporte HDR.",
      image_url:
        "https://m.media-amazon.com/images/I/A1XUyEzt9BL._AC_SX679_.jpg",
      price: 1299.99,
      stock_quantity: 0,
    },
    {
      name: "Tablet Apple iPad Pro",
      description:
        "Tablet Apple iPad Pro de 12.9 pulgadas con 256GB de almacenamiento y soporte para Apple Pencil.",
      image_url:
        "https://m.media-amazon.com/images/I/61IsQRFoxJL.__AC_SY445_SX342_QL70_FMwebp_.jpg",
      price: 999.99,
      stock_quantity: 12,
    },
    {
      name: "Cámara Canon EOS R5",
      description:
        "Cámara mirrorless Canon EOS R5 con sensor de 45MP y grabación de video en 8K.",
      image_url:
        "https://m.media-amazon.com/images/I/71hpUUcC5uL._AC_SX569_.jpg",
      price: 3899.99,
      stock_quantity: 3,
    },
    {
      name: "Reloj Inteligente Apple Watch Series 6",
      description:
        "Reloj inteligente Apple Watch con monitor de oxígeno en sangre y pantalla siempre activa.",
      image_url:
        "https://m.media-amazon.com/images/I/71K+hTswAyL._AC_SY300_SX300_.jpg",
      price: 429.99,
      stock_quantity: 25,
    },
    {
      name: "Consola PlayStation 5",
      description:
        "Consola PlayStation 5 con lector de discos y almacenamiento de 825GB SSD.",
      image_url: "https://m.media-amazon.com/images/I/61Lp5LfK9uL._SX522_.jpg",
      price: 499.99,
      stock_quantity: 8,
    },
    {
      name: "Ratón Logitech MX Master 3",
      description:
        "Ratón inalámbrico Logitech MX Master 3 con sensor de 4000 DPI y diseño ergonómico.",
      image_url:
        "https://m.media-amazon.com/images/I/61IbnS-QcxL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: 99.99,
      stock_quantity: 30,
    },
    {
      name: "Monitor Dell UltraSharp",
      description:
        "Monitor Dell UltraSharp de 27 pulgadas con resolución 4K y panel IPS.",
      image_url:
        "https://m.media-amazon.com/images/I/A1Iqr2v1SIL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: 599.99,
      stock_quantity: 18,
    },
    {
      name: "Altavoz Bluetooth JBL Charge 4",
      description:
        "Altavoz Bluetooth JBL Charge 4 con sonido potente y resistencia al agua IPX7.",
      image_url:
        "https://m.media-amazon.com/images/I/61ZquNpiFcL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: 149.99,
      stock_quantity: 0,
    },
    {
      name: "Impresora HP OfficeJet Pro",
      description:
        "Impresora multifunción HP OfficeJet Pro con conectividad inalámbrica y velocidad de impresión rápida.",
      image_url:
        "https://m.media-amazon.com/images/I/61MWrNOSXTL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: 199.99,
      stock_quantity: 10,
    },
    {
      name: "Mochila para Portátil Samsonite",
      description:
        "Mochila para portátil Samsonite con compartimentos organizadores y diseño ergonómico.",
      image_url:
        "https://m.media-amazon.com/images/I/91msy9SaTpL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: 89.99,
      stock_quantity: 40,
    },
    {
      name: "Disco Duro Externo Seagate",
      description:
        "Disco duro externo Seagate de 2TB con conectividad USB 3.0 y diseño compacto.",
      image_url:
        "https://m.media-amazon.com/images/I/81o5zJ+FcPL._AC_SX425_.jpg",
      price: 79.99,
      stock_quantity: 35,
    },
    {
      name: "Teclado Mecánico Corsair K95",
      description:
        "Teclado mecánico Corsair K95 RGB con interruptores Cherry MX y retroiluminación personalizable.",
      image_url:
        "https://m.media-amazon.com/images/I/61Yupm5970L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: 199.99,
      stock_quantity: 0,
    },
    {
      name: "Cámara de Seguridad Nest Cam",
      description:
        "Cámara de seguridad Nest Cam con resolución 1080p y visión nocturna.",
      image_url:
        "https://m.media-amazon.com/images/I/31R2Cj5T-2L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: 129.99,
      stock_quantity: 20,
    },
    {
      name: "Smart TV Samsung QLED",
      description:
        "Smart TV Samsung QLED de 65 pulgadas con resolución 4K y tecnología Quantum Dot.",
      image_url:
        "https://m.media-amazon.com/images/I/81ScYVlvRPL._AC_UY218_.jpg",
      price: 1499.99,
      stock_quantity: 7,
    },
    {
      name: "Auriculares Bose QuietComfort 35 II",
      description:
        "Auriculares inalámbricos Bose con cancelación de ruido y hasta 20 horas de batería.",
      image_url:
        "https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_UY218_.jpg",
      price: 299.99,
      stock_quantity: 25,
    },
    {
      name: "Cafetera Nespresso Vertuo",
      description:
        "Cafetera Nespresso Vertuo con sistema de cápsulas y función de autoapagado.",
      image_url:
        "https://m.media-amazon.com/images/I/71xnpSSiZdL._AC_UL320_.jpg",
      price: 159.99,
      stock_quantity: 18,
    },
    {
      name: "Lector de products Kindle Paperwhite",
      description:
        "Lector de products Kindle Paperwhite con pantalla de alta resolución y resistencia al agua.",
      image_url:
        "https://m.media-amazon.com/images/I/71NRkZ933lL._AC_UY218_.jpg",
      price: 129.99,
      stock_quantity: 28,
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (selectedFilter === 0) {
      return matchesSearchTerm;
    } else if (selectedFilter === 1) {
      return matchesSearchTerm;
    } else if (selectedFilter === 2) {
      return matchesSearchTerm;
    } else {
      return false;
    }
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedFilter === 1) {
      return a.price - b.price;
    } else if (selectedFilter === 2) {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  // Some handles

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const handleAddProduct = () => {
    console.log("new product");
    ToggleShowProduct();
  };

  const ToggleShowProduct = () => {
    setShowAddProduct((prev) => !prev);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleConfirmDelete = () => {
    setIsDeleting(false);
  };

  const handleCancelDelete = () => {
    setIsDeleting(false);
  };

  // API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  const addProduct = async (newProduct) => {
    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      if (response.ok) {
        fetchProducts();
      } else {
        console.error("Error adding product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      if (response.ok) {
        fetchProducts();
      } else {
        console.error("Error updating product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchProducts();
      } else {
        console.error("Error deleting product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  const contextValues = {
    products,
    loading,
    addProduct,
    updateProduct,
    deleteProduct,
    handleSearch,
    handleFilterChange,
    sortedProducts,
    handleAddProduct,
    showAddProduct,
    ToggleShowProduct,
    isEditing,
    setIsEditing,
    isDeleting,
    setIsDeleting,
    currentProduct,
    setCurrentProduct,
    handleCancelEdit,
    handleConfirmDelete,
    handleCancelDelete,
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  );
};
