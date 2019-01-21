import React, {Component} from  'react';
import Background from '../img/bg-masthead.jpg';

import CHeaderShared from '../Controller/CHeaderShared';
class HeaderShared extends Component{

    constructor(props){
      super(props);
      this.generateURL =  this.generateURL.bind(this);
      this.inputChange =  this.inputChange.bind(this);
      this.urlSuccess =  this.urlSuccess.bind(this);
      this.buttonControl =  this.buttonControl.bind(this);
      this.state =  {shortUrl: "",validate:null, urlShort:"",url:"",disableButton:false,borderColorInput:"#fff"};
    }



    generateURL(){
      this.setState({
        disableButton:null
      });
      CHeaderShared.generateURL(this.state.url)
      .then(data=>this.urlSuccess(data))
      .catch(error=>console.log(error));
    }

    urlSuccess(data){
      if(data.validate){
        this.setState({
          validate:true,
          disableButton:true,
          urlShort:data.data.UrlShort,
          borderColorInput:"#fff"
        });
      }else{
        this.setState({
          disableButton:true,
          validate:false,
          error:data.message,
          borderColorInput:"red"
        });
      }
     
    }

    inputChange(ev){
      let buttonStat = true;
      if(ev.target.value.replace(/\s/g,"").length  == 0){
        buttonStat = false;
      }

      this.setState({ 
        validate:null,
        url:ev.target.value,
        disableButton: buttonStat,
        borderColorInput:"#fff"
      });


    }


    render() {
        return (
      
          <header style={{background: `url(${Background}) no-repeat center center`}}  className="masthead text-white text-center">
            <div className="overlay" />
            <div className="container">
                  <br></br>   
                  <br></br>
                      <br></br>
                          <br></br>
              <div className="row">
                <div className="col-xl-9 mx-auto">
                  <h1 className="mb-5">Brand, track and optimize every touchpoint with BitUrl, the world's leading link management platform</h1>
                </div>
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                    <div className="form-row">
                      <div className="col-12 col-md-9 mb-2 mb-md-0">
                        <input style={{borderColor:this.state.borderColorInput}} required onChange={this.inputChange} type="text" className="form-control form-control-lg" placeholder="Paste a link  to shorten  it" />
                      </div>
                      <div className="col-12 col-md-3">
                      {this.buttonControl()}
                      </div>
                    </div>
                    <br></br>
                  <br></br>
                     {this.previewURL()}
                 
                </div>
              </div>
            </div>
          </header>
        );
      }

      buttonControl(){
            if(this.state.disableButton){
                    return( <button    onClick={this.generateURL} className="btn btn-block btn-lg btn-primary">SHORTEN</button>);
                }else if(this.state.disableButton == false){
                    return (  <button disabled  onClick={this.generateURL} className="btn btn-block btn-lg btn-primary">SHORTEN</button>);
              }else{
                    return (<img style={{width:70,height:70}} src="https://loading.io/spinners/vortex/lg.vortex-spiral-spinner.gif"/>); 
            }

          }

  previewURL(){

    if(this.state.validate){
      return(<div style={{backgroundColor:"#fff",color:"#212529"}} className="row">
      <div className="col-sm-9">
      <br></br>
        <div className="row">
          <div className="col-8 col-sm-6">
            { this.state.url}
          </div>
          </div>
          <div className="row">
          <div className="col-4 col-sm-6 h4">
                <a target="_blank" href={this.state.urlShort}>
                  {this.state.urlShort}
                </a>
          </div>
        </div>
        <br></br>
      </div>
    </div>);
    }else if(this.state.validate ==false){
    return ( <div className="alert alert-danger" role="alert">
            {this.state.error}
            <br></br>
            {this.state.url}
          </div>);
    }

  }
}
export default HeaderShared;