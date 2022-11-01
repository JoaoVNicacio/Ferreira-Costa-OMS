import styled from 'styled-components'

export const TimeFilter = styled.div`
    width: 20vw;
    height: 15vh;
    padding: 1rem;
    position: relative;
    user-select: none;

    .dropdown-btn{
        padding: 1rem;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }

    .dropdown-content{
        position: absolute;
        padding: 15px;
        background-color: #fff;
        width: 90.2%;
    }

    .dropdown-item{
        padding: 5px;
        cursor: pointer;
        transition: all .2s;

        &:hover{
            background-color: #f4f4f4;
        }
    }

`