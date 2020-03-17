import React from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/actions/ProfileActions';
import LinkAccount from '../LinkAccount';
import plaidImg from '../../media/image/PlaidIcon.png';
import { useStyles } from './balanceStyle';
import Card from '@material-ui/core/Card';

export const Balance = ({ LinkedAccount }) => {
	const classes = useStyles();
    if(LinkedAccount === false){
        return(
        <Card className={classes.NoBalance}>
            <LinkAccount/>
            <img src={plaidImg} className="plaidIcon" alt="Plaid Icon"/>
        </Card>
        )
    }else{
        // I: Is this supposed to do something? Maybe it wasn't completed... 
        //looks like a <p> as a placeholder instead of actual account balance data from Plaid
        return (
            <p></p>
        )
    }
}

function mapStateToProps(state) {
	return {
		LinkedAccount: state.loginReducer.user.LinkedAccount
	};
}

export default connect(mapStateToProps, { getUserInfo })(Balance);
