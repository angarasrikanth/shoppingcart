import React from "react"
import "../../styles/product.css"
const productNavBar = ({prouctCategoryName,selectedItem}) => {
    const handleClick = (e,name) => {
        e.preventDefault();
        selectedItem(name)
    }
    return(
        <div>
            <nav className="navbar bg-body-tertiary absolute-top" id="nav">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Product Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {prouctCategoryName && prouctCategoryName.map(item =>{
                return <li className="nav-item" style={{cursor: 'pointer'}}>
                 <a className="nav-link active" aria-current="page" onClick={(e)=>handleClick(e,item.id)} >{item.name}</a>
               </li>
            })}
        </ul>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}
export default productNavBar;