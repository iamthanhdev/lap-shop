import React from "react";
import { NavLink } from "react-router-dom";
import { Popover } from "antd";
import login from "../../assets/imgs/login.png"
import ueser from "../../assets/imgs/user.png"
import logout from "../../assets/imgs/logout.png"

  const Navbar = () => {

    const renderContent = () => {
      return(
        <div>
          <p className="font-bold text-[18px] text-cyan-900">Thanh Dat</p>
          <div className="flex gap-1 mt-4 bg-green-300 rounded-lg p-3 py-2 hover:bg-green-200 cursor-pointer">
            <img src={logout} alt="" width={20} height={16} />
            <p>Đăng xuất</p>
          </div>
        </div>
      )
    }
  
    return(
      // <div style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   gap: "10px 30px",
      // }}>
      //   <NavLink to="/">
      //     <p>Home</p>
      //   </NavLink>
      //   <NavLink to="/contact">
      //     <p>Contact</p>
      //   </NavLink>
      // </div>
      <div className="flex justify-between px-4 bg-[#219ebc] py-2">
      <div className="flex">
        <NavLink to="/" className="w-12 h-12 rounded-[50%] bg-green-400">
          <img src={login} alt="" />
        </NavLink>
        <div className="flex justify-start gap-4 ml-12 mt-[10px]">
          <NavLink to="/">
            <p className="font-bold text-white hover:">Home</p>
          </NavLink>
          <NavLink to="/contact">
            <p className="font-bold text-white">Contact</p>
          </NavLink>
        </div>
      </div>
      <Popover content={renderContent}  trigger="click">
      <div className="w-12 h-12 rounded-[50%] bg-green-400">
        <img src={ueser} alt="" />
      </div>
    </Popover>
    </div>
    )

  }
   export default Navbar;