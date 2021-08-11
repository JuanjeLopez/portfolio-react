import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid #333;
    border-radius: 20px;
    height: 100%;

    button {
        border-radius: 0 0 17px 17px;
        color: #fff;
        background-color: #92245b;
    }

    button:hover{
        color: #fff;
        background-color: #1e4f80;
    }

    img {
        max-height: 150px;
        min-height: 150px;
        object-fit: scale-down;
        border-radius: 20px 20px 0 0;
        padding-top: 40px;
    }

    div{
        position: relative;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }

    div h3{
        font-family: 'Jura', sans-serif;
    }

    div p{
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        text-align: left;
        overflow: hidden;
    }


    .price {
        font-family: 'Barlow', sans-serif;
        color: rgb(65, 141, 128);
        display: flex;
        height: 30px;
        flex-direction: column;
        align-content: center;
        justify-content: flex-end;
        align-items: center;
    }
`