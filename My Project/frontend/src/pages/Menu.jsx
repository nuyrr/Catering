// import React, { useState } from 'react';
// import { jsPDF } from 'jspdf';  // Import jsPDF for PDF generation

// // Import category images
// import startersImg from '../assets/Soup.jpg';
// import mainCourseImg from '../assets/indianfood.jpg';
// import dessertsImg from '../assets/desert.jpg';
// import drinksImg from '../assets/Coke.jpg';

// const Menu = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [expandedItem, setExpandedItem] = useState(null);

//   const categories = [
//     { name: 'Starters', id: 'starters', img: startersImg },
//     { name: 'Main Course', id: 'main_course', img: mainCourseImg },
//     { name: 'Desserts', id: 'desserts', img: dessertsImg },
//     { name: 'Drinks', id: 'drinks', img: drinksImg },
//   ];

//   const menuItems = {
//     starters: {
//       vegetarian: [
//         { name: 'Bruschetta', description: 'Toasted bread with tomatoes and basil', details: ['Tomato', 'Garlic', 'Basil'], price: '$8', image: startersImg },
//         { name: 'Garlic Bread', description: 'Crispy bread with garlic butter', details: ['Garlic', 'Butter', 'Parsley'], price: '$5', image: startersImg },
//         { name: 'Vegetable Soup', description: 'Hearty vegetable soup', details: ['Carrots', 'Celery', 'Tomatoes', 'Onions'], price: '$6', image: startersImg },
//       ],
//       non_vegetarian: [
//         { name: 'Stuffed Mushrooms', description: 'Mushrooms stuffed with cheese and herbs', details: ['Mushrooms', 'Cheese', 'Herbs'], price: '$10', image: startersImg },
//         { name: 'Chicken Wings', description: 'Spicy grilled chicken wings', details: ['Chicken', 'Spices', 'Barbecue Sauce'], price: '$12', image: startersImg },
//         { name: 'Spring Rolls', description: 'Crispy rolls filled with veggies and meat', details: ['Cabbage', 'Chicken', 'Soy Sauce'], price: '$9', image: startersImg },
//       ],
//     },
//     main_course: {
//       vegetarian: [
//         { name: 'Vegetarian Lasagna', description: 'Layers of pasta with vegetables and cheese', details: ['Pasta', 'Vegetables', 'Cheese'], price: '$14', image: mainCourseImg },
//         { name: 'Paneer Tikka', description: 'Grilled cubes of paneer marinated in spices', details: ['Paneer', 'Spices', 'Yogurt'], price: '$13', image: mainCourseImg },
//       ],
//       non_vegetarian: [
//         { name: 'Grilled Chicken', description: 'Grilled chicken breast with herbs', details: ['Chicken', 'Herbs', 'Garlic'], price: '$16', image: mainCourseImg },
//         { name: 'Steak and Fries', description: 'Grilled steak served with crispy fries', details: ['Beef', 'Potatoes', 'Herbs'], price: '$20', image: mainCourseImg },
//       ],
//     },
//     desserts: {
//       all: [
//         { name: 'Chocolate Cake', description: 'Rich chocolate cake with icing', details: ['Chocolate', 'Flour', 'Sugar'], price: '$7', image: dessertsImg },
//         { name: 'Ice Cream', description: 'Creamy ice cream in various flavors', details: ['Milk', 'Sugar', 'Vanilla'], price: '$5', image: dessertsImg },
//       ],
//     },
//     drinks: {
//       all: [
//         { name: 'Lemonade', description: 'Freshly squeezed lemon juice with sugar', details: ['Lemon', 'Sugar', 'Water'], price: '$4', image: drinksImg },
//         { name: 'Mojito', description: 'Mint, lime, and rum mixed with soda', details: ['Mint', 'Lime', 'Rum', 'Soda'], price: '$6', image: drinksImg },
//       ],
//     },
//   };

//   const handleCategoryClick = (categoryId) => {
//     setSelectedCategory(categoryId);
//     setExpandedItem(null); // Reset expanded item
//   };

//   const toggleExpandItem = (itemName) => {
//     if (expandedItem === itemName) {
//       setExpandedItem(null); // Close if it's already open
//     } else {
//       setExpandedItem(itemName); // Open the item
//     }
//   };

//   // Function to generate PDF
//   const generatePDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.text('Menu', 20, 20);
    
//     categories.forEach((category, index) => {
//       doc.setFontSize(14);
//       doc.text(category.name, 20, 30 + (index * 10));
      
//       menuItems[category.id]?.all?.forEach((item, itemIndex) => {
//         doc.setFontSize(12);
//         doc.text(`- ${item.name}: ${item.price}`, 20, 40 + (index * 30) + (itemIndex * 10));
//       });
//     });

//     doc.save('menu.pdf');
//   };

