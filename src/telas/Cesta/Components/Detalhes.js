import React from "react";

import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import BotaoCompra from "../../../components/BotaoCompra";

import Texto from "../../../components/Texto";


export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
    return <>
        <Texto style={estilos.nome}>
            {nome}
        </Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>
                {nomeFazenda}
            </Texto>
        </View>
        <Texto style={estilos.descricao}>
            {descricao}
        </Texto>
        <Texto style={estilos.preco}>
            {preco}
        </Texto>

        <BotaoCompra botao={botao}/>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        color: "white",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16
    },

    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: '#2A9F85',
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
});