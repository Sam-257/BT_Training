import React from 'react';
import useStyles from './jss';

type Loan= {
    applied: boolean;
    bankName: string;
    subheadingLabel: string;
    subHeadingValue: string;
    bankLogo: string;
    amountLabel: string;
    amount: string;
    interestRates: string;
    minCreditScore: string;
    termLength: string;
    processingFee: string;
    approved?: boolean;
    rejected?: boolean;
}

type Props = {
    loan: Loan
} 


const CustomerCard = ({loan}: Props) => {
    const classes = useStyles();
  return (
    <div className={classes.card}>
        <div className={classes.top}>
            <div className={classes.contentLeft}>
                <h3>{loan.bankName}</h3>
                <p className={`text-muted`}> {loan.subheadingLabel} {loan.subHeadingValue}</p>
                <img src={loan.bankLogo} alt="Bank Logo" height={150} width={200}/>
            </div>
            <div className={`text-muted ${classes.contentRight}`}>
                <ul className={classes.unlist}>
                    <li>{loan.amountLabel}: <span className={classes.listItems}>{loan.amount}</span></li>
                    <li>Interest Rates: <span className={classes.listItems}>{loan.interestRates}</span></li>
                    <li>Processing Fees: <span className={classes.listItems}>{loan.processingFee}</span></li>
                    <li>Term Length: <span className={classes.listItems}>{loan.termLength}</span></li>
                    {loan.applied? <li>Min Credit Score: <span className={classes.listItems}>{loan.minCreditScore}</span></li> : ''}
                </ul>
            </div>
        </div>
        <div className={!loan.applied ? `mt-3 ${classes.bottom}` : loan.approved ? `mt-3 bg-success ${classes.bottom}` : loan.rejected ? `mt-3 bg-danger ${classes.bottom}` : `mt-3 bg-secondary ${classes.bottom}`}>
            {!loan.applied ? <button className={classes.applyBtn} >Apply now</button> : <p className='text-white'>Application {loan.approved ? 'Approved' : loan.rejected ? 'Rejected' : 'Pending' } </p>}
        </div>
    </div>
  )
}

export default CustomerCard