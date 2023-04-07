const Navbar = () => {
    return (
       <nav className="navbar">
       <a href="/"><h1 href="/">Tax-ify</h1></a>
        <div className="links">
            <a href="/dashboard">Dashboard</a>
            <a href="/sales">Sales</a>
        </div>
       </nav> 
      );
}
 
export default Navbar;