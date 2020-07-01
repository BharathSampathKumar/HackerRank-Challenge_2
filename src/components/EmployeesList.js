import React from 'react';

class EmployeesList extends React.Component {
  constructor(props){
    super(props);
    this.onFilterInputOnchange = this.onFilterInputOnchange.bind(this);
    this.state = {
      filterTerm : ""
    };
  }

  onFilterInputOnchange(e){
    let target = e.target;
    this.setState({
      filterTerm : target.value
    });
  }

  render() {
    const { employees } = this.props;
    const filterTerm = this.state.filterTerm;
    
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" onChange={this.onFilterInputOnchange}/>
        </div>
        <ul className="employees-list">
          { employees.filter(employee=>employee.name.toLowerCase().includes(filterTerm.toLowerCase())).map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
