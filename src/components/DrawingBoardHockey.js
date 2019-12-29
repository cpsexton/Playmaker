import React, {Component} from 'react'
import CanvasDraw from "react-canvas-draw";
import hockeyrink from './hockeyrink.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import './DrawingBoard.css'



class DrawingBoardHockey extends Component {
    state = {    
        loadTimeOffset: 0,
        lazyRadius: 0,
        brushRadius: 3,
        brushColor: "rgb(0,0,0)",
        catenaryColor: null,
        gridColor: "rgba(150,150,150,0.17)",
        hideGrid: true,
        canvasWidth: 959,
        canvasHeight: 450,
        disabled: false,
        imgSrc: hockeyrink,
        saveData: null,
        immediateLoading: false,
    }

    handleClickChangeColorRed = () => {
        this.setState({
            brushColor: 'rgb(251,0,0)'
        });
    }
    handleClickChangeColorWhite = () => {
        this.setState({
            brushColor: 'rgb(255,255,255)'
        });
    }
    handleClickChangeColorBlue = () => {
        this.setState({
            brushColor: 'rgb(0,68,255)'
        });  
    }
    handleClickChangeColorYellow = () => {
        this.setState({
            brushColor: '#ffff00',
        });
    }
    handleClickChangeColorBlack = () => {
        this.setState({
            brushColor: 'rgb(0,0,0)',
        });
    }

    handleClickChangeBrushSizeSmall = () => {
        this.setState({
            brushRadius: 3,
        })
    }
    handleClickChangeBrushSizeMedium = () => {
        this.setState({
            brushRadius: 5,
        })
    }
    handleClickChangeBrushSizeLarge = () => {
        this.setState({
            brushRadius: 8,
        })
    }

    render() {
        
    return (
        <div id="big-rendered-div">
        <CanvasDraw 
            ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
            {...this.state} 
            />
            
            <div className="btn-group ml-3 mr-1"> 
                <button type="button" class="delete-btn" onClick={() => { this.saveableCanvas.clear(); }} ></button>
                 <button type="button" class="undo-btn" onClick={() => { this.saveableCanvas.undo(); }} ></button>         
                {/* <button onClick={() => { localStorage.setItem( "savedDrawing", this.saveableCanvas.getSaveData() ); }} >Save</button> */}
                 {/* <button onClick={() => { this.loadableCanvas.loadSaveData(localStorage.getItem("savedDrawing") ); }} >Load</button> */}
            </div>

            <div class="btn-group ml-1" role="group" >
                <button type="button" class="btn btn-yellow-brush btn-lg" onClick={this.handleClickChangeColorYellow} ></button>
                 <button type="button" class="btn btn-red-brush btn-lg" onClick={this.handleClickChangeColorRed} ></button>
                 <button type="button" class="btn btn-blue-brush btn-lg" onClick={this.handleClickChangeColorBlue} ></button>
                <button type="button" class="btn btn-white-brush btn-lg" onClick={this.handleClickChangeColorWhite} ></button>
                 <button type="button" class="btn  btn-black-brush btn-lg" onClick={this.handleClickChangeColorBlack} ></button>                
            </div>

            <div class="btn-group ml-1 mr-3" role="group" >    
                <button type="button" class="btn btn-secondary" onClick={this.handleClickChangeBrushSizeSmall} >Small Brush</button>
                 <button type="button" class="btn btn-secondary" onClick={this.handleClickChangeBrushSizeMedium} >Medium Brush</button>
                <button type="button" class="btn btn-secondary" onClick={this.handleClickChangeBrushSizeLarge} >Large Brush</button>
            </div>

        </div>
        );
    }
    
    };

export default DrawingBoardHockey


// can set background image to a certain size
// and set canvas size to that same size