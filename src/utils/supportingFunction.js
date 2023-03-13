// Check sự hợp lệ của tên đăng nhập và mật khẩu
function isSixToThirtyTwo(value){
    return /^(\w|\d){6,32}$/.test(value);
}

export {isSixToThirtyTwo}