import React from 'react';
import {View, Text, Image} from 'react-native';

export default () => {
    return(
        <View>
            <Image
                style={{height:100, width: 100}}
                source={{
                    uri:"https://th.bing.com/th/id/R.21189e58ee53664f657d9cc00e98c4dc?rik=gfHq8MakPLDBIg&pid=ImgRaw&r=0"
                }} 
            />
            <Text>Texto da imagem</Text>
        </View>
    )
}