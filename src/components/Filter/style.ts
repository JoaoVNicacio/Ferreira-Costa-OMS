import styled from 'styled-components'

export const TimeFilter = styled.div`
    width: 20vw;
    height: 10vh;
    margin-left: 0.7%;
    margin-top: 0.7%;
    position: relative;
    user-select: none;

    .dropdown-btn{
        padding: .5rem;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border-radius: 8px;
        box-shadow: 0 3px 3px 0px rgba(0, 0, 0,0.2);
    }

    .dropdown-content{
        position: absolute;
        padding: 5px;
        background-color: #fff;
        width: 90%;
        border-radius: 8px;
        box-shadow: 0 3px 3px 0px rgba(0, 0, 0,0.2);
    }

    .dropdown-item{
        padding: 5px;
        cursor: pointer;
        transition: all .2s;

        &:hover{
            background-color: #f4f4f4;
            border-radius: 8px;
        }
    }


`