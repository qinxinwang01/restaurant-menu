   // src/App.js
   import React from 'react';
   import MenuFilter from './MenuFilter';
   import './App.css'; // 确保引入 CSS 文件

   const App = () => {
       return (
           <div className="container">
               <h1>Restaurant Menu</h1>
               <MenuFilter />
           </div>
       );
   };

   export default App;