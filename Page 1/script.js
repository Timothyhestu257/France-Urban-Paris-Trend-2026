const authContainer = document.getElementById('auth-container');

    function renderRegisterForm() {
        const registerHTML = `
            <div id="div-register" class="form-container">
                <div class="input">
                    <h2>Buat Akun</h2>
                    <label class="lab-email" for="">Nama:</label>
                    <input class="email"  type="text" placeholder><br>
                    <label class="lab-email" for="">Telp:</label>
                    <input class="lab-email" type="text"><br>
                    <label class="lab-email" for="">Email:</label>
                    <input class="email"  type="text" placeholder><br>
                    <label class="lab-password" for="">Password:</label>
                    <input class="password" type="password"><br>
                </div>
                
                <p>Sudah punya akun?</p>
                <a href="#" class="explore-btn2" onclick="event.preventDefault(); renderLoginForm();">Kembali ke Log In</a>
            </div>
        `;
        
        authContainer.innerHTML = registerHTML;
    }

    function renderLoginForm() {
        const loginHTML = `
            <div id="div-login" class="form-container">
                        <div class="input">
                            <h2>Masuk</h2>
                            <label class="lab-email" for="">Email:</label>
                            <input class="email"  type="text" placeholder><br>
                            <label class="lab-password" for="">Password:</label>
                            <input class="password" type="password"><br>
                        </div>
                        <a href="#" class="explore-btn">Log In</a>
                        <h4>Belum punya akun?</h4>
                        <a href="#" class="explore-btn2"  onclick="event.preventDefault(); renderRegisterForm();">Create Account</a>
                    </div>
        `;
        
        authContainer.innerHTML = loginHTML;
    }