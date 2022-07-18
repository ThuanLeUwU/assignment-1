import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function TabDetailComponent({ dish }) {
    return (
        <Tabs
            defaultActiveKey="home"
            transition={false}
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Mô Tả">
            <big><b>Thông tin {dish.name}</b></big>
                <ul>
                    
                    <li><p>Thương Hiệu: {dish.brand}</p></li>
                    <li><p>Chất Liệu: {dish.fabric}</p></li>
                    <li><p>Bảng size: {dish.size}</p></li>
                    <li><p>Bộ sản phẩm: {dish.product}</p></li>
                </ul>
            </Tab>
            <Tab eventKey="profile" title="Thông tin bổ sung">
                <strong>Sản phẩm chi tiết: {dish.detail}</strong>
            </Tab>
        </Tabs>
    );
}

export default TabDetailComponent;