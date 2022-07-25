import React, { Component } from 'react'
import { Item } from './Item';

class List extends Component {
    
    constructor(){
        super()
        this.state = {
            list: [ 
                {id: 1, title: 'Do the dishes'},
                {id: 2, title: 'Walk Amy'},
                {id: 3, title: 'Study Coding'},
                {id: 4, title: 'Do the laundry'},
                {id: 5, title: 'Sweep the floor'},
                {id: 6, title: 'Pay the bills'},
                {id: 7, title: 'Exercise'},
                {id: 8, title: 'Fold my clothes'},
                {id: 9, title: 'Go to the bank'},
                {id: 10, title: 'Practice Piano'}
            ]
        }
    }

    handleDelete = (id) => {
        // this.setState({
        //     list: []
        // })
        console.log(id)
        // let's call state prevState and give it a callback function; as a callback function handing it in to an arrow function
        // this.setState takes previous state and hands it in, establish new variable called newState which is equal to prevState
        // what advanced function what we use to get rid of old one? JS function to go through a bunch and take one out of array
        // now newState contains all the ones except the bad one; pipes and condition; returns new array that meets condition
        // took in old state, filtered it, returning an object it must return an object that is list newState
        this.setState((prevState => {
            const newState = prevState.list.filter(item => item.id !== id)
            return {
                list: newState
            }
        }))
    }

    render() {
        //destructuring; take what's inside state and get the list and put into variable called list
        // anytime we use the word list, it's the same as using the list from state
        const {list} = this.state

        const itemList = list.map(item => {
            return <Item key={item.id} id={item.id} title={item.title} handleOnDelete={this.handleDelete}/>
        })

        return (
        <div>
            <h3>
                {itemList}
            </h3>
        </div>
        )
    }
}

export default List;