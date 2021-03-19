import React from 'react'
import './HomeCard.css'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
// import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import testImg from './testh.jpg'
import { Button } from 'antd';

function HomeCard() {
  return (
    <div className='HomeCardMain'>
      <img src={testImg} alt='' className='CardBigImg' />
      <div className='OtherContDiv'>
        <div className='SubOthercont'>
          <div className='CardLocationDiv'>
            <LocationOnOutlinedIcon style={{ color: '#035b96' }} />
            <div className='LocationText'>Apapa Road, Apapa Lagos</div>
          </div>
          <hr />
          <div className='CardpriceAndComp'>
            <div className='CardPriceDiv'>
              <div className='PriceText'>Price</div>
              <div className='PriceNo'>N2,000,000</div>
            </div>
            <div className='CardCompDiv'>
              <div className='Comp1'>
                <HotelOutlinedIcon style={{ color: '#035b96', fontSize: '20px' }} />
                <div className='CompNoRound'>4</div>
              </div>
              <div className='Comp2'>
                <BathtubOutlinedIcon style={{ color: '#035b96', fontSize: '20px' }} />
                <div className='CompNoRound'>3</div>
              </div>
              <div className='Comp3'>
                <DirectionsCarOutlinedIcon style={{ color: '#035b96', fontSize: '20px' }} />
                <div className='CompNoRound'>2</div>
              </div>
            </div>
          </div>
          <div className='ContButon'>
            {/* <div className='TheContCtrl'>
              <ContactPhoneOutlinedIcon style={{
                color: '#035b96', fontSize: '20px'
              }} />
              <div className='ContactDiv'>O9021113392</div>
            </div> */}
            <Button style={{
              backgroundColor: '#6497b1', fontWeight: '600', color: '#fff'
            }}>View Package</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
