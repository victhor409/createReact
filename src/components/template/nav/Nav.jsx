import React, {Component}from 'react'
import './Nav.css'
import 'antd/dist/antd'
import Icon from '@ant-design/icons'
import { Menu,Switch } from 'antd'


const {SubMenu} = Menu;

export default class NavService extends Component{


    state ={
        theme: 'dark',
        current: '1'
    };

    changeTheme = value =>{
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };


    handleClick = e =>{
        console.log('click' , e);
        this.setState({
            current: e.key,
        });
    };

    render(){
        return(
            <div className="menu">
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{width: 223 }}
                    style={{backgroundColor: '#1A2F3A'}}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >

                    <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="setting"/>
                            <span>Usuarios</span>
                        </span>
                    }>
                        <Menu.Item key="1">Cadastro</Menu.Item>
                        <Menu.Item key="2">Relatorio</Menu.Item>

                    </SubMenu>

                    <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="setting"/>
                            <span>Chamados</span>
                        </span>
                    }>
                        <Menu.Item key="1">Novo Chamado</Menu.Item>
                        <Menu.Item Key="2">Lista de Chamados</Menu.Item>
                    </SubMenu>

                </Menu>

                
            </div>
        )
    }
}
