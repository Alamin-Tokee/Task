import React from 'react';
import '../App.css';
import { BsChevronLeft } from "react-icons/bs";
import { IoPowerOutline } from "react-icons/io5";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";


const Widget2 = props => {

  console.log('list', props)

  if (props.list !== (null || undefined)) {
    var selectedItem = props.list.find((v, i) => i === props.selectedChannel)
  }
  return (
    <div className="box">
      <div className="d-flex justify-content-between" style={header}>
        <div className="p-2 col-example text-left">
          <h2 style={headerText}> <BsChevronLeft /></h2>
        </div>
        <div className="p-2 col-example text-left">
          <h3 style={headerText}>STATIONS</h3>
        </div>
        <div className="p-2 col-example text-left">
          <h2 style={headerText}> <IoPowerOutline /> </h2>
        </div>
      </div>
      <div className="list">
        {props.list.map((v, i, { length }) => {
          return (
            <div key={i}>
              <div className="d-flex justify-content-between" style={list}>
                <p style={listnames}>{v.name}</p>
                <p style={stationNames}>{v.station}</p>
              </div>
              {i === props.selectedChannel ?
                <div className="d-flex justify-content-between" style={list}>
                  <div className="p-2 col-example text-left" >
                    <h1 style={buttnStyle}>
                      <MdRemoveCircleOutline />
                    </h1>
                  </div>
                  <div className="p-2 col-example text-left">
                    <img src={v.uri} style={imageStyle} alt="Demo" />
                  </div>
                  <div className="p-2 col-example text-left">
                    <h1 style={buttnStyle}>
                      <MdAddCircleOutline />
                    </h1>
                  </div>
                </div>
                : null
              }
              {i + 1 !== length ?
                <div className="hr"></div>
                : null
              }
            </div>
          )
        })}
      </div>

      <div className="footer">
        <span className="block-example border-top border-white" style={line}></span>

        {selectedItem !== undefined ?
          <div>
            <p style={textStyle}>CURRENTLY PLAYING</p>
            <p style={selectedChannelStyle}>{selectedItem.name}</p>
          </div>
          : null}


      </div>


    </div>
    //   </div>
  );
}

export default Widget2;


// Some styling here

const header = {
  backgroundColor: '#E4B06E',
  borderTopRightRadius: '30px',
  borderTopLeftRadius: '30px',
  paddingTop: '20px',
  paddingLeft: '10px',
  paddingRight: '10px',
  height: 100
}
const headerText = {
  color: '#FFFFFF',
  fontWeight: 'bolder'
}
const list = {
  paddingRight: 20,
  paddingLeft: 20
}
const listnames = {
  color: '#8E94A3',
  fontSize: 26,
  fontWeight: 'initial'
}
const stationNames = {
  color: '#8E94A3',
  fontSize: 26,
  fontWeight: 'bold'
}
const line = {
  color: '#fff'
}
const imageStyle = {
  height: 150,
  width: 150,
  borderRadius: 80
}
const buttnStyle = {
  color: '#8E94A3',
  marginTop: 40
}
const textStyle = {
  color: '#E4B06E',
  marginTop: 10
}
const selectedChannelStyle = {
  color: '#8E94A3',
  fontSize: 26,
  fontWeight: 'initial'
}
