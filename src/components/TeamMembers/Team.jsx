import React from 'react'
import Id from './Id'
import './team.css'
import Navigation from '../navigation/Navigation'
import Footer from '../footer/Footer'

const Team = () => {
    const data = [
        {
            id: 1,
            img: "./img/person.jpg",
            name: "Aditya Waskar",
            role: "Developer",
            facebook: "www.facebook.com",
            instagram: "www.instagram.com",
            linkedin: "www.linkedin.com"
        },
        {
            id: 2,
            img: "./img/person.jpg",
            name: "Tanmay Jha",
            role: "Developer",
            facebook: "www.facebook.com",
            instagram: "www.instagram.com",
            linkedin: "www.linkedin.com"
        },
        {
            id: 3,
            img: "./img/person.jpg",
            name: "Utkarsh Mishra",
            role: "Leader",
            facebook: "www.facebook.com",
            instagram: "www.instagram.com",
            linkedin: "www.linkedin.com"
        },
        {
            id: 4,
            img: "./img/person.jpg",
            name: "Naufil",
            role: "Coremember",
            facebook: "www.facebook.com",
            instagram: "www.instagram.com",
            linkedin: "www.linkedin.com"
        },
        {
            id: 5,
            img: "./img/person.jpg",
            name: "Ayush",
            role: "Coremember",
            facebook: "www.facebook.com",
            instagram: "www.instagram.com",
            linkedin: "www.linkedin.com"
        },
        {
            id: 6,
            img: "./img/person.jpg",
            name: "Himanshu Updhayay",
            role: "Coremember",
            facebook: "www.facebook.com",
            instagram: "www.instagram.com",
            linkedin: "www.linkedin.com"
        },
    ]
    const leader_data = data.filter(function (data) {
        return data.role === "Leader" || data.role == 'leader';
    });
    const core_member = data.filter(function (data) {
        return data.role === "coremember" || data.role == 'Coremember';
    });
    const developer = data.filter(function (data) {
        return data.role === "Developer" || data.role == 'developer';
    });
    console.log(leader_data.length)
  return (
    <>
        <Navigation page={'Team_members'}/>
        <div className='team_members_container'>
            <section>
                <div className="common leader">
                    <span>Leader</span>
                    <div className="members">
                        {leader_data.map(d=>(
                            <Id id = {d.id} img={d.img} name={d.name} role={d.role} facebook={d.facebook} instagram={d.instagram}
                            linkedin = {d.linkedin}/> 
                            ))}
                    </div>
                </div>
                
                <div className="common Developer">
                <span>Development Team</span>
                <div className="members">
                        {developer.map(d=>(
                            <Id id = {d.id} img={d.img} name={d.name} role={d.role} facebook={d.facebook} instagram={d.instagram}
                            linkedin = {d.linkedin}/> 
                            ))}
                    </div>
                </div>

                <div className="common core-members">
                <span>Coremembers</span>
                <div className="members">
                        {core_member.map(d=>(
                            <Id id = {d.id} img={d.img} name={d.name} role={d.role} facebook={d.facebook} instagram={d.instagram}
                            linkedin = {d.linkedin}/> 
                            ))}
                    </div>
                </div>
                
            </section>
        </div>
        <Footer/>
    </>
)}
export default Team