import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DisplayTrans from './DisplayTrans';

import { getTransactions } from '../../redux/actions/PlaidActions';
import { connect } from 'react-redux';
import './index.css';

import AddTransactionModal from '../Modal_Components/AddTransaction';


const useStyles = makeStyles(theme => ({
  // I: makeStyles from material ui is meant to override a component's styles https://material-ui.com/styles/advanced/#overriding-styles-classes-prop
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	container: {
		display: 'flex',
		width: '100%'
	},
	topcontent: {
		display: 'flex'
	},
	card: {
		width: '100%',
		marginBottom: '1rem',
		height: '70%',
		background: '#f7f7f7',
		textAlign: 'left',
		paddingLeft: '10px',
		display: 'flex',

		fontSize: '12px'
	},
	details: {
		display: 'flex'
	},
	content: {
		flex: '1 0 auto',
		alignItems: 'flex-start',
		textAlign: 'left'
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'right',
		alignContent: 'flex-end'
	},
	text: {
		textAlign: 'left',
		paddingLeft: theme.spacing(5)
	},
	rightInfo: {
		width: '85%'
	},
	leftInfo: {
		width: '15%',
		alignItems: 'center'
	}
}));

//I: This component is used in the Dashboard component

const Transactions = props => {
	const classes = useStyles(); // I: Initializes the makeStyles hook from material ui
	const [filter, setFilter] = useState(true);
	const handleClick = e => {
		setFilter(!filter); //I: Flip filter on or off, controls whether user sees all transactions or only latest three
	};

	var selected = props.transactions.slice(0, 3);
	/*I: Array.prototype.slice() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
	The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) 
	where begin and end represent the index of items in that array. 
	The original array will not be modified.
	*/



	/*I: The lines 74-80 below control the AddTransactionModal */
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true); 
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment> {/* I: React.Fragment - Allows us to render some JSX without creating an additional dom node, can also use <></> */}
			<div className='trans-container'>
				<div className='trans-top-content'>
					<h3 className={classes.text}>Recent Transactions:</h3> {/* I: classes.text is an example of how to access data from the material ui makeStyles hook */}
						<button className='add-trans-button' onClick={handleClickOpen}>
							Add Transactions
						</button>
						<AddTransactionModal open={open} handleClose={handleClose} />
						{/* I: Modal that let's a user create a new transaction... uses material ui components, mainly modal dialog*/}
				</div>
				<div className='trans-item'>
					<DisplayTrans arr={filter ? selected : props.transactions } classes={classes} />
					{/* I: DisplayTrans takes an array of transactions, then maps thorugh them and renders a card for each transaction... also adds delete function */}
				</div>

				<button id='view-button' onClick={handleClick}>
					{filter  ? "View all transactions" : "View less"}
				</button>
			</div>
	</React.Fragment>
	)
};
function mapStateToProps(state) {
	//I: Only transactions from the return object is used in the component...
	return {
		userID: state.loginReducer.user.id,
		LinkedAccount: state.loginReducer.user.LinkedAccount,
		transactions: state.plaidReducer.transactions
	};
}

export default connect(mapStateToProps, { getTransactions })(Transactions);
//I: getTransactions action creator isn't used at all in the component
