
const Nav=({setcategory,setcountry})=>{
return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">Newz</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav cursor-pointer">
        <li className="nav-item">
          <div className="nav-link " onClick={()=>setcategory("technology")}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link " onClick={()=>setcategory("business")}>Business</div>
        </li>
        <li className="nav-item ">
          <div className="nav-link" onClick={()=>setcategory("science")}>Science</div>
        </li>
        <li className="nav-item">
         

        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setcategory("sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setcategory("entertainment")}>Entertainment</div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </a>
          <ul className="dropdown-menu">
          
            <li><a className="dropdown-item" onClick={()=>setcountry('au')}>Australia	</a></li>
            <li><a className="dropdown-item" onClick={()=>setcountry("fr")}>France</a></li>
            <li><a className="dropdown-item" onClick={()=>setcountry("in")}>India</a></li>
            <li><a className="dropdown-item" onClick={()=>setcountry("jp")}>Japan</a></li>
            <li><a className="dropdown-item" onClick={()=>setcountry("us")}>USA</a></li>
           
          </ul>
        </li>
    </ul>
   
    </div>
    
  </div>

</nav>
    </>
)
} 

export default Nav;
