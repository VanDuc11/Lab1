import { FlatList,Text,View,StyleSheet,Image } from "react-native";

const ProductItem = (props) =>{
    const item = props.item;

}
 const ProductList =  (props) =>{
    
    const list = props.data || [];

    return (
        <FlatList
            data={list}
            renderItem = {({item}) =>(
                <>
                    <Text> tên món: {item.name}</Text>
                    <Text> tên món: {item.mssv}</Text>
                    <Image source={
                        {uri:'https://picsum.photos/50'}
                    }
                    style={styles.productImage}
                    
                    />
                
                </>
            )}
            keyExtractor={(item) => item.id}

        />
    )
 };

 export default ProductList;

const styles = StyleSheet.create({
    productImage: {width: 50, height: 50}
});