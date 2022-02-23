import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField'
import { useState } from "react";
import Product from "../../interfaces/Product";

const StyledGrid = styled(Grid)(({theme}) => ({
    padding: theme.spacing(5),
    paddingTop: theme.spacing(3),
}));


interface Props {
    handleAdd?: (name: string, price: Number, stock: Number) => void;
    product?: Product;
    button?: string;
}

export const AddComponent: React.FC<Props> = ({ handleAdd, product, button }) => {
    const [name, setName] = useState(product ? product.name : "");
    const [price, setPrice] = useState(product ? product.price : null);
    const [stock, setStock] = useState<any>(product ? product.stock : null);

    const handleChangeName = (e: any) => {
        const name = e.target?.value;
        setName(name);
    };
    const handleChangePrice = (e: any) => {
        const price = parseInt(e.target?.value);
        setPrice(price);
    };
    const handleChangeStock = (e: any) => {
        const stock = parseInt(e.target?.value);
        setStock(stock);
    };
    const handleClick = async () => {
        if (handleAdd) handleAdd(name, price!, stock);
    };
    return (
        <StyledGrid container spacing={2}>
            <Grid item xs={12}>
                <TextField id="outlined-basic" label="Name" variant="outlined" value={name ? name : ""} onChange={handleChangeName} />
            </Grid>
            <Grid item xs={12}>
                <TextField id="outlined-basic" label="Price" variant="outlined" value={price ? price : ""} onChange={handleChangePrice} />
            </Grid>
            <Grid item xs={12}>
                <TextField id="outlined-basic" label="Stock" variant="outlined" value={stock ? stock : ""} onChange={handleChangeStock} />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="success" onClick={handleClick}>
                    {button}
                </Button>
            </Grid>
        </StyledGrid>
    );
};