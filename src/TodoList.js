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
                    <div className="container">
                        <form onSubmit={this.addItem}>
                            <input className="input" placeholder="New Task" ref={(a) => this._inputElement = a}>
                                
                            </input>
                            <button className="button is-primary" type="submit">Add</button>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <TodoItems entries={this.state.items} delete={this.deleteItem}/>
                </div>
            </div>
        )
    }
}
