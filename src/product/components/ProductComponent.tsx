import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Product from "../../interfaces/Product";

interface Props {
    product: Product;
    update?: boolean;
    onHandleUpdate?: (product: Product) => void;
    onHandleDelete?: (id: Number) => void;
    onHandleDetails?: (product: Product) => void;
}

export const ProductComponent: React.FC<Props> = ({ product, update, onHandleUpdate, onHandleDelete, onHandleDetails }) => {

    const handleUpdate = () => {
        if (onHandleUpdate) onHandleUpdate(product)
    };
    const handleDelete = () => {
        if (onHandleDelete) onHandleDelete(product?.id)
    };
    const handleDetails = () => {
        if(onHandleDetails) onHandleDetails(product);
    };
    return (
        <Grid container item xs={12} md={6} lg={6}>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography>{`Name: ${product?.name}`}</Typography>
                            <Typography>{`Price: ${product?.price}`}</Typography>
                            <Typography>{`Stock: ${product?.stock}`}</Typography>
                        </Grid>
                  
                    </Grid>
                </CardContent>
                {update ? (<CardActions>
                    <Button size="small" onClick={handleUpdate}>{'UPDATE'}</Button>
                    <Button size="small" onClick={handleDelete} color="secondary">{'DELETE'}</Button>
                </CardActions>) : (<CardActions><Button size="small" onClick={handleDetails}>{'DETAILS'}</Button></CardActions>)}
            </Card>
        </Grid>
    );
};