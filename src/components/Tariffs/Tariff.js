import React from 'react'
import '../../index'

export default function Tariff(props) {
    return (

        <div className="basic-div">
            <tr>
                <td>
                   <span className="name">{props.name}</span>
                    <div className="price">
                        <span className="rubl">{props.price}</span>
                        <div>
                            <span className="ru">{props.rubl}</span>
                            <div className="month">{props.month}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="icon">
                        <p className="gb">{props.gb} </p>
                        <img src={props.icon} alt="" />
                    </div>
                </td>
                <td>
                    <h4 className="min-style">{props.min} </h4>
                </td>
                <td>
                    {props.sms !==0 && <div>{props.sms} SMS</div>}
                </td>
                <td>
                    <div className="button">
                        Купить SIM
                </div>
                </td>
                
                <div class="text link">
                        <div>Настроить тариф</div>
                </div>

            </tr>
        </div>
    )
}
