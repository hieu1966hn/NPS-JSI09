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
        innerHTML = components.registerScreen
      break;

    case "loginScreen":
      document.getElementById("app").
        innerHTML = components.loginScreen
      break;

    case 'homeScreen':
      break;
  }
}