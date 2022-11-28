import styled from "styled-components";

export const Container = styled.section`
    .dashboard {
        width: 98%;
        height: auto;
        margin: 0;

        .deliveredPct{
            color: #5A8F19;
        }

        .delayedPct{
            color: #FFA800;
        }

        .deniedPct{
            color: #AA0E27;   
        }

        hr {
            color: #000;
        }

        .upperItem {
            width: 99.5%;
            height: auto;
            background-color: #fff;
            border-radius: 8px;
            margin: 0 0.7% 0.7% 0.7%;
            box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.2);
            padding: 0;

            table {
                width: auto;
                margin: 0 auto;

                tr {
                    width: 48rem;
                    display: flex;
                    justify-content: space-around;

                    th {
                        display: inline-block;
                        margin: 0.5rem;
                        width: 20%;
                        text-align: center;
                    }

                    td {
                        display: inline-block;
                        margin: 0.5rem;
                        width: 8rem;
                        text-align: center;
                    }
                }
            }
        }

        .rowOfItems {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin: 0 0.7% 0.7% 0.7%;
            width: 100%;

            .leftBiggerItem {
                width: 60%;
                height: 35vh;
                background-color: #fff;
                border-radius: 8px;
                margin: 0.7% 0 0 0;
                box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.2);
                display: flex;
                justify-content: center;
                overflow-y: scroll;

                table {
                    width: 100%;
                    padding: 7px;

                    tr:first-child {
                            th {
                                width: 20rem;
                                display: inline-block;
                                margin: 1rem 2rem;
                                text-align: center;
                                font-size: 14px;
                            }
                    }

                    tr {
                        width: auto;
                        display: flex;
                        justify-content: center;

                        thead{
                            width: 100%;
                            margin: 1% 0;
                            display: flex;
                            justify-content: space-between;
                        }

                        th {
                            width: 50%;
                            margin: 0.5rem 0.2rem;
                            text-align: center;
                            font-size: 12px;
                        }

                        td {
                            width: 50%;
                            display: inline-block;
                            margin: 0.5rem;
                            text-align: center;
                            font-size: 12px;
                        }

                        div {
                            background-color: #f9f6f6;
                            border: solid 1px;
                            border-radius: 8px;
                            box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.2);
                            margin: 0.5%;
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                }
            }

            .rightSmallerItem {
                width: 40%;
                height: 35vh;
                background-color: #fff;
                border-radius: 8px;
                margin: 0.7%;
                box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.2);
                display: flex;
                justify-content: center;
                overflow-y: scroll;

                table {
                    width: 100%;
                    padding: 7px;

                    tr:first-child {
                        th {
                            width: 20rem;
                            display: inline-block;
                            margin: 1rem 2rem;
                            text-align: center;
                            font-size: 14px;
                        }
                    }

                    tr {
                        width: auto;
                        display: flex;
                        justify-content: center;

                        thead{
                            width: 100%;
                            margin: 1% 0;
                            display: flex;
                            justify-content: space-between;
                        }

                        th {
                            width: 50%;
                            margin: 0.5rem 2rem;
                            text-align: center;
                            font-size: 12px;
                        }

                        td {
                            width: 50%;
                            display: inline-block;
                            margin: 0.5rem;
                            text-align: center;
                            font-size: 12px;
                        }

                        div {
                            background-color: #f9f6f6;
                            border: solid 1px;
                            border-radius: 8px;
                            box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.2);
                            margin: 0.5%;
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                }
            }
        }
    }
`;
