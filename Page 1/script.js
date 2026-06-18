const authContainer = document.getElementById('auth-container');

// fungsi untuk merender form pendaftaran akun saat tombol create account di pencet
    function renderRegisterForm() {
        const registerHTML = `
            <div id="div-register" class="form-container">

                <div class="input">
                    <h2>Create Account</h2>

                    <label class="lab-email_name" for="">Name:</label>
                        <input class="email"  type="text" ><br>

                    <label class="lab-email_tlp" for="">No. :</label>
                        <input class="email" type="text" ><br>

                    <label class="lab-email" for="">Email:</label>
                        <input class="email"  type="email" placeholder><br>

                    <label class="lab-password" for="">Password:</label>
                        <input class="password" type="password"><br>

                </div>
                
                <a href="#" class="explore-btn3" onclick="event.preventDefault(); renderLoginForm();">Create Account</a>
        
                <p class="java">already have an account?</p>
                <a href="#" class="explore-btn2" onclick="event.preventDefault(); renderLoginForm();">Back</a>

            </div>
        `;
        
        authContainer.innerHTML = registerHTML;
    }

// fungsi untuk merender login form saat tombol back di pencet
    function renderLoginForm() {
        const loginHTML = `
            <div id="div-login" class="form-container">
                <div class="input">
                    <h2>LogIn</h2>

                    <label class="lab-email" for="">Email:</label>
                        <input class="email"  type="text"><br>

                    <label class="lab-password" for="">Password:</label>
                        <input class="password" type="password"><br>
                </div>

                <a href="../Page 2/page2.html" class="explore-btn">Log In</a>
                <p>don't have an account yet?</p>
                <a href="#" class="explore-btn2"  onclick="event.preventDefault(); renderRegisterForm();">Create Account</a>
            </div>
        `;
        
        authContainer.innerHTML = loginHTML;
    }