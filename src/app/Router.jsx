import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Page2 from '../pages/Page2';
import Layouts from '../components/Layouts';
const Router = () => (
    <BrowserRouter>
        <Layouts>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/page2" element={<Page2/>} />
        </Routes>
        </Layouts>
</BrowserRouter>
);

export default Router;