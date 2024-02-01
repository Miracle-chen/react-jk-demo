import { Card, Form, Button, Input, message } from "antd";
import './index.scss';
import { fetchToken } from "@/store/modules/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submit = async(formData) => {
        // formData 即收集到的表单项的录入值
        await dispatch(fetchToken(formData));
        navigate('/index');
        message.success('登录成功');
    }
    return (
        <div className="loginContainer">
            <Card className="cardContainer">
                <h2 className="cardTitle">极客园</h2>
                {/* validateTrigger 配置 失焦时候 触发校验 */}
                <Form 
                    className="formContainer"
                    validateTrigger="onBlur"
                    // 点击 htmlType为submit的按钮时候触发
                    onFinish={submit}
                >
                    <Form.Item
                        name="mobile"
                        // 表单校验
                        rules={[
                            {
                                required: true,
                                message: '请输入手机号'
                            },
                            // 内容的格式校验
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: '手机号格式不对'
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: '请输入验证码'
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入验证码246810" />
                    </Form.Item>
                    <Form.Item>
                        <Button className="loginBtn" htmlType="submit" type="primary" size="large">登录</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login;