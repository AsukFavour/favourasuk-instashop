"use client";

import React from "react";

interface ProductData {
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  images: string[];
  variations: { option: string; values: string[] }[];
  selfShipping: boolean;
  instaShopShipping: boolean;
}

const PreviewProduct: React.FC<{ product: ProductData }> = ({ product }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{product.title}</h2>

      <div className="flex gap-4 mb-6">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            className="w-32 h-32 object-cover"
          />
        ))}
      </div>

      <p className="mb-4">{product.description}</p>

      <div className="flex gap-4 mb-6">
        <div>
          <span className="text-lg font-bold">Price: </span>
          <span className="text-green-600">${product.price}</span>
        </div>
        <div>
          <span className="text-lg font-bold">Old Price: </span>
          <span className="text-gray-500 line-through">${product.oldPrice}</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Variations</h3>
        {product.variations.map((variation, index) => (
          <div key={index} className="mb-4">
            <strong>{variation.option}:</strong> {variation.values.join(", ")}
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">Shipping Options</h3>
        <p>Self Shipping: {product.selfShipping ? "Yes" : "No"}</p>
        <p>InstaShop Shipping: {product.instaShopShipping ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default PreviewProduct;
