import Chip from "@material-ui/core/Chip";
// import { useTheme } from "@material-ui/core/styles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ChipsContainer = (props) => {
    // const { palette } = useTheme();
    // const chipColor = palette.secondary.main;
    let chipsDatas = ["All", "Indian Army", "Python", "React", "Nodejs", "Airforce", "Technical Guruji", "Comedy", "Indian Army", "Python", "React", "Nodejs", "Military Aircrafts", <ArrowForwardIosIcon style={{fontSize: "small"}}/>]
   
    return (
<div style={styles.container}  >
{chipsDatas.map((chipData)=>{
  return(<Chip
      style = {{ margin: "0px 5px",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      color: "#030303",
      fontSize: 15}}
      // color="secondary"
      // variant="outlined"
      label={chipData}
      
      onClick={() => {}}/>
      
  )
  
})
}
</div>
);
};

const styles = {
container: {
height: 50,
border: "1px solid #ccc",
padding: "8px",
display: "flex",
},
};

export default ChipsContainer;
