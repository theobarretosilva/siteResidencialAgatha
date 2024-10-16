import { useState } from 'react';
import * as S from './Contato.styles'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// type formContato = {
//     nome: string;
//     email: string;
//     telefone: string;
//     mensagem: string;
// }

export function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCqMzQebcNXrsKK_HtQLYLvVQT-XI1a8Ng"
      })

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (nome == '' || email == '' || telefone == '' || mensagem == "") {
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: nome,
            message: mensagem,
            email: email,
            phone: telefone,
        };
    
        emailjs.send("service_um12wck", "template_pzimtm2", templateParams, "9Lu0En11dnW67-NrV")
        .then((response) => {
            setNome("");
            setEmail("");
            setTelefone("");
            setMensagem("");

            toast.success('Email de contato enviado com sucesso!', {
                duration: 4000,
                position: 'top-center',
            });

            console.log(response)
        }, (err) => {
            toast.error('Não foi possivel enviar o email de contato! Tente novamente mais tarde!', {
                duration: 4000,
                position: 'top-center',
            });

            console.log(err)
        })
    }

    const position = {
        lat: -27.610789125343665, 
        lng: -48.59604677870633 
    }

    const { innerWidth: width } = window;

    return(
        <S.DivFlex>
            <S.DivMaps>
                <S.TituloFaixa>Entre em contato conosco!</S.TituloFaixa>
                <S.SubtituloFaixa>Estamos prontos para ouvir você e ajudar no que for necessário.</S.SubtituloFaixa>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={width > 450 ? {width: "42vw", height: "60vh", marginTop: "2vh"} : {display: 'none'}}
                        center={position}
                        zoom={16}
                    >
                        
                        <Marker position={position} />
                        <></>
                    </GoogleMap>
                ) : <></>}
            </S.DivMaps>
            <S.Form onSubmit={sendEmail}>
                <S.DivForm>
                    <S.NameInput>Nome completo</S.NameInput>
                    <S.Input
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                        type='text'
                    />
                </S.DivForm>
                <S.DivForm>
                    <S.NameInput>E-mail</S.NameInput>
                    <S.Input 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type='email'
                    />
                </S.DivForm>
                <S.DivForm>
                    <S.NameInput>Telefone para contato</S.NameInput>
                    <S.InputMaskStyled
                        onChange={(e) => setTelefone(e.target.value)}
                        value={telefone}
                        mask="(99) 99999-9999"
                        type='tel'
                    />
                </S.DivForm>
                <S.DivForm>
                    <S.NameInput>Conte-nos o que você procura</S.NameInput>
                    <S.TextArea
                        onChange={(e) => setMensagem(e.target.value)}
                        value={mensagem}
                    />
                </S.DivForm>
                
                <S.BtnEnviar>Enviar</S.BtnEnviar>
            </S.Form>
        </S.DivFlex>
    )
}