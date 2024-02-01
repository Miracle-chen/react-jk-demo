import { Layout, Menu, Popconfirm } from 'antd';
import './index.scss';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation  } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, setToken, setUserInfo } from '@/store/modules/user';
import { removeToken } from '@/utils';

const { Sider, Header } = Layout;

const items = [
    {
        label: '首页',
        key: '/index',
        path: '/index'
    },
    {
        label: '文章管理',
        key: '/index/articles',
        path: '/index/articles'
    },
    {
        label: '创建文章',
        key: '/index/newarticles',
        path: '/index/newarticles'
    }
];
const GeekLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.user);
    const defaultKey = location.pathname;
    useEffect(()=>{
        dispatch(getUserInfo())
    }, [])
    const handleMenuChange = (item) => {
        navigate(item.key);
    }
    const confirmLogout = () => {
        navigate('/');
        dispatch(setToken(''));
        dispatch(setUserInfo(''));
        removeToken();
    }
    return (
        <Layout>
            <Header className='header'>
                <div className='logo'>极客园</div>
                <div className='user-info'>
                    <span className='user-name'>{ userInfo.mobile }</span>
                    <span className='user-logout'>
                        <Popconfirm title="是否确认退出?" okText="确认" cancelText="取消" onConfirm={confirmLogout}>
                            退出
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className='site-layout-background'>
                    <Menu
                        mode='inline'
                        theme='dark'
                        selectedKeys={[defaultKey]}
                        items={items}
                        style={{width: '100%', borderRight: 0 }}
                        onClick={handleMenuChange}
                    ></Menu>
                </Sider>
                <Layout className='layout-content' style={{padding: '20px'}}>
                    <Outlet />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default GeekLayout;