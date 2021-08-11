import React, { Component } from 'react'
import 'antd/dist/antd'
import { Form, Input, DataPicker, Switch,Button, Select } from 'antd'

const {Option} = Select

const initialState = {
    user:
    {id: '',
     nome: '',
     email: '',
     dataNascimento:'',
     senha:'',
     cpf:''},

     list: []
}

export default class Usuario extends Component{

    state = {...initialState}

    clear(){
        const user = this.state.user
    }

    







}