
"use client";

import React, { useState } from "react";

interface ProductData {
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  collection: string;
  inventory: number;
  images: File[];
  variations: { option: string; values: string[] }[];
  selfShipping: boolean;
  instaShopShipping: boolean;
}

const EditProduct: React.FC<{ product: ProductData }> = ({ product }) => {
  const [productData, setProductData] = useState<ProductData>(product);

  const handleInputChange = (key: keyof ProductData, value: any) => {
    setProductData((prev) => ({ ...prev, [key]: value }));
  };

  const handleVariationChange = (
    index: number,
    key: string,
    value: string | string[]
  ) => {
    const updatedVariations = [...productData.variations];
    updatedVariations[index][key as keyof typeof updatedVariations[0]] = value;
    setProductData({ ...productData, variations: updatedVariations });
  };

  const saveChanges = () => {
    console.log("Updated Product Data:", productData);
    // Logic to update product (e.g., API call)
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>

      <div className="mt-4">
        <label className="block mb-2">Product Title</label>
        <input
          type="text"
          value={productData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2">Product Description</label>
        <textarea
          value={productData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block mb-2">Price</label>
          <input
            type="number"
            value={productData.price}
            onChange={(e) => handleInputChange("price", parseFloat(e.target.value))}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-2">Old Price</label>
          <input
            type="number"
            value={productData.oldPrice}
            onChange={(e) =>
              handleInputChange("oldPrice", parseFloat(e.target.value))
            }
            className="w-full border rounded p-2"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block mb-2">Product Collection</label>
        <input
          type="text"
          value={productData.collection}
          onChange={(e) => handleInputChange("collection", e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2">Inventory Stocks</label>
        <input
          type="number"
          value={productData.inventory}
          onChange={(e) =>
            handleInputChange("inventory", parseInt(e.target.value, 10))
          }
          className="w-full border rounded p-2"
        />
      </div>

      {/* Variations */}
      {productData.variations.map((variation, index) => (
        <div key={index} className="mt-4">
          <label className="block mb-2">
            Option {index + 1}: {variation.option}
          </label>
          <input
            type="text"
            value={variation.option}
            onChange={(e) =>
              handleVariationChange(index, "option", e.target.value)
            }
            className="w-full border rounded p-2"
          />
          <label className="block mb-2 mt-2">Values</label>
          <input
            type="text"
            value={variation.values.join(", ")}
            onChange={(e) =>
              handleVariationChange(index, "values", e.target.value.split(", "))
            }
            className="w-full border rounded p-2"
          />
        </div>
      ))}

      {/* Shipping Options */}
      <div className="mt-4">
        <label className="block mb-2">Shipping Options</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={productData.selfShipping}
              onChange={(e) =>
                handleInputChange("selfShipping", e.target.checked)
              }
            />
            Self Shipping
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={productData.instaShopShipping}
              onChange={(e) =>
                handleInputChange("instaShopShipping", e.target.checked)
              }
            />
            InstaShop Shipping
          </label>
        </div>
      </div>

      {/* Save Button */}
      <button
        className="w-full bg-blue-600 text-white rounded-full px-6 py-3 mt-6"
        onClick={saveChanges}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditProduct;
