import Item from "antd/es/list/Item";
import React from "react";
type BrandType ={
  name: string;
  icon: string;
  character: string;
}

const Brand = () => {

  const dataBrands = [
    { name: "Dell", icon: "fa-d", character: "D" },
    { name: "HP", icon: "fa-h", character: "H" },
    { name: "Lenovo", icon: "fa-l", character: "L" },
    { name: "Asus", icon: "fa-a", character: "A" },
    { name: "Acer", icon: "fa-a", character: "a" },
    { name: "MSI", icon: "fa-m", character: "m" },
    { name: "Apple", icon: "fa-apple", character: "A" },
    { name: "Gigabyte", icon: "fa-g", character: "g" },
    { name: "LG", icon: "fa-l", character: "l" },
    { name: "Samsung", icon: "fa-s", character: "s" },
  ];
  return(
    <div>
    <h1 className="text-center text-2xl font-bold mb-6">Thương Hiệu Nổi Bật</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {dataBrands.map((item:BrandType , index: number) =>(
        <div key={index}>
    <div className="rounded-xl p-6 text-center w-[200px] shadow-lg hover:shadow-lg/20 cursor-pointer hover:scale-105 transition-transform">
      <div className="bg-blue-600 text-white w-16 h-16 rounded-full mb-4 text-center flex justify-center items-center m-auto">
        <p className="font-bold text-2xl uppercase">{item.character}</p>
      </div>
      <p className="font-bold">{item.name}</p>
    </div>
    </div> 
    ))}
    
    </div>
  </div>
  )
}
export default Brand;