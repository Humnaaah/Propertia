import React,{useState} from 'react';
import { TableOutlined, AppstoreOutlined} from '@ant-design/icons';
import { Button,Tooltip } from 'antd';
import TableView from './TableView';
import CardView from './CardView';
import APIData from '../../Api';

const Home =()=>{
    const [listView, setListView] = useState(false);

    const onChangeView = (prevState) => {
        console.log("The current state is", prevState)
        setListView(prevState => !prevState);
    }

    return(
        <>
        <div className='filters'>
            <Tooltip placement="top" title="Switch to Table View">
            <Button
                icon={<TableOutlined />}
                description="Table View"
                shape="square"
                onClick={()=>onChangeView(listView)}
                className={`${listView === false ? 'filterBtns btnSelected' : 'filterBtns'}`}
            />
            </Tooltip>
            <Tooltip placement="top" title="Switch to List View">
            <Button
                icon={<AppstoreOutlined />}
                description="Card View"
                shape="square"
                onClick={()=>onChangeView(listView)}
                className={`${listView === true ? 'filterBtns btnSelected' : 'filterBtns'}`}
            />
            </Tooltip>
        </div>
        <div className='listing-container'>
            {listView ? <CardView dataList={APIData}/> : <TableView data={APIData}/>}
         {/* <DetailUI/> */}
        </div>
        </>
    )
}
export default Home