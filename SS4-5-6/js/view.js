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


      // Đây là đoạn code chuyển trang sang màn hình đăng nhập
      document.getElementById("redirect-to-login").
        addEventListener("click", () => {
          view.setActiveScreen("loginScreen");
        })
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