import React, {Component} from 'react';
import {LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME} from "../utility"
import PriceList from '../components/PriceList'
import TotalPrice from '../components/TotalPrice'
import ViewTab from '../components/ViewTab'
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'

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

class Home extends Component {

    render() {
        let totalIncome = 0
        let totalOutcome = 0
        items.forEach(item => {
            if (item.category.type === TYPE_INCOME) {
                totalIncome += item.price
            }
            if (item.category.type === TYPE_OUTCOME) {
                totalOutcome += item.price
            }
        })
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col">
                        <MonthPicker year={2018} month={9} onChange={() => {
                        }}/>
                    </div>
                    <div className="col">
                        <TotalPrice income={totalIncome} outcome={totalOutcome}/>
                    </div>
                </div>
                <div className="content-area py-3 px-3">
                    <ViewTab activeTab={LIST_VIEW} onTabChange={() => {
                    }}/>
                    <CreateBtn onClick={() => {
                    }}/>
                    <PriceList items={items}
                               onModifyItem={() => {
                               }}
                               onDeleteItem={() => {
                               }}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Home