import { makeStyles } from '@material-ui/core/styles';
import {colors} from '../styles/colors';

const useStyles = makeStyles({
    body:{ 
        fontSize:"62.5%", 
    },
    subjectHeadContainer: {
        background:colors.blue,
        width: '100%',
        height: '37.56rem',
        display:'flex',
        flexDirection: 'row',

  },
  subjectHeadLeft:{
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      paddingLeft: '10.50rem',
  },
  subjectHeadClass:{
    width: '14.375rem',
    height: '3.75rem',
    marginTop: '4.125rem',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '3rem',
    lineHeight: '3.75rem',
    letterSpacing:'0.03em',
    color:'#FFFFFF',
  },
  subjectHeadName:{
    width: '32.25rem',
    height: '11.31rem',
    marginTop: '0.5rem',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '9rem',
    lineHeight: '11.31rem',
    letterSpacing: '0.03em',
    color: colors.yellow,
  },
  subjectHeadContent:{
    width: "39.62rem",
    height: "13.5rem",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    display: "flex",
    alignItems: "center",
    textAlign: "justify",
    letterSpacing: "0.03em",
    color: "#FFFFFF"
  },
  subjectHeadRight:{
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    paddingRight:'10.50rem',
  },
  subjectHeadRightTop:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: "4.937rem",
    alignSelf:"flex-end",
  },
  subjectHeadSelectSubject:{
    display:"block",
    width: "18.187rem",
    height: "1.75rem",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.5rem",
    lineHeight: "1.75rem",
    color: "#FFFFFF",
  },
  subjectHeadDropdown:{
    width: "10.437rem",
    height: "2.562rem",
    marginLeft:"1rem",
    marginTop:'-0.5rem',
    background: "#313576",
    borderRadius: "0.625rem",
  },
  subjectHeadDropdownOption:{
    width: "6.25rem",
    height: "1.375rem",
    left: "1.75rem",
    top: "0.625rem",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1rem",
    color: "white",
  },
  subjectHeadRightbottom:{
    display:"inline-block",
    width: "22.687rem",
    height: "22.687rem",
    background: "#313576",
    opacity: 0.85,
    marginTop:"3.6rem",
    borderRadius: "0.625rem",
    alignSelf:"flex-end",
  },
  subjectHeadImage:{
    marginLeft:"3.7rem",
    marginTop:"3.7rem"
  }
})

export default useStyles