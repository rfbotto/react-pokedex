import React from 'react'
import { Input, Grid, Theme, withStyles } from '@material-ui/core';
import { Classes } from 'jss';

interface Props {
    value: string
    handleChange: (searchTerm: string) => void
    classes: Classes
}

const styles = (theme: Theme) => ({
    input: {
        margin: theme.spacing.unit * 2,
        width: 300
    },
})

const Search: React.FC<Props> = ({ value, handleChange, classes }) => {
    return (
        <Grid container justify="center">
            <Grid item>
                <Input
                    placeholder="Search Pokemon"
                    value={value}
                    className={classes.input}
                    onChange={(event) => handleChange(event.target.value)}
                />
            </Grid>
        </Grid>
    )
}
export default withStyles(styles)(Search)