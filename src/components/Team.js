import React from 'react'
import team1 from '../assets/images/team-1.jpg'
import team2 from '../assets/images/team-2.jpg'
import team3 from '../assets/images/team-3.jpg'
import team4 from '../assets/images/team-4.jpg'

export default function Team() {


    return (
        <div className="container pt-5 team">
            <div id="heading" className="d-flex flex-column text-center mb-5">
                <h4 className="font-weight-bold">Our Trainers</h4>
                <h3 className="display-4 font-weight-bold">Meet Our Expert Trainers</h3>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-5">
                    <div className="card border-0 bg-secondary text-center text-white">
                        <img className="img-fluid" src={team1} alt="" />
                        <div className="card-body bg-secondary">
                            <h4 className="card-title">Trainer Name</h4>
                            <p className="card-text">Trainer</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <div className="card border-0 bg-secondary text-center text-white">
                        <img className="img-fluid" src={team2} alt="" />
                        <div className="card-body bg-secondary">
                            <h4 className="card-title">Trainer Name</h4>
                            <p className="card-text">Trainer</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <div className="card border-0 bg-secondary text-center text-white">
                        <img className="img-fluid" src={team3} alt="" />
                        <div className="card-body bg-secondary">
                            <h4 className="card-title ">Trainer Name</h4>
                            <p className="card-text">Trainer</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <div className="card border-0 bg-secondary text-center text-white">
                        <img className="img-fluid" src={team4} alt="" />
                        <div className="card-body bg-secondary">
                            <h4 className="card-title ">Trainer Name</h4>
                            <p className="card-text">Trainer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}