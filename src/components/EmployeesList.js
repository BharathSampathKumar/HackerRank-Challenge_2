import React from 'react';

class EmployeesList extends React.Component {
  constructor(props){
    super(props);
    this.renderMatch = this.renderMatch.bind(this);
    this.state = {
      searchResList : this.props.employees
    }
  }

  renderMatch(e){
    let inputTerm = e.target.value;
    if(inputTerm !== ""){
      let matches = this.props.employees.filter(employee => employee.name.toLowerCase().includes(inputTerm.toLowerCase()));
      this.setState({
        searchResList : matches
      });
    }
    else{
      this.setState({
        searchResList : this.props.employees
      });
    }
  }

  render() {
    const resultsList = this.state.searchResList;
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" onKeyUp={this.renderMatch}/>
        </div>
        { resultsList.length > 0 &&
        <ul className="employees-list">
          { resultsList.map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))}
        </ul>
        }
      </React.Fragment>
    );
  }
}

export default EmployeesList;
