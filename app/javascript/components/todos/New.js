import React from "react";
import PropTypes from "prop-types";
import { fetchApi } from './../../utils/API'
import Routes from "./../../utils/Routes"



class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        errors: null,
        message: null,
        title: null,
        description: null,
      },
    };
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      todo: {
        ...this.state.todo,
        [name]: value,
      },
    });
  };
  onSubmit=(e)=>{
    e.preventDefault();
    console.log("submit button clicked", this.state.todo)
    fetchApi({
      url:'/todos',
      method: "POST",
      body:{
        todo:this.state.todo
      },
      onError:(response)=>{
        console.log("ERRor Occured", response)
      },
      onSuccess: response => {
        this.setState({ message: response.messages[0] });
      },
      successCallBack: response => {
        setTimeout(function () {
          // window.location.replace(Routes.task_path(response.id));
          console.log("success response is", response)
          alert("Success")
        }, 1000);
      },
    })

  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
        <div className="form-group row pt-3">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              <h5 className="text-secondary ">Title: </h5>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={this.handleChange}
                name="title"
                value={this.state.title}
              />
            </div>
          </div>
          <div className="form-group row pt-3">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              <h5 className="text-secondary ">Description: </h5>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={this.handleChange}
                name="description"
                value={this.state.description}
              />
            </div>
          </div>
          
          <div className="form-group row pt float-right pr-3">
            <button className="btn btn-md btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default New;
