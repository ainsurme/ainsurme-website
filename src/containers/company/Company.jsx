import React from 'react';

import './company.css';

import ProfileQNC from '../../assets/profile_qnc.png';
import ProfileKC from '../../assets/profile_kc.png';
import ProfileYDH from '../../assets/profile_ydh.png';
import ProfileCC from '../../assets/profile_cc.png';

const Company = () => (
    <div class="team" id="team">
        <div class="team-box">
            <h1>Meet the Team</h1>
        </div>
        <div class="team-box">
            <div class = "team-box-text">
                <img src={ProfileQNC} alt="Nick Q. Cheng"/>
                <h2>Nick Cheng</h2>
                <h3>Co-founder</h3>
                <p>Ph.D. in Computer Science from University of Illinois at Urbana-Champaign, 
                    AI expert, lead scientist and engineer. Ex. AWS, Microsoft, Salesforce AI Labs.</p>
            </div>
            <div class = "team-box-text">
                <img src={ProfileKC} alt="Kane Carpenter"/>
                <h2>Kane Carpenter</h2>
                <h3>CMO</h3>
                <p>MBA from University of Chicago Booth School of Business, practice lead in organization development strategies,
                    expert in cutomer acquistion, lead generation, and top-line growth.
                </p>
            </div>
            
        </div>
        <div class="team-box">
            <div class = "team-box-text">
                <img src={ProfileYDH} alt="Donovan Hou"/>
                <h2>Donovan Hou</h2>
                <h3>Co-founder</h3>
                <p>MBA from University of Chicago Booth School of Business, credentialed actuary, annuity expert in product design, pricing, and risk management</p>
            </div>
            <div class = "team-box-text">
                <img src={ProfileCC} alt="Chris Conklin"/>
                <h2>Chris Conklin</h2>
                <h3>Advisor</h3>
                <p>35+ year annuity industry veteran, senior exectuives at several major annuity carriers, expert in product design, marketing and distribution</p>
            </div>
            
        </div>
    </div>
)

export default Company;