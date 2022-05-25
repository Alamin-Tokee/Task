import React, { useState } from 'react';
import '../App.css';
import { BsChevronLeft } from "react-icons/bs";
import { IoPowerOutline } from "react-icons/io5";
import Widget2 from './Widget2';


const channels = [
  { 'name': 'Putin FM', id: 1, 'station': '66,6', 'uri': 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png' },
  { 'name': 'Dribble FM', id: 2, 'station': '101,2', 'uri': 'https://homepages.cae.wisc.edu/~ece533/images/girl.png' },
  { 'name': 'Doge FM', id: 3, 'station': '99,4', 'uri': 'https://homepages.cae.wisc.edu/~ece533/images/sails.png' },
  { 'name': 'Ballads FM', id: 4, 'station': '87,1', 'uri': 'https://homepages.cae.wisc.edu/~ece533/images/boat.png' },
  { 'name': 'Maximum FM', id: 5, 'station': '142,2', 'uri': 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png' },
]

const Widget = props => {
  const [channelId, setChannelId] = useState(null);

  const selectChannel = (index) => {
    setChannelId(index)
  }

  return (
    <div style={container}>
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
          {channels.map((v, i, { length }) => {
            return (
              <div key={i}>
                <div onClick={() => selectChannel(i)} className="d-flex justify-content-between" style={list}>
                  <p style={listnames}>{v.name}</p>
                  <p style={stationNames}>{v.station}</p>
                </div>
                {i + 1 !== length ?
                  <div className="hr" style={list}></div>
                  : null
                }
              </div>
            )
          })}
        </div>

        <div className="footer">
          <span className="block-example border-top border-white" style={line}></span>
        </div>
      </div>
      <div>

      </div>
      <Widget2 list={channels} selectedChannel={channelId} />
    </div>
  );
}

export default Widget;


// Some styling here

const container = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignContent: 'center',
  padding: 50,
  backgroundColor: '#21202A',
  height: 750
}
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
  fontWeight: 'bold'
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



