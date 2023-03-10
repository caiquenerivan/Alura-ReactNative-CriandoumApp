import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Texto from "../../../components/Texto";

export default function Item({ item: { nome, imagem } }) {


    return <View style={estilos.item} key={nome}>
        <Image source={imagem} style={estilos.imagemItem} />
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagemItem: {
        width: 46,
        height: 46,

    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
});