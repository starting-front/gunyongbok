import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return <div onClick={() => navigate('/signin')}>로그인하러가기</div>;
};

export default Home;
