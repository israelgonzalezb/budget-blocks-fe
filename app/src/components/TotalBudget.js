import React,{useEffect,useState} from 'react';
import axios from "axios"
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import { Progress,Container} from "reactstrap";
import { blocksData } from "../redux/actions/userBlocks";
import { connect } from "react-redux";
// npm install --save-dev @iconify/react @iconify/icons-fa
import { Icon, InlineIcon } from '@iconify/react';
import chevronCircleUp from '@iconify/icons-fa/chevron-circle-up';
import chevronCircleDown from '@iconify/icons-fa/chevron-circle-down';

import "./table.css"
// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(12, 1fr)',
//     gridGap: theme.spacing(3),
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     whiteSpace: 'nowrap',
//     marginBottom: theme.spacing(1),
//   },
//   divider: {
//     margin: theme.spacing(2, 0),
//   },
// }));

// export default function SavingsGoal() {
//     const [categories,setCategories] = useState([])
//     useEffect(() => {
//         axios.get("https://lambda-budget-blocks.herokuapp.com/api/users/categories/1")
//         .then(i => {
//            setCategories(i.data.slice(Math.max(i.data.length - 3, 1)))
//         })
//       },[])
//   const classes = useStyles();

// console.log(categories)
//   return (
//     <div>
//       <Typography variant="subtitle1" gutterBottom>
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={7}>
//           <b>Savings Goal</b>
//         </Grid>
//         <Grid item xs={5}>
//           <p></p>
//           </Grid>
//           {categories.length === 0 ? <p>Please make goals</p> :
//           categories.map(i => (
//               <>
//          <Grid item xs={7}>
//          <p>goal</p>
//        </Grid>
//        <Grid item xs={5}>
//        <P>{i.id}</P>
//          <p>{i.category}</p>
//          </Grid>
//          </>
//           )
//           )
//         }
//         <Button>he</Button>
              
//         </Grid>
//     </div>
//   );
// }

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    background:"lightgrey",
   
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TotalBudget = props => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [categories,setCategories] = useState([])
      useEffect(() => {
props.blocksData()
         
        },[])
const P = styled.p`
  color:green;
  `
  const Button =styled.button`
background:lightgrey;
border:lightgrey;

  `
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
      <Typography variant="subtitle1" gutterBottom>
     </Typography>
     <Grid container spacing={3}>
        <Grid item xs={12}>
         Total Budget
       </Grid>
        <Grid item xs={12}>
           <h5>hi</h5>
          </Grid>
        
          <Grid item xs={12}>
           <Progress color="success" className="progress" value={78}/>
          </Grid>
          <Grid item xs={6}>
           <p>Income</p>
           <p>+ $200.00</p>
           <Icon className="icons green"icon={chevronCircleUp} />
           
           
          </Grid>
          <Grid item xs={6}>
           <p>Expenses</p>
           <p>- $200.00</p>
           <Icon className="icons red"icon={chevronCircleDown} />
          </Grid>
      </Grid> 
      </CardContent>
    </Card>
  );
}
function mapStateToProps(state){
  return {
      blocks:state.blockReducer.blocks
  }
}
const mapDispatchToProps = {
  blocksData
   }

export default connect(mapStateToProps,mapDispatchToProps)(TotalBudget)
