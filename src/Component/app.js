import React,{Component} from 'react';
import { add_Reminder,remove_Reminder,clear_Reminder } from '../Actions';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "../images/logo.png"
class App extends Component {


    state={
        text:"",
        date: new Date(),
    }

    render_Reminders = ()=>{
        const {reminders}= this.props
        return(
            <div className='ul'>
                { reminders.map( remi => {
                    return (
                        <li key={remi.id} className="list-group-item mt-2 mb-2 p-2  li ">
                            <div>{remi.text} </div>
                            <div>{moment(new Date(remi.date)).fromNow() } </div>
                            <div className='remove btn btn-danger icon rounded' onClick={()=> this.props.remove_Reminder(remi.id)}>X</div>
                        </li>
                    )
                })}
            </div>
        )
    }

    render(){
        console.log(this.props);
        return(
            <div className='app'>
                <img src={logo}/>
                <div className="reminder-title">
                    <h2>What Should You Do ?</h2>
                </div>
               
                 <input onChange={(e)=> this.setState({text:e.target.value})}
                  type='text' value={this.state.text} placeholder='Enter What You Think' className="form-control input "/>
                 {/* <input onChange={(e)=> this.setState({date:e.target.value})} 
                 type="datetime-local" value={this.state.date} className="form-control"
                 /> */}
                 
                 <DatePicker
                        className="form-control input"
                        value={this.state.date}
                        selected={this.state.date}
                        onChange={(date) => this.setState({date})}
                        showTimeSelect
                        placeholder="Enter Date"
                        timeFormat="HH:mm"
                        timeIntervals={60}
                        timeCaption="Time"
                        dateFormat="MMMM d, yyyy h:mm aa"/>
                <button onClick={()=> 
                    {this.props.add_Reminder(this.state.text,this.state.date)
                        this.setState({text:"",date:""})
                       
                    }} className='btn btn-primary btn-block ' >Add Reminder</button>
                {this.render_Reminders()}
                <button onClick={()=> this.props.clear_Reminder()}
                 className='btn btn-danger btn-block mb-2 ' >Clear Reminders</button>
             
               
                
            </div>
        )
    }
  }
    // function mapDispatchToProps(dispatch){
    //     return { add_Reminder : ()=> dispatch(add_Reminder())
    // }}

    // function mapStateToProps(state) {
    //     return{
    //         reminders : state
    //     }
    // }

export default connect(state => {
    return{
    reminders : state
}},{add_Reminder,remove_Reminder,clear_Reminder}) (App);