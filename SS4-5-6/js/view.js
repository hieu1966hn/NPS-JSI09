//// Dùng để chuyển sang các màn hình khác: Trang đăng ký/ đăng nhập/ trang chủ, ..
const view = {} // Dùng để hiển thị lên màn hình giao diện cho người dùng 

view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case 'navbar':
      document.getElementById("app").
        innerHTML = components.navbar

      break;
    case "registerScreen":
      document.getElementById("app").
        innerHTML = components.registerScreen;

      // Code lấy dữ liệu người dùng nhập vào
      const registerForm = document.getElementById("register-form");
      registerForm.addEventListener("submit", (event) => {
        // Ngăn chặn trình duyệt tự reload khi submit form
        event.preventDefault();


        // collect dữ liệu đăng ký của người dùng như sau:
        const data = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        }
        console.log(data);// ?
      })

      // Đây là đoạn code chuyển trang sang màn hình đăng nhập
      document.getElementById("redirect-to-login").
        addEventListener("click", () => {
          view.setActiveScreen("loginScreen");
        });
      break;

    case "loginScreen":
      document.getElementById("app").
        innerHTML = components.loginScreen;


      // Đây là đoạn code chuyển trang sang màn hình đăng ký
      document.getElementById("redirect-to-register").
        addEventListener("click", () => {
          view.setActiveScreen("registerScreen");
        })
      break;

    case 'homeScreen':
      break;
  }
}