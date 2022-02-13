import React from 'react'
import styled from 'styled-components'
import App from "../img/app2.png"
import AnimatedShape from './AnimatedShape'

const Container = styled.div`
    display: flex;
    @media only screen and (max-width:480px){
        flex-direction:column;
        padding: 30px 20px;
    }

`
const Left = styled.div`
    width: 50%;
    @media only screen and (max-width:480px){
        display: none;
    }

`
const Image = styled.img`

`
const Right = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width:480px){
        width:100%;
    }

`
const Title = styled.span`
    font-size: 70px;
    @media only screen and (max-width:480px){
        font-size:50px;
    }
`
const SuTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`
const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`

const Button = styled.button`
    width:150px;
    border: none;
    padding: 15px 20px;
    color: white;
    background-color: darkblue;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
`

const Feature = () => {
  return (
    <Container>
        <Left><Image src={App} /></Left>
        <Right>
            <Title>
               <b>good</b> design<br />
               <b>good</b> business
            </Title>
            <SuTitle>We know that good design means good business.</SuTitle>
            <Desc>We help our clients suceed by creating brand identities, digital experiences,
                and print materials that communicate clearly, achieve marketing goals, and look fantastic
            </Desc>
            <Desc>We care about you business and guarantee you will achieve your marketing goals</Desc>
            <Button>Learn More</Button>
        </Right>
        <AnimatedShape />
    </Container>
  )
}

export default Feature