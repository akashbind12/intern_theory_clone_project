function navBar(){
    var  navbar =`<div id="nav_bar">
        <div id="left_box">
            <div  id="sliding" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"/></svg></div>
            <div id="icon_img"><a href="#">
                <img src="https://assets.interntheory.com/creative/logo.png"></a>
            </div>
        </div>

        <div id="right_box">
            <div id="cart_img">
                <a href="cartPage1.html">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                    <span>0</span>
                </a>
            </div>
            <div id="sign_in">
                <a href="student and company login.html">
                <button>SIGN IN</button>
            </a>
            </div>
        </div>
    </div>`
    return  navbar;
}

export default navBar
