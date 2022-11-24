import styled from "styled-components";

export const Container = styled.section`
    .dashboard {
        width: 98%;
        height: auto;
        margin: 0;

        hr {
            color: #000;
            border: 0.3 rem;
        }

        .upperItem {
            width: 99.5%;
            height: auto;
            background-color: #fff;
            border-radius: 8px;
            margin: 0 0.7% 0.7% 0.7%;
            box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.2);
            padding: 0;
            display: flex;
            justify-content: center;

            table {
                width: 48rem;

                tr {
                    width: 48rem;
                    display: flex;
                    justify-content: space-around;

                    th {
                        display: inline-block;
                        margin: 0.5rem;
                        width: 8rem;
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
            width: 100%;

            .leftBiggerItem {
                width: 75%;
                height: 18rem;
                background-color: #fff;
                border-radius: 8px;
                margin: 0.7% 0.7% 0.7% 0.7%;
                box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.2);
                overflow-y: scroll;
                display: flex;
                justify-content: center;

                table {
                        tr:first-child {
                                th {
                                    width: 20rem;
                                    display: inline-block;
                                    margin: 0.5rem 2rem;
                                    text-align: center;
                                    font-size: 14px;
                                }
                        }

                        tr {
                            width: auto;
                            display: flex;
                            justify-content: center;

                            th {
                                width: 11rem;
                                display: inline-block;
                                margin: 0.5rem 0.2rem;
                                text-align: center;
                                font-size: 12px;
                            }

                            td {
                                width: 8rem;
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
                width: 38%;
                height: 18rem;
                background-color: #fff;
                border-radius: 8px;
                margin: 0.7% 0.7% 0.7% 0.7%;
                box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.2);
                overflow-y: scroll;
                display: flex;
                justify-content: center;

                table {
                    tr:first-child {
                        th {
                            width: 20rem;
                            display: inline-block;
                            margin: 0.5rem 2rem;
                            text-align: center;
                            font-size: 14px;
                        }
                        }

                        tr {
                        width: 22rem;
                        display: flex;
                        justify-content: center;

                        th {
                            width: 2.5rem;
                            display: inline-block;
                            margin: 0.3rem 2rem;
                            text-align: center;
                            font-size: 12px;
                        }

                        td {
                            width: 6rem;
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