//   return (
//     <div className="bg-gray-50 text-black min-h-screen font-sans">
//       <div className="max-w-7xl mx-auto py-8">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Menu</h2>

//         {/* Category Images (Clickable) */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 mb-6">
//           {categories.map((category) => (
//             <div
//               key={category.id}
//               onClick={() => handleCategoryClick(category.id)}
//               className="relative cursor-pointer text-xl font-semibold text-center group transition-all duration-300 ease-in-out transform hover:scale-105"
//             >
//               <img
//                 src={category.img}
//                 alt={category.name}
//                 className="w-40 h-40 object-cover rounded-lg mb-4 mx-auto transition duration-300 ease-in-out group-hover:scale-110 shadow-lg"
//               />
//               <span className="block text-gray-700">{category.name}</span>
//             </div>
//           ))}
//         </div>

//         {/* Download PDF Button */}
//         <div className="text-center mb-6">
//           <button
//             onClick={generatePDF}
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
//           >
//             Download Menu as PDF
//           </button>
//         </div>

//         {/* Display Items in Table Format for the Selected Category */}
//         {selectedCategory && (
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white text-black border border-gray-300 shadow-md rounded-lg">
//               <thead className="bg-blue-600 text-white">
//                 <tr>
//                   <th className="py-3 px-6 text-left">Dish Name</th>
//                   <th className="py-3 px-6 text-left">Description</th>
//                   <th className="py-3 px-6 text-left">Price</th>
//                   <th className="py-3 px-6 text-left">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Object.keys(menuItems[selectedCategory]).map((subcategory) => (
//                   <React.Fragment key={subcategory}>
//                     <tr>
//                       <td colSpan="4" className="py-3 px-6 text-center text-xl font-semibold text-white bg-blue-500">
//                         {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
//                       </td>
//                     </tr>
//                     {menuItems[selectedCategory][subcategory].map((item) => (
//                       <tr key={item.name} className="border-b border-gray-200">
//                         <td className="py-3 px-6">{item.name}</td>
//                         <td className="py-3 px-6">{item.description}</td>
//                         <td className="py-3 px-6">{item.price}</td>
//                         <td className="py-3 px-6">
//                           <button
//                             onClick={() => toggleExpandItem(item.name)}
//                             className="text-blue-500 hover:underline"
//                           >
//                             View
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Show Expanded Details for the Selected Item */}
//         {expandedItem && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white text-black p-6 rounded-lg w-96 shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4">{expandedItem}</h3>
//               <img src={menuItems[selectedCategory].all.find(item => item.name === expandedItem).image} alt={expandedItem} className="w-full h-48 object-cover mb-4 rounded-lg" />
//               <p className="mb-4">
//                 <strong>Description:</strong> {menuItems[selectedCategory].all.find(item => item.name === expandedItem).description}
//               </p>
//               <p><strong>Ingredients:</strong></p>
//               <ul className="list-disc pl-5 mb-4">
//                 {menuItems[selectedCategory].all.find(item => item.name === expandedItem).details.map((detail, index) => (
//                   <li key={index}>{detail}</li>
//                 ))}
//               </ul>
//               <button
//                 onClick={() => setExpandedItem(null)}
//                 className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Menu;
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

