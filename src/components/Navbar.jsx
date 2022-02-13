import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height:50px;
    `
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const Logo = styled.h1`
    font-weight:bold;
    text-decoration: underline crimson;
`

const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width:480px){
        display: none;
    }
`
const Menuitem = styled.li`
    list-style: none;
    margin-right: 30px;
    font-size: 20px;
    font-weight:bold;
    color: grey;
`
const Button = styled.button`
    Border: 2px solid white;
    padding: 10px 15px;
    background-color: crimson;
    color: white;
    font-weight:bold;
    border-radius: 10px;
    cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Logo>Agency</Logo>
            <Menu>
            <Menuitem>Home</Menuitem>
            <Menuitem>Features</Menuitem>
            <Menuitem>Services</Menuitem>
            <Menuitem>Prices</Menuitem>
            <Menuitem>Contact</Menuitem>
            </Menu>
            </Left>
            <Button>JOIN TODAY</Button>
        </Wrapper>
        </Container>
  )
}

export default Navbar