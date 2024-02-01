// 封装高阶组件：高阶组件就是一个函数，接收一个组件为入参，返回一个新的组件

const { getToken } = require("@/utils");
const { Navigate } = require("react-router-dom");

// children:高阶组件包裹的组件
const AuthRoute = ({children}) => {
    const token = getToken();
    if(token){
        return <>{children}</>  // 直接return children 也生效
    }else{
        // Navigate重定向 replace 直接替换，不要记录
        return <Navigate to="/" replace />
    }
}

export default AuthRoute;