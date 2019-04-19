import React from 'react'

const PriceList = ({items, onModifyItem, onDeleteItem}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                items.map((item) => (
                    <li className="list-group-item d-flex
                        justify-content-between align-items-center"
                        key={item.id}
                    >
                        <span className="col-1 badge badge-primary">
                            {item.category.name}
                        </span>
                    </li>
                ))
            }
        </ul>
    )
}

export default PriceList