import { deleteProduct, getProductByName, getProducts } from "../../services/productService";
import { styled } from "@mui/system";
import { ProductComponent } from "../components/ProductComponent";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Product from "../../interfaces/Product";
import { SearchComponent } from "../components/SearchComponent";

const PaddingGrid = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(13),
}));


export const ProductsContainer: React.FC = () => {
    const [products, setProducts] = useState<[Product]>();
    const [update, setUpdate] = useState<Product>();
    useEffect(() => {
        const fetch = async () => {
            const response = await getProducts();
            setProducts(response?.data);
        };
        fetch();
    }, []);

    const onHandleUpdate = (product: Product) => {
        setUpdate(product);
    };

    const onHandleDelete = async (id: Number) => {
        const result = confirm('Are you sure that you want to delete the product?');
        if (result) {
            await deleteProduct(id);
            const response = await getProducts();
            setProducts(response?.data);
        }
    };

    const onHandleBack = async () => {
        setUpdate(undefined);
        const response = await getProducts();
        setProducts(response?.data);
    };

    const onHandleSearch = async (name: string) => {
        if (!name) {
            const response = await getProducts();
            setProducts(response?.data);
        }
        else {
            const response = await getProductByName(name);
            console.log(response?.data);
            setProducts(response?.data);
        }

    };

    return (
        <Grid>
            <Grid>
                <SearchComponent handleSearch={onHandleSearch} />
            </Grid>
            <Grid item container spacing={3} xs={5} md={4} lg={4}>
                {products?.map((product: any) => <ProductComponent key={product?.id} product={product} update={true} onHandleUpdate={onHandleUpdate} onHandleDelete={onHandleDelete} />)}
            </Grid></Grid>
    );
};