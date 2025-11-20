# 🛍️ Laioutr OXID Integration

This repository contains the official OXID eShop integration for the **Laioutr** frontend framework. This connector provides a focused set of features to connect your Laioutr application with an OXID backend, enabling essential e-commerce functionality.

This connector handles cart operations, category navigation, and product retrieval with variant support.

---

## ✨ Features

This integration provides a robust bridge to OXID, supporting the following features:

### 🛒 Cart Management

- **Get Current Cart:** Retrieve the active shopping cart details, including all line items and totals.
- **Add Item to Cart:** Seamlessly add products and variants to the user's active cart.

### 🗂️ Category Navigation

- **Category Tree by Alias:** Retrieve a nested category structure using a specific category alias (key), ideal for building dynamic navigation menus.

### 📦 Product & Catalog

- **Products by Category Slug:** Fetch a list of products assigned to a specific category using its SEO URL slug.
- **Product Variants:** Retrieve available variants (e.g., size, color, dimensions) for specific products.

---

## 🚀 Installation

```bash
# Using npm
npm install @laioutr/app-oxid

# Using yarn
yarn add @laioutr/app-oxid
```

---

## ⚙️ Configuration & Usage

To get started, you need to configure the connector with your OXID API credentials. We recommend using environment variables

```typescript
defineNuxtConfig({
  /* [...] */
  modules: ['@laioutr/app-oxid'],
  /* [...] */
  '@laioutr/app-oxid': {
    graphqlURL: import.meta.env.OXID_GRAPHQL_URL,
    user: import.meta.env.OXID_USER,
    password: import.meta.env.OXID_PASSWORD,
    imagesConfig: {
      iconImageSize: { width: 60, height: 60 },
      zoomImageSize: { width: 600, height: 600 },
    },
  },
  /* [...] */
});
```

---

## 🤝 Contributing

Contributions are welcome\! Please feel free to submit a Pull Request or open an issue for bugs, feature requests, or improvements.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
