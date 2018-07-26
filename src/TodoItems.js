import React, { Component } from 'react'

export default class TodoItems extends Component {
    constructor(props, context){
        super(props,context)

        this.createTask = this.createTask.bind(this)
        this.delete = this.delete.bind(this)
    }

    createTask(item){
        return <div className="box" onClick={(e) => this.delete(item.key, e)} key={item.key}>{item.text}</div>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        let todoEntries = this.props.entries
        let listItems = todoEntries.map(this.createTask)

        return (
            <div className="theList">
                {listItems}        
            </div>
        )
    }
}
