// src/app/product/create.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateProductPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    oldPrice: '',
    collection: '',
    inventory: '',
    images: [],
    variations: [],
    shipping: {
      selfShipping: false,
      instaShopShipping: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleShippingChange = (type) => {
    setFormData({
      ...formData,
      shipping: {
        ...formData.shipping,
        [type]: !formData.shipping[type],
      },
    });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    router.push('/product/preview');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Create a Product</h1>

      {/* Basic Details */}
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Old Price</label>
        <input
          type="number"
          name="oldPrice"
          value={formData.oldPrice}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Collection</label>
        <input
          type="text"
          name="collection"
          value={formData.collection}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Inventory */}
      <div className="mb-4">
        <label className="block text-gray-700">Inventory Stock</label>
        <input
          type="number"
          name="inventory"
          value={formData.inventory}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Images */}
      <div className="mb-4">
        <label className="block text-gray-700">Product Images</label>
        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          className="border p-2 w-full rounded"
        />
      </div>

      {/* Shipping */}
      <div className="mb-4">
        <label className="block text-gray-700">Shipping Options</label>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.shipping.selfShipping}
              onChange={() => handleShippingChange('selfShipping')}
              className="mr-2"
            />
            Self Shipping
          </label>
          <label className="flex items-center mt-2">
            <input
              type="checkbox"
              checked={formData.shipping.instaShopShipping}
              onChange={() => handleShippingChange('instaShopShipping')}
              className="mr-2"
            />
            InstaShop Shipping
          </label>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Save and Preview
      </button>
    </div>
  );
};

export default CreateProductPage;
