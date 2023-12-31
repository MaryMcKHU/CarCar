import React from 'react';

function AutomobileList(props) {

    return (
        <div>
        <h1>Automobile Inventory</h1>
        <p>Automobiles currently in inventory: { props.autos.length }</p>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.autos.map(auto => {
                    return (
                        <tr key={ auto.id }>
                            <td>{ auto.vin }</td>
                            <td>{ auto.color }</td>
                            <td>{ auto.year }</td>
                            <td>{ auto.model.name }</td>
                            <td>{ auto.model.manufacturer.name }</td>
                            <td><button className="btn btn-danger" onClick={() => props.delete(auto)}>Delete</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    );

}

export default AutomobileList;