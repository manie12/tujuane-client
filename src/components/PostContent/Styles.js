import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    avatar: {
        width: "2.5em",
        height: "2.5em"
    },
    typography: {
        fontFamily: '3em',
        fontSize: '1.2em'
    },
    container: {
        marginTop: '1em',
        marginLeft: '0em'
    },
    postImage: {
        width: '100%',
        marginTop: '1em',
        height: '100%',
        objectFit: "cover"
    },
    postGrid: {
        height: '30em',
        marginTop: "0em",
        paddingTop: "0em"
    },
    iconGrid: {
        marginTop: "2em"
    }

});