import React, { Component } from 'react'
import TodoItems from './TodoItems';

export default class TodoList extends Component {
    constructor(props, context) {
        super(props, context)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this);
        
        this.state = {
            items : []
        }
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }

    addItem(e) {
        let itemArray = this.state.items

        if(this._inputElement.value !== ""){
            itemArray.unshift(
                {
                    text : this._inputElement.value,
                    key : Date.now()
                }
            )

            this.setState({
                items : itemArray
            })

            this._inputElement.value = ""
        }

        console.log(itemArray)
        e.preventDefault();
        
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="New Task" ref={(a) => this._inputElement = a}>
                            
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem}/>
            </div>
        )
    }
}
