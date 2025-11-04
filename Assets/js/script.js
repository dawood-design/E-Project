        // Sample product data with multiple fabric and size options
        const products = [
            // Summer Collection - Male Products
            {
                id: 1,
                name: "J. Summer Kurti",
                stylist: "Junaid Jamshed",
                collection: "summer",
                gender: "male",
                image: "/Assets/img/summermale1.jpeg",
                description: "A lightweight and comfortable kurti perfect for summer outings. Features a flattering A-line cut and vibrant floral pattern.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Cotton Blend", priceModifier: 1.0 },
                        { name: "Linen", priceModifier: 1.2 },
                        { name: "Silk", priceModifier: 1.5 },
                        { name: "Rayon", priceModifier: 0.9 },
                        { name: "Chambray", priceModifier: 1.1 }
                    ],
                    basePrice: 89.99,
                    sizePriceModifiers: {
                        "S": 0.9,
                        "M": 1.0,
                        "L": 1.1,
                        "XL": 1.2
                    }
                }
            },
            {
                id: 2,
                name: "Gul Ahmed Summer Shalwar Kameez",
                stylist: "Gul Ahmed",
                collection: "summer",
                gender: "male",
                image: "/Assets/img/summermale2.jpeg",
                description: "Traditional yet modern shalwar kameez made from breathable fabric perfect for hot summer days.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Cotton", priceModifier: 1.0 },
                        { name: "Linen", priceModifier: 1.3 },
                        { name: "Voile", priceModifier: 1.1 },
                        { name: "Cambric", priceModifier: 0.9 },
                        { name: "Lawn", priceModifier: 0.8 }
                    ],
                    basePrice: 79.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 3,
                name: "Khaadi Summer Kurta",
                stylist: "Khaadi",
                collection: "summer",
                gender: "male",
                image: "/Assets/img/summermale3.jpeg",
                description: "Stylish kurta with intricate embroidery and modern design elements for a sophisticated summer look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Cotton", priceModifier: 1.0 },
                        { name: "Linen", priceModifier: 1.2 },
                        { name: "Silk Blend", priceModifier: 1.4 },
                        { name: "Jacquard", priceModifier: 1.3 },
                        { name: "Poplin", priceModifier: 0.9 }
                    ],
                    basePrice: 99.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            // Summer Collection - Female Products
            {
                id: 4,
                name: "J. Summer Lawn Suit",
                stylist: "Junaid Jamshed",
                collection: "summer",
                gender: "female",
                image: "/Assets/img/summerwomen1.jpeg",
                description: "Elegant lawn suit with delicate embroidery and modern cuts for a comfortable yet stylish summer look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Lawn", priceModifier: 1.0 },
                        { name: "Cotton", priceModifier: 1.1 },
                        { name: "Chiffon", priceModifier: 1.3 },
                        { name: "Silk", priceModifier: 1.5 },
                        { name: "Organza", priceModifier: 1.4 }
                    ],
                    basePrice: 109.99,
                    sizePriceModifiers: {
                        "S": 0.9,
                        "M": 1.0,
                        "L": 1.1,
                        "XL": 1.2
                    }
                }
            },
            {
                id: 5,
                name: "Gul Ahmed Summer Dress",
                stylist: "Gul Ahmed",
                collection: "summer",
                gender: "female",
                image: "/Assets/img/summerwomen2.jpeg",
                description: "Flowing summer dress with vibrant prints and comfortable fabric perfect for outdoor events.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Cotton", priceModifier: 1.0 },
                        { name: "Chiffon", priceModifier: 1.2 },
                        { name: "Linen", priceModifier: 1.1 },
                        { name: "Viscose", priceModifier: 0.9 },
                        { name: "Rayon", priceModifier: 0.8 }
                    ],
                    basePrice: 119.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 6,
                name: "Khaadi Summer Kaftan",
                stylist: "Khaadi",
                collection: "summer",
                gender: "female",
                image: "/Assets/img/summerwomen3.jpeg",
                description: "Trendy kaftan with intricate patterns and comfortable fit for a relaxed summer style.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Cotton Blend", priceModifier: 1.0 },
                        { name: "Silk", priceModifier: 1.5 },
                        { name: "Chiffon", priceModifier: 1.2 },
                        { name: "Georgette", priceModifier: 1.1 },
                        { name: "Crepe", priceModifier: 1.3 }
                    ],
                    basePrice: 129.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            // Wedding Collection - Male Products
            {
                id: 7,
                name: "J. Groom Sherwani",
                stylist: "Junaid Jamshed",
                collection: "wedding",
                gender: "male",
                image: "/Assets/img/groommale1.jpeg",
                description: "Elegant sherwani with intricate embroidery and traditional design for the perfect groom look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Silk", priceModifier: 1.0 },
                        { name: "Velvet", priceModifier: 1.3 },
                        { name: "Brocade", priceModifier: 1.4 },
                        { name: "Jamawar", priceModifier: 1.5 },
                        { name: "Raw Silk", priceModifier: 1.2 }
                    ],
                    basePrice: 399.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 8,
                name: "Gul Ahmed Wedding Suit",
                stylist: "Gul Ahmed",
                collection: "wedding",
                gender: "male",
                image: "/Assets/img/groommale2.jpeg",
                description: "Sophisticated wedding suit with modern cuts and traditional embellishments for a distinguished look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Wool Blend", priceModifier: 1.0 },
                        { name: "Silk Blend", priceModifier: 1.3 },
                        { name: "Linen", priceModifier: 1.1 },
                        { name: "Tweed", priceModifier: 1.2 },
                        { name: "Velvet", priceModifier: 1.4 }
                    ],
                    basePrice: 349.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 9,
                name: "Khaadi Groom Kurta",
                stylist: "Khaadi",
                collection: "wedding",
                gender: "male",
                image: "/Assets/img/groommale3.jpeg",
                description: "Luxurious kurta with detailed embroidery and premium fabric for a sophisticated wedding appearance.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Silk", priceModifier: 1.0 },
                        { name: "Raw Silk", priceModifier: 1.2 },
                        { name: "Chiffon", priceModifier: 1.1 },
                        { name: "Jacquard", priceModifier: 1.3 },
                        { name: "Brocade", priceModifier: 1.4 }
                    ],
                    basePrice: 299.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            // Wedding Collection - Female Products
            {
                id: 10,
                name: "J. Bridal Lehenga",
                stylist: "Junaid Jamshed",
                collection: "wedding",
                gender: "female",
                image: "/Assets/img/bridalwomen1.jpeg",
                description: "Exquisite bridal lehenga with intricate embroidery and premium fabric for a stunning wedding look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Silk", priceModifier: 1.0 },
                        { name: "Velvet", priceModifier: 1.3 },
                        { name: "Net", priceModifier: 1.1 },
                        { name: "Chiffon", priceModifier: 1.2 },
                        { name: "Georgette", priceModifier: 1.1 }
                    ],
                    basePrice: 899.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 11,
                name: "Gul Ahmed Bridal Gown",
                stylist: "Gul Ahmed",
                collection: "wedding",
                gender: "female",
                image: "/Assets/img/bridalwomen2.jpeg",
                description: "Elegant bridal gown with delicate embroidery and flowing silhouette for a fairy-tale wedding.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Silk", priceModifier: 1.0 },
                        { name: "Satin", priceModifier: 0.9 },
                        { name: "Chiffon", priceModifier: 1.1 },
                        { name: "Organza", priceModifier: 1.2 },
                        { name: "Tulle", priceModifier: 1.1 }
                    ],
                    basePrice: 799.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 12,
                name: "Khaadi Bridal Sharara",
                stylist: "Khaadi",
                collection: "wedding",
                gender: "female",
                image: "/Assets/img/bridalwomen3.jpeg",
                description: "Traditional sharara with modern design elements and intricate detailing for a memorable bridal look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Silk", priceModifier: 1.0 },
                        { name: "Net", priceModifier: 1.1 },
                        { name: "Chiffon", priceModifier: 1.2 },
                        { name: "Jamawar", priceModifier: 1.3 },
                        { name: "Brocade", priceModifier: 1.4 }
                    ],
                    basePrice: 699.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            // Winter Collection - Male Products
            {
                id: 13,
                name: "J. Winter Shawl",
                stylist: "Junaid Jamshed",
                collection: "winter",
                gender: "male",
                image: "/Assets/img/wintermale1.jpeg",
                description: "Premium wool shawl with traditional patterns and modern colors to keep you warm and stylish.",
                options: {
                    sizes: ["One Size"],
                    fabrics: [
                        { name: "Wool", priceModifier: 1.0 },
                        { name: "Pashmina", priceModifier: 1.5 },
                        { name: "Cashmere", priceModifier: 1.8 },
                        { name: "Merino Wool", priceModifier: 1.3 },
                        { name: "Angora", priceModifier: 1.4 }
                    ],
                    basePrice: 149.99,
                    sizePriceModifiers: {
                        "One Size": 1.0
                    }
                }
            },
            {
                id: 14,
                name: "Gul Ahmed Winter Coat",
                stylist: "Gul Ahmed",
                collection: "winter",
                gender: "male",
                image: "/Assets/img/wintermale2.jpeg",
                description: "Stylish winter coat with modern design and premium fabric to keep you warm in cold weather.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Wool Blend", priceModifier: 1.0 },
                        { name: "Cashmere", priceModifier: 1.5 },
                        { name: "Tweed", priceModifier: 1.2 },
                        { name: "Melton", priceModifier: 1.1 },
                        { name: "Gabardine", priceModifier: 1.3 }
                    ],
                    basePrice: 249.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 15,
                name: "Khaadi Winter Sweater",
                stylist: "Khaadi",
                collection: "winter",
                gender: "male",
                image: "/Assets/img/wintermale3.jpeg",
                description: "Cozy sweater with traditional patterns and modern fit for a comfortable winter style.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Wool", priceModifier: 1.0 },
                        { name: "Cashmere", priceModifier: 1.5 },
                        { name: "Merino Wool", priceModifier: 1.3 },
                        { name: "Alpaca", priceModifier: 1.4 },
                        { name: "Lambswool", priceModifier: 1.2 }
                    ],
                    basePrice: 199.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            // Winter Collection - Female Products
            {
                id: 16,
                name: "J. Winter Shawl",
                stylist: "Junaid Jamshed",
                collection: "winter",
                gender: "female",
                image: "/Assets/img/winterwomen1.jpeg",
                description: "Elegant shawl with intricate embroidery and soft fabric to keep you warm and stylish.",
                options: {
                    sizes: ["One Size"],
                    fabrics: [
                        { name: "Pashmina", priceModifier: 1.0 },
                        { name: "Cashmere", priceModifier: 1.3 },
                        { name: "Silk Blend", priceModifier: 1.2 },
                        { name: "Wool", priceModifier: 0.8 },
                        { name: "Angora", priceModifier: 1.1 }
                    ],
                    basePrice: 179.99,
                    sizePriceModifiers: {
                        "One Size": 1.0
                    }
                }
            },
            {
                id: 17,
                name: "Gul Ahmed Winter Coat",
                stylist: "Gul Ahmed",
                collection: "winter",
                gender: "female",
                image: "/Assets/img/winterwomen2.jpeg",
                description: "Fashionable winter coat with modern design and premium fabric to keep you warm in style.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Wool Blend", priceModifier: 1.0 },
                        { name: "Cashmere", priceModifier: 1.5 },
                        { name: "Faux Fur", priceModifier: 1.3 },
                        { name: "Tweed", priceModifier: 1.2 },
                        { name: "Melton", priceModifier: 1.1 }
                    ],
                    basePrice: 279.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 18,
                name: "Khaadi Winter Cardigan",
                stylist: "Khaadi",
                collection: "winter",
                gender: "female",
                image: "/Assets/img/winterwomen3.jpeg",
                description: "Cozy cardigan with traditional patterns and modern design for a comfortable winter look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Wool", priceModifier: 1.0 },
                        { name: "Cashmere", priceModifier: 1.5 },
                        { name: "Merino Wool", priceModifier: 1.3 },
                        { name: "Alpaca", priceModifier: 1.4 },
                        { name: "Angora", priceModifier: 1.2 }
                    ],
                    basePrice: 169.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            // Business Collection - Male Products
            {
                id: 19,
                name: "J. Business Suit",
                stylist: "Junaid Jamshed",
                collection: "business",
                gender: "male",
                image: "/Assets/img/businessmale1.jpeg",
                description: "Professional business suit with modern cuts and premium fabric for a sophisticated corporate look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Wool", priceModifier: 1.0 },
                        { name: "Polyester Blend", priceModifier: 0.8 },
                        { name: "Cotton Blend", priceModifier: 0.9 },
                        { name: "Linen", priceModifier: 1.1 },
                        { name: "Tweed", priceModifier: 1.2 }
                    ],
                    basePrice: 299.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 20,
                name: "Gul Ahmed Business Shirt",
                stylist: "Gul Ahmed",
                collection: "business",
                gender: "male",
                image: "/Assets/img/businessmale2.jpeg",
                description: "Classic business shirt with modern fit and premium fabric for a professional appearance.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Cotton", priceModifier: 1.0 },
                        { name: "Linen", priceModifier: 1.2 },
                        { name: "Polyester", priceModifier: 0.8 },
                        { name: "Silk Blend", priceModifier: 1.3 },
                        { name: "Poplin", priceModifier: 0.9 }
                    ],
                    basePrice: 89.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 21,
                name: "Khaadi Business Waistcoat",
                stylist: "Khaadi",
                collection: "business",
                gender: "male",
                image: "/Assets/img/businessmale3.jpeg",
                description: "Stylish waistcoat with traditional design and modern fit for a sophisticated business look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Wool Blend", priceModifier: 1.0 },
                        { name: "Silk", priceModifier: 1.3 },
                        { name: "Velvet", priceModifier: 1.4 },
                        { name: "Brocade", priceModifier: 1.5 },
                        { name: "Linen", priceModifier: 1.1 }
                    ],
                    basePrice: 129.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            // Business Collection - Female Products
            {
                id: 22,
                name: "J. Business Blazer",
                stylist: "Junaid Jamshed",
                collection: "business",
                gender: "female",
                image: "/Assets/img/businesswomen1.jpeg",
                description: "Professional blazer with modern cuts and premium fabric for a sophisticated corporate look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Wool Blend", priceModifier: 1.0 },
                        { name: "Polyester", priceModifier: 0.8 },
                        { name: "Cotton", priceModifier: 0.9 },
                        { name: "Linen", priceModifier: 1.1 },
                        { name: "Tweed", priceModifier: 1.2 }
                    ],
                    basePrice: 199.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 23,
                name: "Gul Ahmed Business Shirt",
                stylist: "Gul Ahmed",
                collection: "business",
                gender: "female",
                image: "/Assets/img/businesswomen2.jpeg",
                description: "Elegant business shirt with modern fit and premium fabric for a professional appearance.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Cotton", priceModifier: 1.0 },
                        { name: "Silk", priceModifier: 1.3 },
                        { name: "Chiffon", priceModifier: 1.1 },
                        { name: "Polyester", priceModifier: 0.8 },
                        { name: "Satin", priceModifier: 1.2 }
                    ],
                    basePrice: 99.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 24,
                name: "Khaadi Business Skirt",
                stylist: "Khaadi",
                collection: "business",
                gender: "female",
                image: "/Assets/img/businesswomen3.jpeg",
                description: "Professional skirt with modern design and premium fabric for a sophisticated business look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Wool Blend", priceModifier: 1.0 },
                        { name: "Cotton", priceModifier: 0.9 },
                        { name: "Polyester", priceModifier: 0.8 },
                        { name: "Linen", priceModifier: 1.1 },
                        { name: "Tweed", priceModifier: 1.2 }
                    ],
                    basePrice: 119.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            // Casual Collection - Male Products
            {
                id: 25,
                name: "J. Casual Shirt",
                stylist: "Junaid Jamshed",
                collection: "casual",
                gender: "male",
                image: "/Assets/img/casualmale1.jpeg",
                description: "Comfortable casual shirt with modern design and premium fabric for a relaxed yet stylish look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Cotton", priceModifier: 1.0 },
                        { name: "Denim", priceModifier: 1.1 },
                        { name: "Linen", priceModifier: 1.2 },
                        { name: "Flannel", priceModifier: 1.1 },
                        { name: "Chambray", priceModifier: 0.9 }
                    ],
                    basePrice: 79.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 26,
                name: "Gul Ahmed Casual Jeans",
                stylist: "Gul Ahmed",
                collection: "casual",
                gender: "male",
                image: "/Assets/img/casualmale2.jpeg",
                description: "Stylish jeans with modern fit and premium denim for a comfortable casual look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Denim", priceModifier: 1.0 },
                        { name: "Stretch Denim", priceModifier: 1.1 },
                        { name: "Corduroy", priceModifier: 1.2 },
                        { name: "Twill", priceModifier: 0.9 },
                        { name: "Canvas", priceModifier: 1.1 }
                    ],
                    basePrice: 89.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 27,
                name: "Khaadi Casual T-Shirt",
                stylist: "Khaadi",
                collection: "casual",
                gender: "male",
                image: "/Assets/img/casualmale3.jpeg",
                description: "Comfortable t-shirt with modern design and premium fabric for a relaxed casual look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Cotton", priceModifier: 1.0 },
                        { name: "Polyester Blend", priceModifier: 0.8 },
                        { name: "Modal", priceModifier: 1.1 },
                        { name: "Bamboo", priceModifier: 1.2 },
                        { name: "Jersey", priceModifier: 0.9 }
                    ],
                    basePrice: 49.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            // Casual Collection - Female Products
            {
                id: 28,
                name: "J. Casual Top",
                stylist: "Junaid Jamshed",
                collection: "casual",
                gender: "female",
                image: "/Assets/img/casualwomen1.jpeg",
                description: "Stylish casual top with modern design and premium fabric for a comfortable yet fashionable look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Cotton", priceModifier: 1.0 },
                        { name: "Linen", priceModifier: 1.2 },
                        { name: "Viscose", priceModifier: 1.1 },
                        { name: "Modal", priceModifier: 1.2 },
                        { name: "Rayon", priceModifier: 0.9 }
                    ],
                    basePrice: 69.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 29,
                name: "Gul Ahmed Casual Jeans",
                stylist: "Gul Ahmed",
                collection: "casual",
                gender: "female",
                image: "/Assets/img/casualwomen2.jpeg",
                description: "Fashionable jeans with modern fit and premium denim for a comfortable casual look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Denim", priceModifier: 1.0 },
                        { name: "Stretch Denim", priceModifier: 1.1 },
                        { name: "Corduroy", priceModifier: 1.2 },
                        { name: "Twill", priceModifier: 0.9 },
                        { name: "Canvas", priceModifier: 1.1 }
                    ],
                    basePrice: 99.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 30,
                name: "Khaadi Casual Dress",
                stylist: "Khaadi",
                collection: "casual",
                gender: "female",
                image: "/Assets/img/casualwomen3.jpeg",
                description: "Comfortable dress with modern design and premium fabric for a relaxed yet stylish look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Cotton", priceModifier: 1.0 },
                        { name: "Linen", priceModifier: 1.2 },
                        { name: "Viscose", priceModifier: 1.1 },
                        { name: "Modal", priceModifier: 1.2 },
                        { name: "Rayon", priceModifier: 0.9 }
                    ],
                    basePrice: 119.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            // Party Collection - Male Products
            {
                id: 31,
                name: "J. Party Suit",
                stylist: "Junaid Jamshed",
                collection: "party",
                gender: "male",
                image: "/Assets/img/partymale1.jpeg",
                description: "Elegant party suit with modern design and premium fabric for a sophisticated evening look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Silk Blend", priceModifier: 1.0 },
                        { name: "Velvet", priceModifier: 1.3 },
                        { name: "Brocade", priceModifier: 1.4 },
                        { name: "Satin", priceModifier: 1.2 },
                        { name: "Jacquard", priceModifier: 1.3 }
                    ],
                    basePrice: 249.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 32,
                name: "Gul Ahmed Party Shirt",
                stylist: "Gul Ahmed",
                collection: "party",
                gender: "male",
                image: "/Assets/img/partymale2.jpeg",
                description: "Stylish party shirt with modern design and premium fabric for a fashionable evening look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Silk", priceModifier: 1.0 },
                        { name: "Satin", priceModifier: 0.9 },
                        { name: "Velvet", priceModifier: 1.3 },
                        { name: "Brocade", priceModifier: 1.4 },
                        { name: "Jacquard", priceModifier: 1.2 }
                    ],
                    basePrice: 129.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 33,
                name: "Khaadi Party Waistcoat",
                stylist: "Khaadi",
                collection: "party",
                gender: "male",
                image: "/Assets/img/partymale3.jpeg",
                description: "Elegant waistcoat with intricate embroidery and premium fabric for a sophisticated party look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Velvet", priceModifier: 1.0 },
                        { name: "Brocade", priceModifier: 1.2 },
                        { name: "Silk", priceModifier: 1.1 },
                        { name: "Jacquard", priceModifier: 1.3 },
                        { name: "Satin", priceModifier: 0.9 }
                    ],
                    basePrice: 159.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            // Party Collection - Female Products
            {
                id: 34,
                name: "J. Party Gown",
                stylist: "Junaid Jamshed",
                collection: "party",
                gender: "female",
                image: "/Assets/img/partywomen1.jpeg",
                description: "Elegant party gown with modern design and premium fabric for a stunning evening look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Silk", priceModifier: 1.0 },
                        { name: "Satin", priceModifier: 0.9 },
                        { name: "Chiffon", priceModifier: 1.1 },
                        { name: "Velvet", priceModifier: 1.3 },
                        { name: "Organza", priceModifier: 1.2 }
                    ],
                    basePrice: 299.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 35,
                name: "Gul Ahmed Party Dress",
                stylist: "Gul Ahmed",
                collection: "party",
                gender: "female",
                image: "/Assets/img/partywomen2.jpeg",
                description: "Stylish party dress with modern design and premium fabric for a fashionable evening look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Silk", priceModifier: 1.0 },
                        { name: "Chiffon", priceModifier: 1.1 },
                        { name: "Georgette", priceModifier: 1.2 },
                        { name: "Satin", priceModifier: 0.9 },
                        { name: "Crepe", priceModifier: 1.1 }
                    ],
                    basePrice: 249.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            },
            {
                id: 36,
                name: "Khaadi Party Sharara",
                stylist: "Khaadi",
                collection: "party",
                gender: "female",
                image: "/Assets/img/parywomen3.jpeg",
                description: "Elegant sharara with intricate embroidery and premium fabric for a sophisticated party look.",
                options: {
                    sizes: ["S", "M", "L", "XL"],
                    fabrics: [
                        { name: "Silk", priceModifier: 1.0 },
                        { name: "Net", priceModifier: 1.1 },
                        { name: "Chiffon", priceModifier: 1.2 },
                        { name: "Jamawar", priceModifier: 1.3 },
                        { name: "Brocade", priceModifier: 1.4 }
                    ],
                    basePrice: 279.99,
                    sizePriceModifiers: {
                        "S": 0.95,
                        "M": 1.0,
                        "L": 1.05,
                        "XL": 1.1
                    }
                }
            }
        ];

        // Stylist data
        const stylists = {
            "Junaid Jamshed": {
                name: "Junaid Jamshed",
                specialty: "Casual & Business Wear",
                image: "/img1.jpeg",
                coverImage: "https://picsum.photos/seed/junaid-cover/800/400.jpg",
                about: "Junaid Jamshed, now known as J., is a renowned Pakistani fashion brand that has been transforming traditional eastern wear into modern, stylish pieces since 2002. With a focus on quality fabrics and intricate designs, J. offers a wide range of clothing for both men and women.",
                specializations: "Traditional Eastern Wear, Casual Kurtas, Business Shalwar Kameez, Formal Sherwanis, Accessories",
                email: "info@junaidjamshed.com",
                phone: "+92 (21) 111-524-527",
                location: "Karachi, Pakistan",
                collections: [
                    { name: "Summer Collection", image: "/Assets/img/J.summer collection.jpeg", collectionType: "summer" },
                    { name: "Business Collection", image: "/Assets/img/j. business collection.jpeg", collectionType: "business" },
                    { name: "Wedding Collection", image: "/Assets/img/gul ahmed weeding colllection.jpeg", collectionType: "wedding" }
                ]
            },
            "Gul Ahmed": {
                name: "Gul Ahmed",
                specialty: "Formal & Evening Wear",
                image: "/img2.jpeg",
                coverImage: "https://picsum.photos/seed/gulahmed-cover/800/400.jpg",
                about: "Gul Ahmed is one of Pakistan's most iconic textile brands, with a rich history dating back to 1953. Known for their premium quality fabrics and innovative designs, Gul Ahmed has become synonymous with elegance and sophistication in Pakistani fashion.",
                specializations: "Formal Wear, Evening Gowns, Luxury Pret, Unstitched Fabrics, Home Textiles",
                email: "info@gulahmed.com",
                phone: "+92 (21) 111-485-424",
                location: "Karachi, Pakistan",
                collections: [
                    { name: "Wedding Collection", image: "/Assets/img/gul ahmed weeding colllection.jpeg", collectionType: "wedding" },
                    { name: "Casual Collection", image: "/Assets/img/gul ahmed casual colllection.jpeg", collectionType: "casual" },
                    { name: "Winter Collection", image: "/Assets/img/khaadi winter collection.jpeg", collectionType: "winter" }
                ]
            },
            "Khaadi": {
                name: "Khaadi",
                specialty: "Street & Urban Fashion",
                image: "/img3.jpeg",
                coverImage: "https://picsum.photos/seed/khaadi-cover/800/400.jpg",
                about: "Khaadi, meaning 'hand-woven' in Urdu, started its journey in 1998 with a vision to revive the traditional craft of hand-woven fabrics. Today, Khaadi is a leading fashion retailer known for its vibrant colors, contemporary designs, and commitment to quality.",
                specializations: "Street Fashion, Urban Wear, Ready-to-Wear, Luxury Pret, Accessories",
                email: "info@khaadi.com",
                phone: "+92 (21) 111-542-434",
                location: "Karachi, Pakistan",
                collections: [
                    { name: "Winter Collection", image: "/Assets/img/khaadi winter collection.jpeg", collectionType: "winter" },
                    { name: "Party Collection", image: "/Assets/img/khaadi party collection.jpeg", collectionType: "party" },
                    { name: "Summer Collection", image: "/Assets/img/J.summer collection.jpeg", collectionType: "summer" }
                ]
            }
        };

        // Global variables
        let comparisonItems = [];
        let currentProductSelection = {
            productId: null,
            selectedSize: null,
            selectedFabric: null,
            calculatedPrice: null
        };
        let cart = [];
        let orders = [];
        let currentStylist = null;

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            displayProducts('all');
            checkLoginStatus();
            loadCart();
            loadOrders();
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Update active navigation link on scroll
            window.addEventListener('scroll', function() {
                const sections = document.querySelectorAll('section');
                const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
                
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (pageYOffset >= sectionTop - 100) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                });
            });
            
            // Handle login form submission
            document.getElementById('loginForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                
                if (email && password) {
                    const name = email.split('@')[0];
                    
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('userName', name);
                    localStorage.setItem('userEmail', email);
                    
                    updateLoginUI(name);
                    
                    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
                    loginModal.hide();
                    
                    this.reset();
                    showNotification('Login successful! Welcome back, ' + name);
                }
            });
            
            // Handle register form submission
            document.getElementById('registerForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('registerName').value;
                const email = document.getElementById('registerEmail').value;
                const password = document.getElementById('registerPassword').value;
                const phone = document.getElementById('registerPhone').value;
                const address = document.getElementById('registerAddress').value;
                const userType = document.getElementById('userType').value;
                
                if (name && email && password) {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('userName', name);
                    localStorage.setItem('userEmail', email);
                    localStorage.setItem('userPhone', phone);
                    localStorage.setItem('userAddress', address);
                    localStorage.setItem('userType', userType);
                    
                    updateLoginUI(name);
                    
                    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
                    loginModal.hide();
                    
                    this.reset();
                    showNotification('Registration successful! Welcome to StyleConnect, ' + name);
                }
            });
        });

        // Check login status on page load
        function checkLoginStatus() {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const userName = localStorage.getItem('userName');
            
            if (isLoggedIn && userName) {
                updateLoginUI(userName);
            }
        }

        // Update UI based on login status
        function updateLoginUI(userName) {
            const loginNavItem = document.getElementById('loginNavItem');
            const userNavItem = document.getElementById('userNavItem');
            const userNameSpan = document.getElementById('userName');
            
            loginNavItem.classList.add('d-none');
            userNavItem.classList.remove('d-none');
            userNameSpan.textContent = userName;
        }

        // Logout function
        function logout() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userPhone');
            localStorage.removeItem('userAddress');
            localStorage.removeItem('userType');
            
            const loginNavItem = document.getElementById('loginNavItem');
            const userNavItem = document.getElementById('userNavItem');
            
            loginNavItem.classList.remove('d-none');
            userNavItem.classList.add('d-none');
            
            showNotification('You have been logged out successfully.');
        }

        // View profile function
        function viewProfile() {
            const userName = localStorage.getItem('userName');
            const userEmail = localStorage.getItem('userEmail');
            const userPhone = localStorage.getItem('userPhone');
            const userAddress = localStorage.getItem('userAddress');
            const userType = localStorage.getItem('userType');
            
            document.getElementById('profileName').textContent = userName || 'User';
            document.getElementById('profileEmail').textContent = userEmail || 'user@example.com';
            document.getElementById('profileFullName').textContent = userName || 'John Doe';
            document.getElementById('profileUserEmail').textContent = userEmail || 'john.doe@example.com';
            document.getElementById('profilePhone').textContent = userPhone || '+1 (123) 456-7890';
            document.getElementById('profileAddress').textContent = userAddress || '123 Fashion Street, NY 10001';
            document.getElementById('profileUserType').textContent = userType ? userType.charAt(0).toUpperCase() + userType.slice(1) : 'User';
            document.getElementById('profileStylist').textContent = 'Junaid Jamshed';
            
            // Update statistics
            document.getElementById('orderCount').textContent = orders.length;
            document.getElementById('wishlistCount').textContent = '5';
            document.getElementById('reviewCount').textContent = '3';
            
            const profileModal = new bootstrap.Modal(document.getElementById('profileModal'));
            profileModal.show();
        }

        // View orders function
        function viewOrders() {
            const ordersList = document.getElementById('ordersList');
            
            if (orders.length === 0) {
                ordersList.innerHTML = `
                    <div class="text-center py-5">
                        <i class="bi bi-bag-x" style="font-size: 3rem; color: #6c757d;"></i>
                        <p class="mt-3">You haven't placed any orders yet.</p>
                        <button class="btn btn-primary-custom" onclick="document.getElementById('products').scrollIntoView({behavior: 'smooth'})">
                            Start Shopping
                        </button>
                    </div>
                `;
            } else {
                ordersList.innerHTML = orders.map(order => `
                    <div class="order-item">
                        <div class="order-header">
                            <div>
                                <div class="order-number">Order #${order.id}</div>
                                <div class="order-date">${order.date}</div>
                            </div>
                            <span class="order-status ${getStatusClass(order.status)}">${order.status}</span>
                        </div>
                        <div class="order-products">
                            ${order.products.map(product => `
                                <div class="order-product">
                                    <img src="${product.image}" alt="${product.name}">
                                    <div>
                                        <div>${product.name}</div>
                                        <small>Size: ${product.size} | Fabric: ${product.fabric}</small>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="order-total">
                            Total: $${order.total.toFixed(2)}
                        </div>
                    </div>
                `).join('');
            }
            
            const ordersModal = new bootstrap.Modal(document.getElementById('ordersModal'));
            ordersModal.show();
        }

        function getStatusClass(status) {
            switch(status.toLowerCase()) {
                case 'delivered': return 'status-delivered';
                case 'processing': return 'status-processing';
                case 'shipped': return 'status-shipped';
                default: return 'status-processing';
            }
        }

        // Edit profile function
        function editProfile() {
            showNotification('Edit profile feature coming soon!');
        }

        // Show notification
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'position-fixed top-0 start-50 translate-middle-x mt-3 alert alert-success alert-dismissible fade show';
            notification.style.zIndex = '9999';
            notification.innerHTML = `
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Calculate price based on size and fabric selection
        function calculatePrice(productId, size, fabric) {
            const product = products.find(p => p.id === productId);
            if (!product) return 0;
            
            const basePrice = product.options.basePrice;
            const sizeModifier = product.options.sizePriceModifiers[size] || 1.0;
            const fabricObj = product.options.fabrics.find(f => f.name === fabric);
            const fabricModifier = fabricObj ? fabricObj.priceModifier : 1.0;
            
            return (basePrice * sizeModifier * fabricModifier).toFixed(2);
        }

        // Display products based on filter
        function displayProducts(filter) {
            const productsContainer = document.getElementById('productsContainer');
            productsContainer.innerHTML = '';
            
            const filteredProducts = filter === 'all' 
                ? products 
                : products.filter(product => product.collection === filter);
            
            filteredProducts.forEach(product => {
                const defaultSize = product.options.sizes[0];
                const defaultFabric = product.options.fabrics[0].name;
                const defaultPrice = calculatePrice(product.id, defaultSize, defaultFabric);
                
                const productCard = document.createElement('div');
                productCard.className = 'col-md-4 mb-4';
                productCard.innerHTML = `
                    <div class="card product-card position-relative">
                        <span class="gender-badge ${product.gender}-badge">${product.gender === 'male' ? 'Men' : 'Women'}</span>
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5>${product.name}</h5>
                            <p class="product-price">$${defaultPrice}</p>
                            <p class="product-details">
                                <strong>Stylist:</strong> ${product.stylist}<br>
                                <strong>Available Sizes:</strong> ${product.options.sizes.join(', ')}<br>
                                <strong>Available Fabrics:</strong> ${product.options.fabrics.map(f => f.name).join(', ')}
                            </p>
                            <div class="price-range">
                                <small>Price range: $${(product.options.basePrice * 0.8).toFixed(2)} - $${(product.options.basePrice * 1.5).toFixed(2)}</small>
                            </div>
                            <div class="product-actions">
                                <button class="btn btn-compare" onclick="addToComparison(${product.id})">
                                    <i class="bi bi-arrow-left-right"></i> Compare
                                </button>
                                <button class="btn btn-download" onclick="downloadProductDetails(${product.id})">
                                    <i class="bi bi-download"></i> Details
                                </button>
                            </div>
                            <button class="btn btn-primary-custom w-100 mt-2" onclick="viewProductDetails(${product.id})">
                                View Details
                            </button>
                        </div>
                    </div>
                `;
                productsContainer.appendChild(productCard);
            });
        }

        // Filter products
        function filterProducts(collection) {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            displayProducts(collection);
        }

        // Filter by collection from collection cards
        function filterCollection(collection) {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`.filter-btn[onclick="filterProducts('${collection}')"]`).classList.add('active');
            
            displayProducts(collection);
        }

        // Add product to comparison
        function addToComparison(productId) {
            const product = products.find(p => p.id === productId);
            
            if (comparisonItems.find(item => item.id === productId)) {
                alert('This product is already in the comparison list.');
                return;
            }
            
            if (comparisonItems.length < 3) {
                const defaultSize = product.options.sizes[0];
                const defaultFabric = product.options.fabrics[0].name;
                const defaultPrice = calculatePrice(product.id, defaultSize, defaultFabric);
                
                comparisonItems.push({
                    ...product,
                    selectedSize: defaultSize,
                    selectedFabric: defaultFabric,
                    price: defaultPrice
                });
                updateComparisonTable();
            } else {
                alert('You can compare up to 3 products at a time.');
            }
        }

        // Update comparison table
        function updateComparisonTable() {
            const comparisonTable = document.getElementById('comparisonTable');
            const comparisonTableBody = document.getElementById('comparisonTableBody');
            
            if (comparisonItems.length > 0) {
                comparisonTable.style.display = 'block';
                comparisonTableBody.innerHTML = '';
                
                comparisonItems.forEach(product => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td><img src="${product.image}" alt="${product.name}"></td>
                        <td>${product.name}</td>
                        <td>${product.stylist}</td>
                        <td>$${product.price}</td>
                        <td>${product.selectedSize}</td>
                        <td>${product.selectedFabric}</td>
                        <td>
                            <button class="btn btn-sm btn-danger" onclick="removeFromComparison(${product.id})">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    `;
                    comparisonTableBody.appendChild(row);
                });
            } else {
                comparisonTable.style.display = 'none';
            }
        }

        // Remove product from comparison
        function removeFromComparison(productId) {
            comparisonItems = comparisonItems.filter(item => item.id !== productId);
            updateComparisonTable();
        }

        // Clear comparison
        function clearComparison() {
            comparisonItems = [];
            updateComparisonTable();
        }

        // View product details
        function viewProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            
            currentProductSelection = {
                productId: productId,
                selectedSize: product.options.sizes[0],
                selectedFabric: product.options.fabrics[0].name,
                calculatedPrice: calculatePrice(productId, product.options.sizes[0], product.options.fabrics[0].name)
            };
            
            document.getElementById('modalProductImage').src = product.image;
            document.getElementById('modalProductName').textContent = product.name;
            document.getElementById('modalProductStylist').textContent = product.stylist;
            document.getElementById('modalProductCollection').textContent = product.collection;
            document.getElementById('modalProductDescription').textContent = product.description;
            
            const sizeOptions = document.getElementById('sizeOptions');
            sizeOptions.innerHTML = '';
            product.options.sizes.forEach(size => {
                const sizeOption = document.createElement('div');
                sizeOption.className = 'selection-option';
                if (size === currentProductSelection.selectedSize) {
                    sizeOption.classList.add('selected');
                }
                sizeOption.textContent = size;
                sizeOption.onclick = function() {
                    selectSize(size);
                };
                sizeOptions.appendChild(sizeOption);
            });
            
            const fabricOptions = document.getElementById('fabricOptions');
            fabricOptions.innerHTML = '';
            product.options.fabrics.forEach(fabric => {
                const fabricOption = document.createElement('div');
                fabricOption.className = 'selection-option';
                if (fabric.name === currentProductSelection.selectedFabric) {
                    fabricOption.classList.add('selected');
                }
                fabricOption.textContent = fabric.name;
                fabricOption.onclick = function() {
                    selectFabric(fabric.name);
                };
                fabricOptions.appendChild(fabricOption);
            });
            
            updatePriceDisplay();
            
            const productModal = new bootstrap.Modal(document.getElementById('productDetailModal'));
            productModal.show();
        }

        // Select size in product detail modal
        function selectSize(size) {
            currentProductSelection.selectedSize = size;
            
            document.querySelectorAll('#sizeOptions .selection-option').forEach(option => {
                option.classList.remove('selected');
                if (option.textContent === size) {
                    option.classList.add('selected');
                }
            });
            
            currentProductSelection.calculatedPrice = calculatePrice(
                currentProductSelection.productId,
                currentProductSelection.selectedSize,
                currentProductSelection.selectedFabric
            );
            
            updatePriceDisplay();
        }

        // Select fabric in product detail modal
        function selectFabric(fabric) {
            currentProductSelection.selectedFabric = fabric;
            
            document.querySelectorAll('#fabricOptions .selection-option').forEach(option => {
                option.classList.remove('selected');
                if (option.textContent === fabric) {
                    option.classList.add('selected');
                }
            });
            
            currentProductSelection.calculatedPrice = calculatePrice(
                currentProductSelection.productId,
                currentProductSelection.selectedSize,
                currentProductSelection.selectedFabric
            );
            
            updatePriceDisplay();
        }

        // Update price display in modal
        function updatePriceDisplay() {
            document.getElementById('modalProductPrice').textContent = `$${currentProductSelection.calculatedPrice}`;
        }

        // Add to cart function
        function addToCart() {
            const product = products.find(p => p.id === currentProductSelection.productId);
            
            const cartItem = {
                id: Date.now(),
                productId: product.id,
                name: product.name,
                image: product.image,
                stylist: product.stylist,
                size: currentProductSelection.selectedSize,
                fabric: currentProductSelection.selectedFabric,
                price: parseFloat(currentProductSelection.calculatedPrice),
                quantity: 1
            };
            
            // Check if item already exists in cart
            const existingItem = cart.find(item => 
                item.productId === cartItem.productId && 
                item.size === cartItem.size && 
                item.fabric === cartItem.fabric
            );
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(cartItem);
            }
            
            saveCart();
            updateCartUI();
            
            const productModal = bootstrap.Modal.getInstance(document.getElementById('productDetailModal'));
            productModal.hide();
            
            showNotification(`${product.name} added to cart!`);
        }

        // Cart functions
        function toggleCart() {
            const cartSidebar = document.getElementById('cartSidebar');
            const cartOverlay = document.getElementById('cartOverlay');
            
            cartSidebar.classList.toggle('show');
            cartOverlay.classList.toggle('show');
        }

        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        function loadCart() {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
                updateCartUI();
            }
        }

        function updateCartUI() {
            const cartCount = document.getElementById('cartCount');
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            
            cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="text-center py-5">
                        <i class="bi bi-cart-x" style="font-size: 3rem; color: #6c757d;"></i>
                        <p class="mt-3">Your cart is empty</p>
                    </div>
                `;
                cartTotal.textContent = '$0.00';
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-info">
                                Size: ${item.size} | Fabric: ${item.fabric} | Qty: ${item.quantity}
                            </div>
                            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                        <i class="bi bi-trash cart-remove" onclick="removeFromCart(${item.id})"></i>
                    </div>
                `).join('');
                
                const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                cartTotal.textContent = `$${total.toFixed(2)}`;
            }
        }

        function removeFromCart(itemId) {
            cart = cart.filter(item => item.id !== itemId);
            saveCart();
            updateCartUI();
            showNotification('Item removed from cart');
        }

        function clearCart() {
            if (confirm('Are you sure you want to clear your cart?')) {
                cart = [];
                saveCart();
                updateCartUI();
                showNotification('Cart cleared');
            }
        }

        function checkout() {
            if (cart.length === 0) {
                showNotification('Your cart is empty');
                return;
            }
            
            // Check if user is logged in
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            if (!isLoggedIn) {
                showNotification('Please login to checkout');
                document.getElementById('loginModal').click();
                return;
            }
            
            // Create order
            const order = {
                id: Date.now(),
                date: new Date().toLocaleDateString(),
                status: 'Processing',
                products: cart.map(item => ({
                    name: item.name,
                    image: item.image,
                    size: item.size,
                    fabric: item.fabric,
                    quantity: item.quantity
                })),
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
            };
            
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Clear cart
            cart = [];
            saveCart();
            updateCartUI();
            toggleCart();
            
            showNotification('Order placed successfully! Order #' + order.id);
        }

        function loadOrders() {
            const savedOrders = localStorage.getItem('orders');
            if (savedOrders) {
                orders = JSON.parse(savedOrders);
            }
        }

        // Download product details (simulated)
        function downloadProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            
            const defaultSize = product.options.sizes[0];
            const defaultFabric = product.options.fabrics[0].name;
            const defaultPrice = calculatePrice(productId, defaultSize, defaultFabric);
            
            const details = `
Product Name: ${product.name}
Stylist: ${product.stylist}
Collection: ${product.collection}
Gender: ${product.gender}
Base Price: $${product.options.basePrice}
Available Sizes: ${product.options.sizes.join(', ')}
Available Fabrics: ${product.options.fabrics.map(f => `${f.name} (x${f.priceModifier})`).join(', ')}
Price Range: $${(product.options.basePrice * 0.8).toFixed(2)} - $${(product.options.basePrice * 1.5).toFixed(2)}
Description: ${product.description}
            `;
            
            const blob = new Blob([details], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${product.name.replace(/\s+/g, '_')}_Details.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            showNotification(`Downloaded details for ${product.name}`);
        }

        // View stylist profile
        function viewStylistProfile(stylistName) {
            currentStylist = stylists[stylistName];
            
            if (!currentStylist) {
                showNotification('Stylist information not available');
                return;
            }
            
            // Populate stylist profile modal
            document.getElementById('stylistProfileCover').src = currentStylist.coverImage;
            document.getElementById('stylistProfileAvatar').src = currentStylist.image;
            document.getElementById('stylistProfileName').textContent = currentStylist.name;
            document.getElementById('stylistProfileSpecialty').textContent = `Specialist: ${currentStylist.specialty}`;
            document.getElementById('stylistProfileAbout').textContent = currentStylist.about;
            document.getElementById('stylistProfileSpecializations').textContent = currentStylist.specializations;
            document.getElementById('stylistProfileEmail').textContent = currentStylist.email;
            document.getElementById('stylistProfilePhone').textContent = currentStylist.phone;
            document.getElementById('stylistProfileLocation').textContent = currentStylist.location;
            
            // Populate collections with clickable functionality
            const collectionsContainer = document.getElementById('stylistProfileCollections');
            collectionsContainer.innerHTML = currentStylist.collections.map(collection => `
                <div class="stylist-collection-item" onclick="exploreCollection('${collection.collectionType}', '${currentStylist.name}')">
                    <img src="${collection.image}" alt="${collection.name}">
                    <div>
                        <h6>${collection.name}</h6>
                        <p>Click to explore</p>
                    </div>
                </div>
            `).join('');
            
            // Show modal
            const stylistProfileModal = new bootstrap.Modal(document.getElementById('stylistProfileModal'));
            stylistProfileModal.show();
        }

        // Explore collection from stylist profile
        function exploreCollection(collectionType, stylistName) {
            // Close the stylist profile modal
            const stylistProfileModal = bootstrap.Modal.getInstance(document.getElementById('stylistProfileModal'));
            stylistProfileModal.hide();
            
            // Scroll to products section
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            
            // Filter products by collection and stylist
            displayProductsByCollectionAndStylist(collectionType, stylistName);
            
            // Update filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add a custom filter button for the collection
            const filterSection = document.querySelector('.filter-section');
            const customFilter = document.createElement('button');
            customFilter.className = 'filter-btn active';
            customFilter.textContent = `${collectionType.charAt(0).toUpperCase() + collectionType.slice(1)} by ${stylistName}`;
            customFilter.onclick = function() {
                displayProductsByCollectionAndStylist(collectionType, stylistName);
                
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                customFilter.classList.add('active');
            };
            
            // Check if custom filter already exists
            const existingFilter = Array.from(filterSection.querySelectorAll('.filter-btn')).find(btn => 
                btn.textContent === `${collectionType.charAt(0).toUpperCase() + collectionType.slice(1)} by ${stylistName}`
            );
            if (!existingFilter) {
                filterSection.appendChild(customFilter);
            } else {
                existingFilter.classList.add('active');
            }
            
            showNotification(`Showing ${collectionType} collection by ${stylistName}`);
        }

        // Display products by collection and stylist
        function displayProductsByCollectionAndStylist(collectionType, stylistName) {
            const productsContainer = document.getElementById('productsContainer');
            productsContainer.innerHTML = '';
            
            const filteredProducts = products.filter(product => 
                product.collection === collectionType && product.stylist === stylistName
            );
            
            if (filteredProducts.length === 0) {
                productsContainer.innerHTML = `
                    <div class="col-12 text-center py-5">
                        <i class="bi bi-bag-x" style="font-size: 3rem; color: #6c757d;"></i>
                        <p class="mt-3">No products available in this collection from this stylist.</p>
                    </div>
                `;
                return;
            }
            
            filteredProducts.forEach(product => {
                const defaultSize = product.options.sizes[0];
                const defaultFabric = product.options.fabrics[0].name;
                const defaultPrice = calculatePrice(product.id, defaultSize, defaultFabric);
                
                const productCard = document.createElement('div');
                productCard.className = 'col-md-4 mb-4';
                productCard.innerHTML = `
                    <div class="card product-card position-relative">
                        <span class="gender-badge ${product.gender}-badge">${product.gender === 'male' ? 'Men' : 'Women'}</span>
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5>${product.name}</h5>
                            <p class="product-price">$${defaultPrice}</p>
                            <p class="product-details">
                                <strong>Stylist:</strong> ${product.stylist}<br>
                                <strong>Available Sizes:</strong> ${product.options.sizes.join(', ')}<br>
                                <strong>Available Fabrics:</strong> ${product.options.fabrics.map(f => f.name).join(', ')}
                            </p>
                            <div class="price-range">
                                <small>Price range: $${(product.options.basePrice * 0.8).toFixed(2)} - $${(product.options.basePrice * 1.5).toFixed(2)}</small>
                            </div>
                            <div class="product-actions">
                                <button class="btn btn-compare" onclick="addToComparison(${product.id})">
                                    <i class="bi bi-arrow-left-right"></i> Compare
                                </button>
                                <button class="btn btn-download" onclick="downloadProductDetails(${product.id})">
                                    <i class="bi bi-download"></i> Details
                                </button>
                            </div>
                            <button class="btn btn-primary-custom w-100 mt-2" onclick="viewProductDetails(${product.id})">
                                View Details
                            </button>
                        </div>
                    </div>
                `;
                productsContainer.appendChild(productCard);
            });
        }

        // Book stylist consultation
        function bookStylist() {
            if (!currentStylist) return;
            
            // Check if user is logged in
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            if (!isLoggedIn) {
                showNotification('Please login to book a consultation');
                document.getElementById('loginModal').click();
                return;
            }
            
            showNotification(`Booking consultation with ${currentStylist.name}. You will receive a confirmation email shortly.`);
            
            // Close modal
            const stylistProfileModal = bootstrap.Modal.getInstance(document.getElementById('stylistProfileModal'));
            stylistProfileModal.hide();
        }

        // View stylist products
        function viewStylistProducts() {
            if (!currentStylist) return;
            
            // Filter products by stylist
            const stylistProducts = products.filter(p => p.stylist === currentStylist.name);
            
            if (stylistProducts.length > 0) {
                // Scroll to products section
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
                
                // Filter products by stylist
                displayProductsByStylist(currentStylist.name);
                
                // Close modal
                const stylistProfileModal = bootstrap.Modal.getInstance(document.getElementById('stylistProfileModal'));
                stylistProfileModal.hide();
                
                showNotification(`Showing products by ${currentStylist.name}`);
            } else {
                showNotification(`No products available from ${currentStylist.name}`);
            }
        }

        // Display products by stylist
        function displayProductsByStylist(stylistName) {
            const productsContainer = document.getElementById('productsContainer');
            productsContainer.innerHTML = '';
            
            const stylistProducts = products.filter(product => product.stylist === stylistName);
            
            if (stylistProducts.length === 0) {
                productsContainer.innerHTML = `
                    <div class="col-12 text-center py-5">
                        <i class="bi bi-bag-x" style="font-size: 3rem; color: #6c757d;"></i>
                        <p class="mt-3">No products available from this stylist.</p>
                    </div>
                `;
                return;
            }
            
            stylistProducts.forEach(product => {
                const defaultSize = product.options.sizes[0];
                const defaultFabric = product.options.fabrics[0].name;
                const defaultPrice = calculatePrice(product.id, defaultSize, defaultFabric);
                
                const productCard = document.createElement('div');
                productCard.className = 'col-md-4 mb-4';
                productCard.innerHTML = `
                    <div class="card product-card position-relative">
                        <span class="gender-badge ${product.gender}-badge">${product.gender === 'male' ? 'Men' : 'Women'}</span>
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5>${product.name}</h5>
                            <p class="product-price">$${defaultPrice}</p>
                            <p class="product-details">
                                <strong>Stylist:</strong> ${product.stylist}<br>
                                <strong>Available Sizes:</strong> ${product.options.sizes.join(', ')}<br>
                                <strong>Available Fabrics:</strong> ${product.options.fabrics.map(f => f.name).join(', ')}
                            </p>
                            <div class="price-range">
                                <small>Price range: $${(product.options.basePrice * 0.8).toFixed(2)} - $${(product.options.basePrice * 1.5).toFixed(2)}</small>
                            </div>
                            <div class="product-actions">
                                <button class="btn btn-compare" onclick="addToComparison(${product.id})">
                                    <i class="bi bi-arrow-left-right"></i> Compare
                                </button>
                                <button class="btn btn-download" onclick="downloadProductDetails(${product.id})">
                                    <i class="bi bi-download"></i> Details
                                </button>
                            </div>
                            <button class="btn btn-primary-custom w-100 mt-2" onclick="viewProductDetails(${product.id})">
                                View Details
                            </button>
                        </div>
                    </div>
                `;
                productsContainer.appendChild(productCard);
            });
            
            // Update filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add a custom filter button for the stylist
            const filterSection = document.querySelector('.filter-section');
            const customFilter = document.createElement('button');
            customFilter.className = 'filter-btn active';
            customFilter.textContent = stylistName;
            customFilter.onclick = function() {
                displayProductsByStylist(stylistName);
                
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                customFilter.classList.add('active');
            };
            
            // Check if custom filter already exists
            const existingFilter = Array.from(filterSection.querySelectorAll('.filter-btn')).find(btn => btn.textContent === stylistName);
            if (!existingFilter) {
                filterSection.appendChild(customFilter);
            } else {
                existingFilter.classList.add('active');
            }
        }