import { Product } from '@/types/product'

export const products: Product[] = [
  // Electronics
  {
    id: '001',
    name: "4K Ultra HD Smart TV",
    description: "Immerse yourself in stunning 4K resolution with our premium Smart TV. Features Quantum HDR technology, AI-powered upscaling, built-in voice assistants, and a sleek borderless design. Experience true-to-life colors and deep contrasts with our advanced QLED panel.",
    price: 66499,
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800",
    images: [
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800"
    ],
    category: "Electronics",
    rating: 4.8,
    stock: 15,
    brand: "TechVision",
    features: [
      "4K Ultra HD Resolution (3840 x 2160)",
      "Quantum HDR Technology",
      "AI-Powered Picture Enhancement",
      "120Hz Refresh Rate",
      "Smart Hub with Popular Apps",
      "Voice Assistant Compatible",
      "Multiple HDMI 2.1 Ports",
      "Bluetooth Audio Support"
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Display Type": "QLED",
      "Resolution": "3840 x 2160 (4K)",
      "HDR": "Quantum HDR 1500",
      "Refresh Rate": "120Hz",
      "Smart Platform": "WebOS",
      "Audio": "40W 2.1Ch",
      "Connectivity": "WiFi 6, Bluetooth 5.0",
      "HDMI Ports": "4 (HDMI 2.1)",
      "USB Ports": "3",
      "Dimensions": "48.3\" x 27.8\" x 2.1\"",
      "Weight": "41.9 lbs",
      "Energy Rating": "Energy Star Certified",
      "Warranty": "3 Years Limited"
    },
    originalPrice: 83099,
    discount: 20,
    isFeatured: true
  },
  {
    id: '002',
    name: "Wireless Noise-Canceling Headphones",
    description: "Immerse yourself in your music with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and crystal-clear sound quality.",
    price: 24999,
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
    id: '021',
    name: "Classic Leather Watch",
    description: "Elegant leather strap watch with analog display",
    price: 10899,
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=500",
    category: "Fashion",
    rating: 4.6,
    stock: 30,
    brand: "TimeStyle",
    isNew: true
  },
  {
    id: '022',
    name: "Designer Sunglasses",
    description: "UV protection sunglasses with polarized lenses",
    price: 13379,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    category: "Fashion",
    rating: 4.4,
    stock: 20,
    brand: "VisionElite"
  },

  // Books
  {
    id: '031',
    name: "The Art of Programming",
    description: "Comprehensive guide to modern programming practices",
    price: 4249,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500",
    category: "Books",
    rating: 4.9,
    stock: 50,
    brand: "TechPress",
    isFeatured: true
  },
  {
    id: '032',
    name: "Business Strategy Guide",
    description: "Essential reading for modern business leaders",
    price: 3004,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500",
    category: "Books",
    rating: 4.7,
    stock: 40,
    brand: "BizBooks"
  },

  // Home & Kitchen
  {
    id: '041',
    name: "Smart Coffee Maker",
    description: "Experience premium coffee brewing with our WiFi-enabled smart coffee maker. Features customizable brewing schedules, temperature control, and mobile app integration. Brew your perfect cup from anywhere using your smartphone. Compatible with Alexa and Google Home.",
    price: 16699,
    image: "https://images.unsplash.com/photo-1608354580875-30bd4168b351?w=500",
    images: [
      "https://images.unsplash.com/photo-1608354580875-30bd4168b351?w=500",
      "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?w=500",
      "https://images.unsplash.com/photo-1592318951566-4456ec3c3334?w=500"
    ],
    category: "Home & Kitchen",
    rating: 4.6,
    stock: 25,
    brand: "SmartHome",
    features: [
      "WiFi & Smart Home Integration",
      "10-Cup Capacity",
      "Customizable Brew Strength",
      "24-Hour Programmable Timer",
      "Keep Warm Function",
      "Auto Shut-off Safety",
      "Built-in Water Filter",
      "LCD Touch Display"
    ],
    specifications: {
      "Capacity": "10 Cups (1.5L)",
      "Power": "1000W",
      "Voltage": "120V",
      "Filter Type": "Permanent Gold-Tone",
      "Water Tank": "Removable",
      "Display": "LCD Touch Screen",
      "Dimensions": "9.5\" x 11.5\" x 14.5\"",
      "Warranty": "2 Years Limited"
    },
    originalPrice: 20849,
    discount: 20,
    isFeatured: true
  },
  {
    id: '042',
    name: "Air Fryer Pro",
    description: "Digital air fryer with multiple cooking presets. Features a large 5.8QT capacity, LED touch screen, 8 preset cooking modes, and adjustable temperature control.",
    price: 10889,
    image: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=500",
    images: [
      "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=500",
      "https://images.unsplash.com/photo-1612883135629-c40215facd6a?w=500"
    ],
    category: "Home & Kitchen",
    rating: 4.8,
    stock: 30,
    brand: "KitchenPro",
    features: [
      "5.8QT Large Capacity",
      "LED Touch Screen",
      "8 Preset Cooking Modes",
      "Adjustable Temperature",
      "Non-stick Basket",
      "Dishwasher Safe Parts"
    ],
    isNew: true
  },

  // Sports
  {
    id: '051',
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with our advanced smart watch. Features heart rate monitoring, GPS tracking, and long battery life.",
    price: 16699,
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
    id: '052',
    name: "Yoga Mat Premium",
    description: "Eco-friendly non-slip yoga mat",
    price: 4249,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",
    category: "Sports",
    rating: 4.5,
    stock: 60,
    brand: "YogaLife"
  },

  // Beauty
  {
    id: '061',
    name: "Skincare Set",
    description: "Complete skincare routine kit",
    price: 7569,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500",
    category: "Beauty",
    rating: 4.8,
    stock: 35,
    brand: "GlowBeauty",
    features: ["Natural Ingredients", "Suitable for All Skin Types"]
  },
  {
    id: '062',
    name: "Hair Care Bundle",
    description: "Professional hair care products set",
    price: 6739,
    image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=500",
    category: "Beauty",
    rating: 4.6,
    stock: 25,
    brand: "HairPro",
    isNew: true
  },

  // Toys
  {
    id: '071',
    name: "Educational Robot Kit",
    description: "Build and program your own robot",
    price: 12549,
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=500",
    category: "Toys",
    rating: 4.7,
    stock: 20,
    brand: "RoboKids",
    features: ["Programming Interface", "Assembly Required", "Educational"]
  },
  {
    id: '072',
    name: "Art Supply Set",
    description: "Complete art supplies for young artists",
    price: 3419,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500",
    category: "Toys",
    rating: 4.4,
    stock: 45,
    brand: "ArtKids"
  },

  // Automotive
  {
    id: '081',
    name: "Car Diagnostic Tool",
    description: "Professional automotive diagnostic scanner",
    price: 16699,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500",
    category: "Automotive",
    rating: 4.6,
    stock: 15,
    brand: "AutoTech",
    features: ["OBD2 Compatible", "Real-time Monitoring", "Bluetooth Connection"]
  },
  {
    id: '082',
    name: "Car Care Kit",
    description: "Professional-grade complete car cleaning and detailing kit. Includes premium microfiber towels, car wash soap, wax, tire shine, interior cleaner, and glass cleaner. Everything you need to keep your vehicle looking showroom-ready.",
    price: 6739,
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=500",
    images: [
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=500",
      "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=500",
      "https://images.unsplash.com/photo-1600045972606-683167fecc96?w=500"
    ],
    category: "Automotive",
    rating: 4.5,
    stock: 30,
    brand: "AutoCare",
    features: [
      "Professional Grade Products",
      "pH Neutral Car Wash Soap",
      "Long-lasting Carnauba Wax",
      "Streak-free Glass Cleaner",
      "Premium Microfiber Towels",
      "Tire & Trim Dressing",
      "Interior Cleaner & Protectant",
      "Wheel & Rim Cleaner"
    ],
    specifications: {
      "Kit Contents": "12 Items",
      "Car Wash Soap": "16 oz",
      "Wax": "12 oz",
      "Glass Cleaner": "16 oz",
      "Interior Cleaner": "16 oz",
      "Tire Shine": "16 oz",
      "Microfiber Towels": "6 Pack",
      "Storage Case": "Included"
    },
    originalPrice: 8399,
    discount: 20,
    isNew: true
  },

  // Health
  {
    id: '091',
    name: "Smart Scale",
    description: "Advanced digital smart scale with comprehensive body composition analysis. Features high-precision bioelectrical impedance sensors for accurate measurements of weight, body fat, muscle mass, BMI, bone mass, and hydration levels. Seamlessly syncs with your smartphone for detailed health tracking and progress monitoring.",
    price: 7569,
    image: 'https://images.unsplash.com/photo-1518644961665-ed172691aaa1?w=800',
    images: [
      'https://images.unsplash.com/photo-1518644961665-ed172691aaa1?w=800',
      'https://images.unsplash.com/photo-1595792463990-89ea85b0c86b?w=800',
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
      'https://images.unsplash.com/photo-1575998361000-f15c23b3c722?w=800'
    ],
    category: "Health",
    rating: 4.7,
    stock: 40,
    brand: "HealthTech Pro",
    features: [
      "13 Body Composition Metrics",
      "High-Precision BIA Technology",
      "Unlimited User Profiles",
      "Real-time Health Insights",
      "Smart App Integration",
      "Heart Rate Monitoring",
      "Pregnancy Mode",
      "Athlete Mode",
      "Baby Mode for Weight Tracking",
      "Weather Display",
      "Auto-Recognition",
      "Auto-Calibration",
      "Large LED Display",
      "Anti-Slip Surface",
      "Rechargeable Battery"
    ],
    specifications: {
      "Measurement Range": "5-180kg / 11-396lb",
      "Accuracy": "±0.05kg / 0.1lb",
      "Display": "3.5\" LED with Backlight",
      "Power": "Rechargeable Li-ion Battery",
      "Battery Life": "90 days per charge",
      "Connectivity": "Bluetooth 5.0",
      "App Support": "iOS 12+ & Android 8.0+",
      "Material": "Tempered Glass + ABS",
      "Surface": "ITO Coating + Anti-slip",
      "Dimensions": "32 x 32 x 2.7 cm",
      "Weight": "2.1kg",
      "Max Users": "Unlimited Cloud Storage",
      "Data Points": "13 Body Metrics",
      "Warranty": "2 Years",
      "Water Resistance": "IPX7"
    },
    originalPrice: 8999,
    discount: 16,
    isFeatured: true,
    reviewsCount: 856
  },
  {
    id: '092',
    name: "Vitamin Bundle",
    description: "Essential daily vitamins and supplements",
    price: 4249,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500",
    category: "Health",
    rating: 4.5,
    stock: 50,
    brand: "VitaLife"
  },

  // Garden
  {
    id: '101',
    name: "Smart Garden System",
    description: "Experience the future of indoor gardening with our Smart Garden System. Features hydroponic technology, automated LED lighting cycles, and real-time monitoring via smartphone. Perfect for growing fresh herbs, vegetables, and microgreens in any indoor space.",
    price: 13379,
    image: "https://images.unsplash.com/photo-1510505751526-76254482fd38?w=500",
    images: [
      "https://images.unsplash.com/photo-1510505751526-76254482fd38?w=500",
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=500",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500"
    ],
    category: "Garden",
    rating: 4.6,
    stock: 20,
    brand: "GardenTech",
    features: [
      "Hydroponic Growing System",
      "Smart LED Growth Lights",
      "Automated Watering System",
      "Real-time Plant Monitoring",
      "Mobile App Integration",
      "pH and Nutrient Sensors",
      "Expandable Design",
      "Energy-efficient Operation"
    ],
    specifications: {
      "Growing Capacity": "6-8 plants",
      "Light Type": "Full Spectrum LED",
      "Water Tank": "4 Liters",
      "Power": "20W LED",
      "Connectivity": "WiFi + Bluetooth",
      "App Compatibility": "iOS and Android",
      "Dimensions": "16\" x 12\" x 20\"",
      "Warranty": "2 Years"
    },
    originalPrice: 16699,
    isNew: true,
    discount: 20
  },
  {
    id: '102',
    name: "Garden Tool Set",
    description: "Complete set of essential gardening tools",
    price: 5909,
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=500",
    category: "Garden",
    rating: 4.4,
    stock: 35,
    brand: "GardenPro"
  },

  // New products
  {
    id: '201',
    name: 'Wireless Headphones',
    description: 'Premium wireless headphones featuring active noise cancellation, Hi-Fi sound quality, and extended battery life. Experience immersive audio with our custom-tuned 40mm drivers, ultra-comfortable memory foam ear cushions, and seamless Bluetooth 5.2 connectivity.',
    price: 8399,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800'
    ],
    category: 'Electronics',
    rating: 4.5,
    stock: 15,
    brand: 'SoundPro',
    features: [
      'Active Noise Cancellation',
      '40mm Dynamic Drivers',
      'Bluetooth 5.2',
      '30-Hour Battery Life',
      'Quick Charge (10min = 3hrs)',
      'Memory Foam Ear Cushions',
      'Built-in Microphone',
      'Touch Controls'
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32 Ohm',
      'Battery Capacity': '800mAh',
      'Charging Time': '2 Hours',
      'Bluetooth Range': '10m (33ft)',
      'Weight': '250g',
      'Water Resistance': 'IPX4',
      'Warranty': '1 Year'
    },
    originalPrice: 12549,
    discount: 33,
    isFeatured: true,
    reviewsCount: 128
  },
  {
    id: '202',
    name: 'Smart Watch',
    price: 16599,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Feature-rich smartwatch with health tracking capabilities.',
    category: 'Electronics',
    rating: 4.3,
    stock: 10
  },
  {
    id: '203',
    name: 'Laptop Backpack',
    price: 4149,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    description: 'Durable and spacious laptop backpack with multiple compartments.',
    category: 'Fashion',
    rating: 4.7,
    stock: 20
  },
  {
    id: '204',
    name: 'Wireless Mouse',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    description: 'Ergonomic wireless mouse with long battery life.',
    category: 'Electronics',
    rating: 4.2,
    stock: 25
  },
  {
    id: '205',
    name: 'Mechanical Keyboard',
    description: 'Premium mechanical gaming keyboard featuring RGB backlighting, hot-swappable switches, and aircraft-grade aluminum frame. Customizable per-key RGB lighting, macro programming, and N-key rollover for ultimate gaming performance.',
    price: 10799,
    image: 'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=500',
    images: [
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=500',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500'
    ],
    category: 'Electronics',
    rating: 4.8,
    stock: 8,
    brand: 'TechGear Pro',
    features: [
      'Hot-swappable Mechanical Switches',
      'Per-key RGB Backlighting',
      'Aircraft-grade Aluminum Frame',
      'USB Type-C Connection',
      'N-key Rollover',
      'Programmable Macro Keys',
      'Detachable Wrist Rest',
      'Custom Software Suite'
    ],
    specifications: {
      'Layout': 'Full-size (104 keys)',
      'Switch Type': 'Mechanical (Hot-swappable)',
      'Backlight': 'RGB (16.8M colors)',
      'Material': 'Aluminum + PBT Keycaps',
      'Polling Rate': '1000Hz',
      'Cable': 'USB-C Detachable',
      'Dimensions': '17.3\" x 5.2\" x 1.4\"',
      'Weight': '2.4 lbs',
      'Compatibility': 'Windows, macOS, Linux',
      'Warranty': '2 Years'
    },
    originalPrice: 13279,
    discount: 19,
    isFeatured: true
  },
  {
    id: '206',
    name: 'USB-C Hub',
    price: 3419,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800',
      'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800'
    ],
    description: 'Professional 11-in-1 USB-C hub featuring dual 4K HDMI outputs, 100W Power Delivery, USB 3.0 ports, SD/TF card readers, Gigabit Ethernet, and 3.5mm audio jack. Perfect for laptops, MacBooks, and USB-C devices. Premium aluminum construction ensures durability and optimal heat dissipation.',
    category: 'Electronics',
    rating: 4.6,
    stock: 45,
    brand: 'TechConnect Pro',
    features: [
      'Dual 4K HDMI Outputs',
      '100W Power Delivery',
      '3x USB 3.0 Ports',
      'SD & TF Card Readers',
      'Gigabit Ethernet Port',
      '3.5mm Audio Jack',
      'VGA Port',
      'Premium Aluminum Body',
      'LED Status Indicator',
      'Plug & Play Design',
      'Universal Compatibility'
    ],
    specifications: {
      'Ports': '11-in-1',
      'HDMI Resolution': 'Dual 4K@60Hz',
      'Power Delivery': '100W',
      'Data Transfer': 'Up to 5Gbps',
      'Ethernet Speed': '1000Mbps',
      'USB Ports': '3x USB 3.0',
      'Card Readers': 'SD & TF up to 512GB',
      'Audio': '3.5mm Combo Jack',
      'Cable Length': '20cm',
      'Material': 'Aircraft-grade Aluminum',
      'Dimensions': '12.5 x 6.0 x 1.5 cm',
      'Weight': '98g',
      'Compatibility': 'Windows, macOS, Chrome OS, Linux',
      'Warranty': '2 Years'
    },
    originalPrice: 4249,
    discount: 20,
    isFeatured: true,
    reviewsCount: 245
  }
] 