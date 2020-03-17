import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	selectCategories,
} from '../../redux/actions/ManualActions';
import { Back_Continue } from '../Modal_Components/Back_Continue';
import { TableHeads } from './TableHead';
import DisplayBlocks from './DisplayBlocks';
import './index.css';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper'; //I: Looks like a basic container https://material-ui.com/api/paper/

import  BudgetGoal  from '../Modal_Components/BudgetGoalModal';
//I: Custom modal using material ui components, allows user to change budget goals

export function ManualBlocks(props) {
	const [open, setOpen] = useState(false);
	const [values, setValues] = useState({
		userId: '',
		catId: '',
		budget: 0.0
	});
	console.log(props);

	const handleClose = () => {
		setOpen(false);
	};
	const [filter, setFilter] = useState([]);
	const handleClick = e => {
		setFilter(!filter);
	};
	const handleClickOpen = (id, budget) => {
		setValues({ ...values, userId: props.userID, catId: id, budget });

		setOpen(true);
	};

	return (
		<div>
			<div className='man-block-container'>
				<div className='man-block-header'>
					<h1>Create Your Budget Blocks</h1>
					<p>Assign the value you want in each selected category.</p>
				</div>
				<TableContainer className='table' component={Paper}> {/* I: Material UI component https://material-ui.com/api/table-container/ */}
					<Table className='table-content'>
						
						<TableHeads
							CellNames={['Block', 'Total Expenses', 'Limit', '',""]}
							className='lightgrey'
						/>

						<DisplayBlocks
							arr={props.categoryArr}
							handleClick={handleClickOpen}
							LinkedAccount={props.LinkedAccount}
						/> {/*I: Custom component based on a basic table, takes array and renders table from that array */}
					</Table>
					<BudgetGoal open={open} values={values} handleClose={handleClose} />
				</TableContainer>
				<div>
					<button className='blocks-button' onClick={handleClick}>
						{filter ? 'View All' : 'View Less'}
					</button>
				</div>
				<div>
					<Back_Continue 
					BackClick={()=>props.history.push("/onBoard/select")}
					ContClick={()=>props.history.push("/dashboard")}
					/>{/*I: Custom component based on dialog actions material ui components */}
				</div>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		userID: state.loginReducer.user.id,
		LinkedAccount: state.loginReducer.user.LinkedAccount,
		categoryArr: state.plaidReducer.categories
	};
}

export default connect(mapStateToProps, { selectCategories })(ManualBlocks);
