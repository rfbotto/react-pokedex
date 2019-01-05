import React from 'react'
import { InputBase, Grid } from '@material-ui/core';

interface Props {
    value: string
    handleChange: (searchTerm: string) => void
}

const SearchBox: React.FC<Props> = ({ value, handleChange }) => {
    return (
        <Grid container justify="center">
            <Grid item>
                <InputBase
                    placeholder="Search…"
                    value={value}
                    onChange={(event) => handleChange(event.target.value)}
                />
            </Grid>
        </Grid>
    )
}
export default SearchBox