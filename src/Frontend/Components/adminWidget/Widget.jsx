import React from 'react'
import './Widget.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Widget({type}) {

    let data;

    //temporary

    const amount=100;
    const diff=30;
    // const account=100;

    switch (type) {
        case 'patient':
            data = {
                title: "Daily Patient Avg",
                isMoney : false,
                link: "See all",
                icon: <PersonIcon className='icon' style={{
                    backgroundColor: "rgb(245, 112, 92)",
                    color: "rgb(121, 35, 22)"
                }}/>,
            };
            break;
        case 'income':
            data = {
                title: "DAILY INCOME",
                isMoney : false,
                link: "View all income",
                icon: <ShoppingBagIcon className='icon' style={{
                    backgroundColor: "rgb(86, 165, 230)",
                    color: "rgb(10, 24, 102)"
                }}/>,
            };
            break;
        case 'earning':
            data = {
                title: "MONTHLY BALANCE",
                isMoney : true,
                link: "View net earnings",
                icon: <MonetizationOnIcon className='icon' style={{
                    backgroundColor: "rgb(111, 219, 87)",
                    color: "rgb(24, 67, 14)"
                }}/>,
            };
            break;
        case 'balance':
            data = {
                title: "NET EARNING",
                isMoney : true,
                link: "View details",
                icon: <AccountBalanceIcon className='icon' style={{
                    backgroundColor: "rgb(219, 87, 182)",
                    color: "rgb(102, 10, 76)"
                }}/>,
            };
            break;
        case 'newpatient':
            data = {
                title: "NEW PATIENTS",
                isMoney : true,
                link: "View details",
                icon: <AccountBalanceIcon className='icon' style={{
                    backgroundColor: "rgb(219, 87, 182)",
                    color: "rgb(102, 10, 76)"
                }}/>,
            };
            break;
    
        case 'totalpatient':
            data = {
                title: "Today's PATIENTS",
                isMoney : true,
                link: "View details",
                icon: <AccountBalanceIcon className='icon' style={{
                    backgroundColor: "rgb(219, 87, 182)",
                    color: "rgb(102, 10, 76)"
                }}/>,
            };
            break;
        case 'femalepatient':
            data = {
                title: "Today's Female Patients",
                isMoney : true,
                link: "View details",
                icon: <AccountBalanceIcon className='icon' style={{
                    backgroundColor: "rgb(219, 87, 182)",
                    color: "rgb(102, 10, 76)"
                }}/>,
            };
            break;
        case 'malepatient':
            data = {
                title: "Today's Male Patients",
                isMoney : true,
                link: "View details",
                icon: <AccountBalanceIcon className='icon' style={{
                    backgroundColor: "rgb(219, 87, 182)",
                    color: "rgb(102, 10, 76)"
                }}/>,
            };
            break;
        case 'toppackage':
            data = {
                title: "Best Package",
                isMoney : true,
                link: "View details",
                icon: <AccountBalanceIcon className='icon' style={{
                    backgroundColor: "rgb(219, 87, 182)",
                    color: "rgb(102, 10, 76)"
                }}/>,
            };
            break;
        case 'totalappointment':
            data = {
                title: "Total Appointment",
                isMoney : true,
                link: "View details",
                icon: <AccountBalanceIcon className='icon' style={{
                    backgroundColor: "rgb(219, 87, 182)",
                    color: "rgb(102, 10, 76)"
                }}/>,
            };
            break;

            default:
                data = {
                    title: "Unknown Type",
                    isMoney: false,
                    link: "",
                    icon: null,
                };
                break;


    }






  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>

        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {diff} %
            </div>
            {data.icon}
        </div>
      
    </div>
  )
}

export default Widget