
function App() {
  
  // ashi code by ===> your bot link setup 
  const botLink = "https://madusanka-md-production.up.railway.app/";
  
  // ashi code by ===> channel link setup
  const channelLink = "https://whatsapp.com/channel/0029Vb7p3UCCHDyocfEGm23f";
  
  // ashi code by ===> group Link setup
  const groupLink = "https://chat.whatsapp.com/G6ALYraWMP38F6bifqq7x7";
  
  // ashi code by ===> Contact Link setup
  const ownerLink = "https://wa.me/+94781629812?text=*Hey_MADUSANKA-MD_owner 👋*";
  
  
  // ======= code ahiya menu by open / close code
  function toggleMenu() {
    const menu = document.querySelector(".menu");
    const overlay = document.querySelector("#overlay");
    
    menu.classList.toggle("show");
    overlay.classList.toggle("show");
  }
  
    
    return (<>
    <header>
        <div className="logo">
          <img src="src/madu-logojpg.png" alt="logo" />
        </div>

       <div className="brand-text">
          <h2>>©MADUSANKA-MD 🇱🇰 MINI BOT</h2>
        </div>

<div className="menu-btn" onClick={toggleMenu}>☰</div>

        {/* MENU */}
        <nav className="menu">
          <img src="src/madu-logojpg.png"></img>
          <h3>&lt;/&gt; >©MADUSANKA-MD 🇱🇰 Dev</h3>
          <span></span>
          <a href="#App.jsx"><i className="fa-solid fa-house"></i> Home</a>
          
          <a href={ownerLink} ><i className="fa-brands fa-whatsapp"></i> Whatsapp</a>
          
          <a href="#about"><i className="fa-solid fa-ucser"></i> About me</a>
          
          <a className="nav-links" href="mailto:kasunnisakara99@gmail.com">
          <i className="fa-solid fa-envelope"></i> Email</a> 
          
          <span></span>
        </nav>
      </header>
   
   { /* OVERLAY */ }
   <div className="overlay" id="overlay" onClick={toggleMenu}></div>
   
   
   <div className="main">
     <div className="image">
        <img src="src/madu-banner-logojpg.png" alt="banner" />
     </div>
  <div className="bot-text">
    <h1>WELCOME TO >©MADUSANKA-MD 🇱🇰 V.1 MINI BOT</h1>
     <p>>©MADUSANKA-MD 🇱🇰 Mini BOT makes your WhatsApp experience easier, faster, and more automated.</p>
   </div> 
     
 <div className="btns"> 
   <a href={botLink} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp"><i className="fas fa-link" aria-hidden="true"></i>whatsapp Bot Pair</a>
   
   <a href={ownerLink} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp"><i className="fas fa-user" aria-hidden="true"></i>WhatsApp Contact</a>
   
   <a href={channelLink} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp"><i className="fab fa-whatsapp" aria-hidden="true"></i>WhatsApp Channel</a>
 </div>
 
 
 <div className="about-me" id="about">
    <img src="src/madu-logojpg.png"></img>
    
    <i><h2>>©MADUSANKA-MD 🇱🇰 BOT ABOUT</h2></i>
    
    <p>>©MADUSANKA-MD 🇱🇰 is a modern and powerful WhatsApp automation bot developed using JavaScript and Node.js technologies. It is designed to provide users with a fast, smooth, and advanced WhatsApp experience.</p>
    
    <p>This bot includes many useful features such as group management tools, auto replies, media download commands, AI-powered features, sticker creation, search systems, fun commands, and many more advanced functions. Its stylish design and user-friendly command system make it popular among WhatsApp users.</p>
    
    <p>>©MADUSANKA-MD 🇱🇰 is built with a strong focus on speed, stability, and customization, making it easy to deploy and customize for personal or public use. It supports multi-device WhatsApp connections and can be deployed on platforms like Heroku, Render, Railway, and others.</p>
    <br></br>
   </div>
 </div>
 
<div className="footer">
  <p>&copy; 2026 POWERED BY >©MADUSANKA-MD 🇱🇰 MINI BOT</p>
</div>
  </>)
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
