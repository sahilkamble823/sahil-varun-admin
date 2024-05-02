// import React from "react";
// import PropTypes from "prop-types";
// import { CircularProgress, Box} from "@mui/material";
// import { styled } from "@mui/system";

// const styles = (theme) => ({
//     circularProgress: {
//         color: theme.palette.text.secondary,
//     },
// });

// function ButtonCircularProgress(props) {
//     const { size, classes } = props;
//     return (
//         <Box color="secondary.main" pl={1.5} display="flex" justifyContent="center">
//             <CircularProgress
//                 size={size ? size : 24}
//                 thickness={size ? (size / 5) * 24 : 5}
//                 className={classes.circularProgress}
//             />
//         </Box>
//     );
// }

// ButtonCircularProgress.propTypes = {
//     size: PropTypes.number,
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(ButtonCircularProgress);


import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Box } from "@mui/material";
import { styled } from "@mui/system"; // Import styled from @mui/system

const StyledCircularProgress = styled(CircularProgress)({
    color: (theme) => theme.palette.text.secondary,
});

function ButtonCircularProgress(props) {
    const { size } = props;
    return (
        <Box color="secondary.main" pl={1.5} display="flex" justifyContent="center">
            <StyledCircularProgress
                size={size ? size : 24}
                thickness={size ? (size / 5) * 24 : 5}
            />
        </Box>
    );
}

ButtonCircularProgress.propTypes = {
    size: PropTypes.number,
};

export default ButtonCircularProgress;
