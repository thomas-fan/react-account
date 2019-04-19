import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'

const items = [
    {
        "id": 1,
        "title": "去旅游",
        "price": 200,
        "date": "2019-04-19",
        "category": {
            "id": 1,
            "name": "旅行",
            "type": "outcome",
            "iconName": "ios-plane"
        }
    },
    {
        "id": 2,
        "title": "去旅游",
        "price": 300,
        "date": "2019-04-19",
        "category": {
            "id": 1,
            "name": "旅行",
            "type": "outcome",
            "iconName": "ios-plane"
        }
    }
]

class App extends Component {
    render() {
        return (
            <div>
                <ViewTab activeTab="list" onTabChange={(view) => {
                    console.log(view)}}>

                </ViewTab>
            </div>
        );
    }
}

export default App;
