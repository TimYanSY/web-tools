import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent : 0.15,
            amounts: [{amount : ""}],
            total: 0
        }
        this.getPercentage = this.getPercentage.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.setTotal = this.setTotal.bind(this);
    }
    
    getPercentage(event) {
        this.setState({
            percent : event.target.value,
        });
    }
    
    setTotal() {
        let t = 0;
        for (let i = 0; i < this.state.amounts.length; i++) {
            t = t + ~~this.state.amounts[i].amount;
        }
        this.setState({
           total : t,   
        });
    }
    
    handleAmountChange = (idx) => (evt) => {
        if (idx === this.state.amounts.length - 1) {
            const newAmounts = this.state.amounts;
            newAmounts.push({amount : ""})
            this.setState({
                amounts: newAmounts
            });
        }
        const newAmounts = this.state.amounts.map((oneAmount, sidx) => {
            if (idx !== sidx) {
                return oneAmount;
            } else {               
                return {amount: evt.target.value};
            }
        });
        this.setState({ 
            amounts: newAmounts,
        }, this.setTotal);
    }
    
    render() {
        
    return (
      <div className="App">
        
        <h1>Tip Calculator</h1>
        
        <div>Please Select the percent you want to tip</div>
        <select value = {this.state.percent} onChange = {this.getPercentage}>
            <option value="0.10">10%</option>
            <option value="0.15">15%</option>
            <option value="0.20">20%</option>
            <option value="0.30">30%</option>
        </select>
        
        {this.state.amounts.map((oneAmount, idx) => (
        <div key={idx}>
        <input
        type="number"
        min="0"
        value={oneAmount.amount}
        onChange={this.handleAmountChange(idx)}
        />
    {idx !== this.state.amounts.length - 1 ? this.state.percent * 100: ''}
    {idx !== this.state.amounts.length - 1? '% = ': ''} 
    {idx !== this.state.amounts.length - 1? (this.state.percent * oneAmount.amount).toFixed(2) :''}
        </div>
        ))}
        
        Total is {this.state.total}, percent is {this.state.percent}, total tip = {(this.state.total * this.state.percent).toFixed(2)}
      </div>   
    );
  }
}

export default App;
