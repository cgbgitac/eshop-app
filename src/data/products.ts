import { Product } from '@/types/product'

export const products: Product[] = [
  // Electronics
  {
    id: 1,
    name: "4K Ultra HD Smart TV",
    description: "Experience stunning visuals with our 4K Ultra HD Smart TV. Featuring HDR technology, smart connectivity, and a sleek design that enhances any living space.",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800"
    ],
    category: "Electronics",
    rating: 4.8,
    stock: 15,
    brand: "TechVision",
    features: [
      "4K Ultra HD Resolution",
      "Smart TV Capabilities",
      "HDR Technology",
      "Multiple HDMI Ports",
      "Built-in WiFi"
    ],
    isFeatured: true
  },
  {
    id: 2,
    name: "Wireless Noise-Canceling Headphones",
    description: "Immerse yourself in your music with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and crystal-clear sound quality.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800"
    ],
    category: "Electronics",
    rating: 4.6,
    stock: 20,
    brand: "SoundMaster",
    features: [
      "Active Noise Cancellation",
      "30-hour Battery Life",
      "Bluetooth 5.0",
      "Built-in Microphone",
      "Comfortable Design"
    ]
  },

  // Fashion
  {
    id: 21,
    name: "Classic Leather Watch",
    description: "Elegant leather strap watch with analog display",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500",
    category: "Fashion",
    rating: 4.6,
    stock: 30,
    brand: "TimeStyle",
    isNew: true
  },
  {
    id: 22,
    name: "Designer Sunglasses",
    description: "UV protection sunglasses with polarized lenses",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    category: "Fashion",
    rating: 4.4,
    stock: 20,
    brand: "VisionElite"
  },

  // Books
  {
    id: 31,
    name: "The Art of Programming",
    description: "Comprehensive guide to modern programming practices",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500",
    category: "Books",
    rating: 4.9,
    stock: 50,
    brand: "TechPress",
    isFeatured: true
  },
  {
    id: 32,
    name: "Business Strategy Guide",
    description: "Essential reading for modern business leaders",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500",
    category: "Books",
    rating: 4.7,
    stock: 40,
    brand: "BizBooks"
  },

  // Home & Kitchen
  {
    id: 41,
    name: "Smart Coffee Maker",
    description: "WiFi-enabled coffee maker with mobile app control",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
    category: "Home & Kitchen",
    rating: 4.6,
    stock: 25,
    brand: "SmartHome",
    features: ["App Control", "Schedule Brewing", "Multiple Brew Sizes"]
  },
  {
    id: 42,
    name: "Air Fryer Pro",
    description: "Digital air fryer with multiple cooking presets",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1644329772471-983859bc1d76?w=500",
    category: "Home & Kitchen",
    rating: 4.8,
    stock: 30,
    brand: "KitchenPro",
    isNew: true
  },

  // Sports
  {
    id: 51,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with our advanced smart watch. Features heart rate monitoring, GPS tracking, and long battery life.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800"
    ],
    category: "Sports",
    rating: 4.5,
    stock: 25,
    brand: "FitTech",
    features: [
      "Heart Rate Monitor",
      "GPS Tracking",
      "Sleep Tracking",
      "Water Resistant",
      "7-day Battery Life"
    ]
  },
  {
    id: 52,
    name: "Yoga Mat Premium",
    description: "Eco-friendly non-slip yoga mat",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",
    category: "Sports",
    rating: 4.5,
    stock: 60,
    brand: "YogaLife"
  },

  // Beauty
  {
    id: 61,
    name: "Skincare Set",
    description: "Complete skincare routine kit",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500",
    category: "Beauty",
    rating: 4.8,
    stock: 35,
    brand: "GlowBeauty",
    features: ["Natural Ingredients", "Suitable for All Skin Types"]
  },
  {
    id: 62,
    name: "Hair Care Bundle",
    description: "Professional hair care products set",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1626015365107-476dee9a77a9?w=500",
    category: "Beauty",
    rating: 4.6,
    stock: 25,
    brand: "HairPro",
    isNew: true
  },

  // Toys
  {
    id: 71,
    name: "Educational Robot Kit",
    description: "Build and program your own robot",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=500",
    category: "Toys",
    rating: 4.7,
    stock: 20,
    brand: "RoboKids",
    features: ["Programming Interface", "Assembly Required", "Educational"]
  },
  {
    id: 72,
    name: "Art Supply Set",
    description: "Complete art supplies for young artists",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500",
    category: "Toys",
    rating: 4.4,
    stock: 45,
    brand: "ArtKids"
  },

  // Automotive
  {
    id: 81,
    name: "Car Diagnostic Tool",
    description: "Professional automotive diagnostic scanner",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500",
    category: "Automotive",
    rating: 4.6,
    stock: 15,
    brand: "AutoTech",
    features: ["OBD2 Compatible", "Real-time Monitoring", "Bluetooth Connection"]
  },
  {
    id: 82,
    name: "Car Care Kit",
    description: "Complete car cleaning and maintenance kit",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1600045972606-683167fecc96?w=500",
    category: "Automotive",
    rating: 4.5,
    stock: 30,
    brand: "AutoCare"
  },

  // Health
  {
    id: 91,
    name: "Smart Scale",
    description: "Digital scale with body composition analysis",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1518644961665-ed172691aaa1?w=500",
    category: "Health",
    rating: 4.7,
    stock: 40,
    brand: "HealthTech",
    features: ["Body Composition", "App Integration", "Multiple Users"]
  },
  {
    id: 92,
    name: "Vitamin Bundle",
    description: "Essential daily vitamins and supplements",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500",
    category: "Health",
    rating: 4.5,
    stock: 50,
    brand: "VitaLife"
  },

  // Garden
  {
    id: 101,
    name: "Smart Garden System",
    description: "Automated plant care and monitoring system",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500",
    category: "Garden",
    rating: 4.6,
    stock: 20,
    brand: "GardenTech",
    features: ["Automated Watering", "Plant Monitoring", "App Control"],
    isNew: true
  },
  {
    id: 102,
    name: "Garden Tool Set",
    description: "Complete set of essential gardening tools",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=500",
    category: "Garden",
    rating: 4.4,
    stock: 35,
    brand: "GardenPro"
  },

  // New products
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'High-quality wireless headphones with noise cancellation.',
    category: 'Electronics',
    rating: 4.5,
    stock: 15
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Feature-rich smartwatch with health tracking capabilities.',
    category: 'Electronics',
    rating: 4.3,
    stock: 10
  },
  {
    id: '3',
    name: 'Laptop Backpack',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    description: 'Durable and spacious laptop backpack with multiple compartments.',
    category: 'Fashion',
    rating: 4.7,
    stock: 20
  },
  {
    id: '4',
    name: 'Wireless Mouse',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    description: 'Ergonomic wireless mouse with long battery life.',
    category: 'Electronics',
    rating: 4.2,
    stock: 25
  },
  {
    id: '5',
    name: 'Mechanical Keyboard',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    description: 'RGB mechanical keyboard with customizable keys.',
    category: 'Electronics',
    rating: 4.8,
    stock: 8,
    isFeatured: true
  },
  {
    id: '6',
    name: 'USB-C Hub',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    description: 'Multi-port USB-C hub for laptops and tablets.',
    category: 'Electronics',
    rating: 4.4,
    stock: 30,
    isFeatured: true
  }
] 