// Import category images
import startersImg from '../assets/Soup.jpg';
import mainCourseImg from '../assets/indianfood.jpg';
import dessertsImg from '../assets/desert.jpg';
import drinksImg from '../assets/Coke.jpg';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const categories = [
    { name: 'Starters', id: 'starters', img: startersImg },
    { name: 'Main Course', id: 'main_course', img: mainCourseImg },
    { name: 'Desserts', id: 'desserts', img: dessertsImg },
    { name: 'Drinks', id: 'drinks', img: drinksImg },
  ];

  const menuItems = {
    starters: {
      vegetarian: [
        { name: 'Bruschetta', description: 'Toasted bread with tomatoes and basil', details: ['Tomato', 'Garlic', 'Basil'], price: '$8', image: startersImg },
        { name: 'Garlic Bread', description: 'Crispy bread with garlic butter', details: ['Garlic', 'Butter', 'Parsley'], price: '$5', image: startersImg },
        { name: 'Vegetable Soup', description: 'Hearty vegetable soup', details: ['Carrots', 'Celery', 'Tomatoes', 'Onions'], price: '$6', image: startersImg },
      ],
      non_vegetarian: [
        { name: 'Stuffed Mushrooms', description: 'Mushrooms stuffed with cheese and herbs', details: ['Mushrooms', 'Cheese', 'Herbs'], price: '$10', image: startersImg },
        { name: 'Chicken Wings', description: 'Spicy grilled chicken wings', details: ['Chicken', 'Spices', 'Barbecue Sauce'], price: '$12', image: startersImg },
        { name: 'Spring Rolls', description: 'Crispy rolls filled with veggies and meat', details: ['Cabbage', 'Chicken', 'Soy Sauce'], price: '$9', image: startersImg },
      ],
    },
    main_course: {
      vegetarian: [
        { name: 'Vegetarian Lasagna', description: 'Layers of pasta with vegetables and cheese', details: ['Pasta', 'Vegetables', 'Cheese'], price: '$14', image: mainCourseImg },
        { name: 'Paneer Tikka', description: 'Grilled cubes of paneer marinated in spices', details: ['Paneer', 'Spices', 'Yogurt'], price: '$13', image: mainCourseImg },
      ],
      non_vegetarian: [
        { name: 'Grilled Chicken', description: 'Grilled chicken breast with herbs', details: ['Chicken', 'Herbs', 'Garlic'], price: '$16', image: mainCourseImg },
        { name: 'Steak and Fries', description: 'Grilled steak served with crispy fries', details: ['Beef', 'Potatoes', 'Herbs'], price: '$20', image: mainCourseImg },
      ],
    },
    desserts: {
      all: [
        { name: 'Chocolate Cake', description: 'Rich chocolate cake with icing', details: ['Chocolate', 'Flour', 'Sugar'], price: '$7', image: dessertsImg },
        { name: 'Ice Cream', description: 'Creamy ice cream in various flavors', details: ['Milk', 'Sugar', 'Vanilla'], price: '$5', image: dessertsImg },
      ],
    },
    drinks: {
      all: [
        { name: 'Lemonade', description: 'Freshly squeezed lemon juice with sugar', details: ['Lemon', 'Sugar', 'Water'], price: '$4', image: drinksImg },
        { name: 'Mojito', description: 'Mint, lime, and rum mixed with soda', details: ['Mint', 'Lime', 'Rum', 'Soda'], price: '$6', image: drinksImg },
      ],
    },
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setExpandedItem(null);
  };

  const toggleExpandItem = (itemName) => {
    if (expandedItem === itemName) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemName);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Menu', 20, 20);

    categories.forEach((category, index) => {
      doc.setFontSize(14);
      doc.text(category.name, 20, 30 + (index * 10));
      menuItems[category.id]?.all?.forEach((item, itemIndex) => {
        doc.setFontSize(12);
        doc.text(`- ${item.name}: ${item.price}`, 20, 40 + (index * 30) + (itemIndex * 10));
      });
    });

    doc.save('menu.pdf');
  };

  return (
    <div className="bg-white text-black min-h-screen font-sans px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Menu</h2>

        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="relative cursor-pointer text-xl font-medium text-center group transform transition-all duration-300 hover:scale-105 bg-gray-100 rounded-xl p-4 shadow-sm hover:bg-gray-200"
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-40 h-40 object-cover rounded-lg mx-auto mb-4 shadow-md"
              />
              <span className="block text-gray-800">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <div className="text-center mb-8">
          <button
            onClick={generatePDF}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Download Menu as PDF
          </button>
        </div>

        {/* Menu Table */}
        {selectedCategory && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-black border border-gray-300 shadow rounded-lg">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Dish Name</th>
                  <th className="py-3 px-6 text-left">Description</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(menuItems[selectedCategory]).map((subcategory) => (
                  <React.Fragment key={subcategory}>
                    <tr>
                      <td colSpan="4" className="py-3 px-6 text-center text-lg font-semibold text-white bg-gray-700">
                        {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
                      </td>
                    </tr>
                    {menuItems[selectedCategory][subcategory].map((item) => (
                      <tr key={item.name} className="border-b border-gray-200 hover:bg-gray-100 transition">
                        <td className="py-3 px-6">{item.name}</td>
                        <td className="py-3 px-6 text-gray-700">{item.description}</td>
                        <td className="py-3 px-6">{item.price}</td>
                        <td className="py-3 px-6">
                          <button
                            onClick={() => toggleExpandItem(item.name)}
                            className="text-black hover:underline"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal */}
        {expandedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white text-black p-6 rounded-lg w-96 shadow-lg relative">
              <button
                onClick={() => setExpandedItem(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
              <h3 className="text-2xl font-semibold mb-4">{expandedItem}</h3>
              <img
                src={
                  Object.values(menuItems[selectedCategory])
                    .flat()
                    .find(item => item.name === expandedItem)?.image
                }
                alt={expandedItem}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <p className="mb-4 text-gray-800">
                <strong>Description:</strong>{' '}
                {
                  Object.values(menuItems[selectedCategory])
                    .flat()
                    .find(item => item.name === expandedItem)?.description
                }
              </p>
              <p><strong>Ingredients:</strong></p>
              <ul className="list-disc pl-5 text-gray-700">
                {Object.values(menuItems[selectedCategory])
                  .flat()
                  .find(item => item.name === expandedItem)
                  ?.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
