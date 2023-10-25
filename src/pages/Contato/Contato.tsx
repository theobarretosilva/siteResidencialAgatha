import { useState } from 'react';
import * as S from './Contato.styles'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

type formContato = {
    nome: string;
    email: string;
    telefone: string;
    mensagem: string;
}

export function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    function sendEmail(e: React.FormEvent<formContato>) {
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
        .then(() => {
            setNome("");
            setEmail("");
            setTelefone("");
            setMensagem("");

            toast.success('Email de contato enviado com sucesso!', {
                duration: 4000,
                position: 'top-center',
            });
        }, (err) => {
            toast.error('Não foi possivel enviar o email de contato! Tente novamente mais tarde!', {
                duration: 4000,
                position: 'top-center',
            });
        })
    }

    return(
        <S.DivFlex>
            <S.ImagemAside src='https://github.com/theobarretosilva/siteResidencialAgatha/blob/main/src/assets/img/idoso_aside.jpg?raw=true' />
            <S.MainForm>
                <S.FaixaDegrade>
                    <S.TituloFaixa>Entre em contato conosco!</S.TituloFaixa>
                    <S.SubtituloFaixa>Estamos prontos para ouvir você e ajudar no que for necessário.</S.SubtituloFaixa>
                </S.FaixaDegrade>
                <S.Form onSubmit={sendEmail}>
                    <S.Input
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                        placeholder='Nome completo'
                        type='text'
                    />
                    <S.Input 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='E-mail'
                        type='email'
                    />
                    <S.InputMaskStyled
                        onChange={(e) => setTelefone(e.target.value)}
                        value={telefone}
                        mask="(99) 99999-9999"
                        placeholder='Telefone para contato'
                        type='tel'
                    />
                    <S.TextArea
                        onChange={(e) => setMensagem(e.target.value)}
                        value={mensagem}
                        placeholder='Conte-nos o que você procura'
                    />
                    <S.BtnEnviar>Enviar</S.BtnEnviar>
                </S.Form>
            </S.MainForm>
        </S.DivFlex>
    )
}