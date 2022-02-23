import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import TextField from '@mui/material/TextField'
import Typography from "@mui/material/Typography";
import { useState } from "react";

const StyledGrid = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(7),
    paddingTop: theme.spacing(3),
}));

interface Props {
    handleSearch?: (name: string) => void;
}

export const SearchComponent: React.FC<Props> = ({ handleSearch }) => {
    //const [id, setId] = useState<Number>();
    const [name, setName] = useState("");
    const title = 'Search';

    const handleChange = (e: any) => {
        //const idNumber = parseInt(e.target?.value);
        //setId(idNumber);
        const text = e.target?.value;
        setName(text);
        if (handleSearch) handleSearch(text);
    };
    const handleClick = () => {
        if (handleSearch) handleSearch(name!);
    };

    return (
        <StyledGrid item container spacing={3} xs={12} md={12}>
            <Grid item xs={12}>
                <TextField id="outlined-basic" label="Name" variant="outlined" value={name ? name : ""} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    {title}
                </Button>
            </Grid>
        </StyledGrid>
    );
};