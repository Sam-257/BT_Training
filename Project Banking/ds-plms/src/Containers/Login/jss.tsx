import { createUseStyles } from "react-jss";

const blueColor = '#1A2B44';

const useStyles = createUseStyles({
    contentWrapper: {
        margin: '70px auto',
        width: '50%',
        padding: '10px',
    },
    card: {
        boxShadow:'0 15px 30px 1px grey',
        background: 'rgba(255, 255, 255, 0.90)',
        display:'flex',
        padding:'20px',
        borderRadius: '5px',
        overflow: 'hidden',
        margin: '4em auto',
        height: '250px',
        width: '800px',
        color: blueColor,  
        justifyContent: 'center',
    },
    
});

export default useStyles;