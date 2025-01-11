# Product Management Application

## Overview
This project is a **Product Management Application** built with **Next.js** (app directory), **TypeScript**, and **Tailwind CSS**. It allows users to create, edit, and preview products with a modern and user-friendly interface. The application supports dynamic routing for navigation and leverages reusable components for efficiency and maintainability.

---

## Features
- **Create Product**: Add new products with details such as title, description, price, inventory, and variations.
- **Edit Product**: Modify existing product details dynamically.
- **Preview Product**: View the product as it would appear to end users.
- **Responsive Design**: Fully responsive and mobile-friendly interface.
- **Reusable Components**: Clean and modular architecture for scalability.
- **Tailwind CSS**: Rapid styling with a utility-first CSS framework.

---

## Technologies Used
- **Next.js**: Framework for server-rendered React applications.
- **TypeScript**: Static typing for robust development.
- **Tailwind CSS**: Utility-first CSS for rapid UI development.
- **ESLint & Prettier**: Code quality and formatting tools.

---

## Project Structure
```
app/
  products/
    create/
      CreateProduct.tsx
      page.tsx
    edit/
      EditProduct.tsx
      page.tsx
    preview/
      PreviewProduct.tsx
      page.tsx
components/
  ProductForm.tsx
  VariationForm.tsx
  PreviewCard.tsx
styles/
  globals.css
```

### Key Files
- **`app/products/create/CreateProduct.tsx`**: Component for creating a new product.
- **`app/products/edit/EditProduct.tsx`**: Component for editing an existing product.
- **`app/products/preview/PreviewProduct.tsx`**: Component for previewing a product.
- **`components/ProductForm.tsx`**: Shared form logic for create and edit pages.
- **`components/VariationForm.tsx`**: Handles product variations like size and color.
- **`components/PreviewCard.tsx`**: Displays a product preview card.

---

## Getting Started

### Prerequisites
- **Node.js**: >= 16.x
- **npm**: >= 7.x
- **Git**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/product-management-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd product-management-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Usage
### Navigation
- **Create Product**: Navigate to `/products/create` to add a new product.
- **Edit Product**: Navigate to `/products/edit?id=PRODUCT_ID` to edit a product. Replace `PRODUCT_ID` with the desired product ID.
- **Preview Product**: Navigate to `/products/preview?id=PRODUCT_ID` to view a product. Replace `PRODUCT_ID` with the desired product ID.

### Adding Routes
If you want to add custom routes or features, you can update the `page.tsx` files or leverage `useRouter` for programmatic navigation.

---

## Scripts
- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm run start`**: Start the production server.
- **`npm run lint`**: Run ESLint to check code quality.

---

## Contribution Guidelines
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.



## Contact
For questions or feedback, reach out at [favourasuk@gmail.com].

