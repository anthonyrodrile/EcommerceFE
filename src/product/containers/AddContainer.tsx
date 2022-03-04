import { addProduct } from "../../services/productService";
import { AddComponent } from "../components/AddComponent";
import { useRouter } from "next/dist/client/router";

export const AddContainer: React.FC = () => {
    const router = useRouter();
    const onHandleAdd = async (name: string, price: Number, stock: Number) => {
        try {
            await addProduct(name, price, stock, 5);
            console.log(name, price, stock);
            router.push('/view');
            alert('Product added');        
        } catch (e) {
            console.log(e);
        }

    };

    return (
        <div>
            <form>
                <AddComponent handleAdd={onHandleAdd} button={'Add'} />
            </form>
        </div>
    );
};