
import { makeStyles } from '@material-ui/core';


export const useStylesModal = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,

        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 5, 3),
        height: '70%',
        width: '60%',

    },
}));

