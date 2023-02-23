// Check sự hợp lệ của tên đăng nhập và mật khẩu
function isSixToThirtyTwo(value){
    return /^(\w|\d){6,32}$/.test(value);
}

// Check xem mã đăng ký tài khoản có hợp lệ hay không
function isRegisterCodeValid(value){
    return /^(\w|\d){12}$/.test(value);
}