import React from 'react';
import './Second.css'
const Second = (props) => {
    const { cart } = props;

    let total = 0;
    for (const p of cart) {

        total = total + p.time;
    }



    const activityHandelar = () => {

        alert('WelCome Completed your site')
    }

    return (
        <div>
            <h2 style={{ color: 'blue' }}> Exercise Details</h2>
            <div className='small-style'>
                <span> Exercise time</span>
                <span>{total} secend</span>
            </div>

            <div className='small-style'>

                <span> Breack time</span>
                <span> {props.nuber} second</span>

            </div>
            <button onClick={activityHandelar} className='btn-activity'>
                Activity Completed
            </button>
        </div>
    );
};

export default Second;