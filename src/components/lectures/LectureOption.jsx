import React, { useState } from 'react'
import './lectureOption.css'
import Lectures from './Lectures'
const LectureOption = () => {
  let data = [
    {
      id: 1,
      img: './img/dsa.svg',
      title: 'DSA(c++)',
      modeOfConduction: 'Offline',
      Venue: '5th Floor, Shree LR Tiwari',
      DateAndDay: '01/02/2003',
      Timings: '11:00am to 12:00pm',
      link: 'https://www.youtube.com/watch?v=L4CK3j72SfM'
    },
    {
      id: 2,
      img: './img/dsa.svg',
      title: 'DSA(python)',
      modeOfConduction: 'Offline',
      Venue: '5th Floor, Shree LR Tiwari',
      DateAndDay: '01/02/2003',
      Timings: '11:00am to 12:00pm',
      link: 'https://www.youtube.com/watch?v=L4CK3j72SfM'
    },
    {
      id: 3,
      img: './img/dsa.svg',
      title: 'DSA(java)',
      modeOfConduction: 'Offline',
      Venue: '5th Floor, Shree LR Tiwari',
      DateAndDay: '01/11/2022',
      Timings: '11:00am to 12:00pm',
      link: 'https://www.youtube.com/watch?v=L4CK3j72SfM'
    },
    {
      id: 4,
      img: './img/dsa.svg',
      title: 'DSA',
      modeOfConduction: 'Offline',
      Venue: '5th Floor, Shree LR Tiwari',
      DateAndDay: '01/11/2021',
      Timings: '11:00am to 12:00pm',
      link: 'https://www.youtube.com/watch?v=L4CK3j72SfM'
    },
    {
      id: 5,
      img: './img/dsa.svg',
      title: 'DSA',
      modeOfConduction: 'Offline',
      Venue: '5th Floor, Shree LR Tiwari',
      DateAndDay: '01/11/2023',
      Timings: '11:00am to 12:00pm',
      link: 'https://www.youtube.com/watch?v=L4CK3j72SfM'
    },
    {
      id: 6,
      img: './img/dsa.svg',
      title: 'DSA',
      modeOfConduction: 'Offline',
      Venue: '5th Floor, Shree LR Tiwari',
      DateAndDay: '01/11/2021',
      Timings: '11:00am to 12:00pm',
      link: 'https://www.youtube.com/watch?v=L4CK3j72SfM'
    },
  ]
  
  const compare_date=(date2)=>{
    var today = new Date();
    var date = [today.getDate() , (today.getMonth()+1) , today.getFullYear()];
    date2 = date2.split('/')
    if(parseInt(date[2])===parseInt(date2[2]) && parseInt(date[1])===parseInt(date2[1]) && parseInt(date[0])>parseInt(date2[0])){
        return true;
    }
    else if(parseInt(date[2])===parseInt(date2[2]) && parseInt(date[1])>parseInt(date2[1])){
        return true;
    }
    else if(parseInt(date[2])>parseInt(date2[2])){
        return true;
    }
    else{
        return false;
    }
  }

  let filtered_data = data.filter(item => {return !compare_date(item.DateAndDay)});
  const [option, setOption] = useState('upcoming');
  const [_data, setData] = useState(filtered_data)

  return (
    <div className='lectureOption'>
        <span className='lecture_title'>Lectures</span>
        <div className='lectures'>
            <button onClick={()=>{
              setOption('upcoming')
              setData(data.filter(item => {return !compare_date(item.DateAndDay)}));
          }} className={option==='upcoming' ? 'class upComingLectures active' : 'class upComingLectures'}>Upcoming</button>
            <button onClick={()=>{
              setOption('past');
              setData(data.filter(item => {return compare_date(item.DateAndDay)}));
              }} className={option==='past' ? 'class pastLectures active' : 'class pastLectures'} >Past</button>
        </div>
        <div className="items">{_data.map((item) =>
        <Lectures 
        img ={item.img} id={item.id} 
        link={item.link}
        title ={item.title}
        modeOfConduction={item.modeOfConduction} 
        Venue={item.Venue} 
        DateAndDay={item.DateAndDay}
        Timings ={item.Timings} />)}
        </div>
    </div>

  )
}

export default LectureOption