import React from 'react'
import {padLeft, range} from "../utility"
import PropTypes from 'prop-types'

class MonthPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            selectedYear : props.year,
            selectedMonth: props.month
        }
    }

    toggleDropdown = (event) => {
        event.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen,
            selectedYear: this.props.year,
            selectedMonth: this.props.month
        })
    }
    selectYear = (event, yearNumber) => {
        event.preventDefault()
        this.setState({
            selectedYear: yearNumber
        })
    }

    selectMonth = (event, monthNumber) => {
        event.preventDefault()
        this.setState({
            isOpen: false,
            selectedMonth: monthNumber
        })
        this.props.onChange(this.state.selectedYear, monthNumber)
    }

    render() {
        const {isOpen, selectedYear} = this.state
        const monthRange = range(12, 1)
        const yearRange = range(9, -4).map(number => number + this.state.selectedYear)
        return (
            <div className="dropdown month-picker-component">
                <h4>选择月份</h4>
                <button className="btn btn-lg btn-secondary dropdown-toggle"
                        onClick={this.toggleDropdown}
                >
                    {`${this.state.selectedYear}年 ${padLeft(this.state.selectedMonth)}月`}
                </button>
                {isOpen &&
                <div className="dropdown-menu" style={{display: 'block'}}>
                    <div className="row">
                        <div className="col border-right">
                            {yearRange.map((yearNumber, index) => {
                                return (
                                    <a href="#"
                                       className={(yearNumber === selectedYear) ? 'dropdown-item active' : 'dropdown-item'}
                                       key={index}
                                       onClick={(event) => {
                                           this.selectYear(event, yearNumber)
                                       }}
                                    >
                                        {yearNumber} 年
                                    </a>
                                )
                            })}
                        </div>
                        <div className="col">
                            {monthRange.map((monthNumber, index) => {
                                return (
                                    <a href="#"
                                       className={(monthNumber === this.state.selectedMonth) ? 'dropdown-item active' : 'dropdown-item'}
                                       key={index}
                                        onClick={(event) => {
                                            this.selectMonth(event, monthNumber)
                                        }}
                                    >
                                        {padLeft(monthNumber)} 月
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}

MonthPicker.protoTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default MonthPicker